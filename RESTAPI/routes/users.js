const route = require('express').Router();

const authorization = require('../auth/auth.js');
const users = require('../controllers/userController.js');

// unrestricted routes
route.post("/register", users.register);
route.post("/login", users.login);

// restricted routes
route.get("/get/:id", authorization, users.getUser);        // Get specific user
route.put("/update/:id", authorization, users.updateUser);     // Update specific user



module.exports = route;