const route = require('express').Router();
const beautycenter = require('../controllers/bcController.js');


/*----- GET ALL beautycenter ------*/
route.get("/getAll", beautycenter.getBcs);

/*----- GET SINGLE beautycenter ------*/
route.get("/:id", beautycenter.getBC);


module.exports = route;