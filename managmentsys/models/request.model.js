const sql=require("./db.js");
const Request=function(request){
    this.N_ID=request.N_ID;
    this.name=request.name;
    this.request=request.request;
    this.time=request.time;
    this.status=request.status;
};



Request.create=(newRequest, result) => {
sql.query('INSERT INTO requests SET ?', newRequest ,(err,res)=>{
    if (err){
        console.log("err: ",err);
        result(err,null);
        return;
    }
        console.log("created request:",{id: res.insertId,...newRequest});
        result(null, {id: res.insertId,...newRequest});
});
};


Request.findOne=(N_ID,result)=>{
sql.query(`SELECT * FROM requests WHERE N_ID =${N_ID}`,(err,res)=>{
    if (err) {
        console.log("error : ", err); 
        result(err,null);
        return;
    }
    if (result.length){
        console.log("found request :",res);
        result(null,res);
        return;
    }
    result({kind:"not_found"},null);

});};
Request.getAll=result=>{
    sql.query("SELECT * FROM requests",(err,res)=>{
        if (err){
            console.log("error: ",err);
            result(null,err);
            return;
        }
        console.log("requests:",res);
        result(null,res);

    });
};
// get all requests send to adjutant
Request.getAll_1=result=>{
    sql.query("SELECT * FROM requests WHERE status='operator accepted' OR status='manager rejected'",(err,res)=>{
        if (err){
            console.log("error: ",err);
            result(null,err);
            return;
        }
        console.log("requests:",res);
        result(null,res);

    });
};
// get all requests send to manager
Request.getAll_2=result=>{
    sql.query("SELECT * FROM requests WHERE status='adjutant accepted'",(err,res)=>{
        if (err){
            console.log("error: ",err);
            result(null,err);
            return;
        }
        console.log("requests:",res);
        result(null,res);

    });
};

//"UPDATE customers SET address = 'request.status',time =request.time WHERE id = ?"
// "UPDATE requests SET status='' , time  WHERE id =? ",[request.status,request.time,id],
Request.update=(id,request,result)=>{
sql.query("UPDATE requests SET status=? , time=? WHERE id =? ",
[request.status,request.time,id],
(err, res)=>{
if (err){
    console.log("error :", err);
    result(null,err);
    return;
}
if (res.affectedRows==0){
    result ({kind : "not_found"},null);
    return;

}
console.log("updated request :",{id:id,...request});
result(null,{id:id,...request});
});
     
};

Request.removeRequest=(id,result)=>{
    sql.query("DELETE FROM requests WHERE id = ?",id,(err,res)=>{
        if (err){
            console.log("error : ",err);
            result(null,err);
            return;
        }
        if (res.affectedRows==0){
            result({kind: "not_found"},null);
            return;
        }
        console.log("deleted request with id :",id);
        result(null,res);
    });
};
module.exports = Request;