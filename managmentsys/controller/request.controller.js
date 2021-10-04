const Request=require ("../models/request.model.js");
const dateAndtime=require("../models/dataAndTime.js");
let reqest_status=['request_send','operator accepted','operator rejected','adjutant accepted','adjutant rejected','manager accepted','manager rejected'];             
    
  exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const request =new Request({
      N_ID: req.body.N_ID,
      name: req.body.name,
      request: req.body.request,
      time: dateAndtime(),
      status: reqest_status[0]
    
    });
    Request.create(request, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the request."
        });
      else res.send(data);
    });
  };
  
  exports.findAll = (req, res) => {
    Request.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving requests."
        });
      else res.send(data);
    });
  };
  exports.findAll_1 = (req, res) => {
  Request.getAll_1((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving requests."
      });
    else res.send(data);
  });
};

  exports.findAll_2 = (req, res) => {
  Request.getAll_2((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving requests."
      });
    else res.send(data);
  });
}; 
 exports.findByNID = (req, res) => {
    Request.findOne(req.params.N_ID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found request with id ${req.params.N_ID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving request with id " + req.params.N_ID
          });
        }
      } else res.send(data);
    });
  };

  exports.acceptByOperator = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
   
     // // Create a request
     const request =new Request({
      time: dateAndtime(),
      status: reqest_status[1]
    });
    Request.update(
      req.params.id,
      new Request(request),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found request with id ${request.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating request with id " + request.id
            });
          }
        } else {
          res.send(data);
      }
      }
    );
  };
// accept by adjutant 
exports.acceptByAdjutant = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

   // // Create a request
   const request =new Request({
    time: dateAndtime(),
    status: reqest_status[3]
  });
  Request.update(
    req.params.id,
    //new Request
    (request),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found request with id ${request.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating request with id " + request.id
          });
        }
      } else {
        res.send(data);
    }
    }
  );
};

//rejectByAdjutant 
exports.rejectByAdjutant = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
   const request =new Request({
    time: dateAndtime(),
    status: reqest_status[4]
  });
  Request.update(
    req.params.id,
    new Request(request),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found request with id ${request.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating request with id " + request.id
          });
        }
      } else {
        res.send(data);
    }
    }
  );
};

//// accept by manager 
exports.acceptByManager = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
   // // Create a request
   const request =new Request({
    time: dateAndtime(),
    status: reqest_status[5]
  });
  Request.update(
    req.params.id,
    new Request(request),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found request with id ${request.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating request with id " + request.id
          });
        }
      } else {
        res.send(data);
    }
    }
  );
};

//reject by manager 
exports.rejectByManager = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
   const request =new Request({
    time: dateAndtime(),
    status: reqest_status[6]
  });
  Request.update(
    req.params.id,
    new Request(request),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found request with id ${request.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating request with id " + request.id
          });
        }
      } else {
        res.send(data);
    }
    }
  );
};

  exports.delete = (req, res) => {
    Request.removeRequest(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found request with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete request with id " + req.params.id
          });
        }
      } else res.send({ message: `request was deleted successfully!` });
    });
  };