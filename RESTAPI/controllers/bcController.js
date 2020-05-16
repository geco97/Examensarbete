
var jsonQuery = require('json-query')
/*----- GET ALL JOBS ------*/

exports.getBcs = function(req, res) {
    let beautycenters = require("../models/Beautycenterdata.json");

    return res.status(200).json({salonList:beautycenters});
}



/*----- GET SINGLE JOB ------*/

exports.getBC = function(req, res) {
    let data = require("../models/Beautycenterdata.json");
    const BCid = req.query.id;
    let beautycenter="";
    for(let i = 0; i< data.length ;i++){
        if(data[i].id == BCid){
            beautycenter=data[i];
            break;
        }
    }
   return res.status(200).json(beautycenter);
}