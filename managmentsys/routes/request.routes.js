module.exports = app => {
    const requests = require("../controller/request.controller.js"); 
    //send a new request by customer
    app.post("/customers",requests.create);
    //retrieve all requests for customer by national ID
    app.get("/customers/:N_ID", requests.findByNID);
    //retrieve all requestes for operator 
    app.get("/operator",requests.findAll);
    // accept a request with request id by operator
    app.put("/operator/:id", requests.acceptByOperator);
    //reject a request (delete request with request id by operator)
    app.delete("/operator/:id", requests.delete);
    // get all requests sent to adjutant 
    app.get("/adjutant",requests.findAll_1);
    // accept a request with request id by adjutant
    app.put("/adjutant/:id", requests.acceptByAdjutant);
    // reject a request with request id by adjutant
    app.delete("/adjutant/:id", requests.rejectByAdjutant);
    // get all requests sent to manager
    app.get("/manager",requests.findAll_2);
    // accept a request with request id by manager
    app.put("/manager/:id", requests.acceptByManager);
    // reject a request with request id by manager
    app.delete("/manager/:id", requests.rejectByManager);

};