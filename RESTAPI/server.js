const mongoose = require('mongoose');
const http = require('http');
const app = require('./app.js');
const db = require('./config/keys').MongoURI;
const webserver_port = process.env.WEB_SERVER_PORT || 9999;
//DB configuration 
const webserver_address =  "http://localhost:" + webserver_port;


// API WEB SERVER
http
.createServer(app)
.listen(webserver_port, () => console.log("WEB SERVER: " + webserver_address));

// MONGO DB SERVER

//Connect to mongo 
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err))
