const route = require('express').Router();
const authorization = require('../auth/auth.js');
const cards = require('../controllers/ticketController.js');


// unrestricted routes
route.get("/all", authorization , cards.getCards);
route.get("/:id", authorization , cards.getCard);
route.delete("/:id", authorization, cards.deleteCard);  

// restricted routes

module.exports = route;