const express = require('express');

var jsonfile = require('jsonfile');    
var file = '../data/reviews.json'

function createRouter() {

  const router = express.Router();

  router.post('/savereview', (req, res, next) => {
	console.log("Inside save review method");

	var rate = req.body.rate;
	var review= req.body.review;
        var name = req.body.name;
        var email = req.body.email;

        var obj = {rate:rate, review:review, name: name , email:email}
        jsonfile.writeFileSync(file, obj, {flag: 'a'});

	res.status(200).json("Success");
  });

  
  return router;
}

module.exports = createRouter;