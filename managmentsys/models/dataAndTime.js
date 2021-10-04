
const dateAndtime=function(){
    this.ts=Date.now();
    this.date_ob = new Date(ts);
    this.date = date_ob.getDate();
    this.month = date_ob.getMonth() + 1;
    this.year = date_ob.getFullYear();
    this.hours = date_ob.getHours();
    this.minutes = date_ob.getMinutes();
    this.seconds = date_ob.getSeconds();
return ( year + "-" + month + "-" + date + " " + hours +":" + minutes + ":" + seconds);
};
module.exports = dateAndtime;