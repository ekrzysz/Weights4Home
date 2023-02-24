/*
var express = require('express');
var router = express.Router();
// ==================================================
// Route to list all records. Display view to list all records
// ==================================================
router.get('/', function(req, res, next) {
let query = "SELECT product_id, product_name, brand, pound, color FROM weight_products";
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    }
        else{
        res.render('weights/allrecords', {allrecs: result });
        }
    });
});
//module.exports = router;

router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT product_id, product_name, brand, pound, color FROM weight_products WHERE product_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
    if (err) {
    console.log(err);
    res.render('error');
    }
    res.render('weights/onerec', {onerec: result[0] });
    });
    });
    module.exports = router;
    


    var express = require('express');
var router = express.Router();

*/
var express = require('express');
var router = express.Router();
// ==================================================
// Route to list all records. Display view to list all records
// URL= http://localhost:3002/automobile/
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT product_id, product_name, brand, pound, color, homepage FROM weight_products"; 

  // execute query
  db.query(query, (err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		}
	res.render('weights/allrecords', {allrecs: result });
 	});
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// URL: http://localhost:3002/automobile/99/show
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT product_id, product_name, brand, pound, color, homepage FROM weight_products WHERE product_id = " + req.params.recordid; 
    
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
            console.log("error");
        } else {
            res.render('weights/onerec', {onerec: result[0] });
        } 
    });
});

// ==================================================
// Route to show empty form to obtain input form end-user.
// URL: http://localhost:3002/automobile/addrecord
// ==================================================
router.get('/addrecord', function(req, res, next) {
	res.render('weights/addrec');
});

// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {

    let insertquery = "INSERT INTO weight_products (product_name, brand, pound, color, homepage) VALUES (?, ?, ?, ?, ?)"; 
    
    var homepage_value=0;
    if (req.body.homepage)
    {
        homepage_value = 1;
    }


    db.query(insertquery,[req.body.product_name, req.body.brand, req.body.pound, req.body.color, homepage_value],(err, result) => {
        if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.redirect('/weights');
                }
    });
});

// ==================================================
// Route to edit one specific record.
// URL: http://localhost:3002/automobile/99/edit 
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT product_id, product_name, brand, pound, color, homepage FROM weight_products WHERE product_id = " + req.params.recordid; 
    
      // execute query
      db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.render('weights/editrec', {onerec: result[0] });
            } 
         });
});


// ==================================================
// Route to save edited data in database.
// ==================================================
router.post('/save', function(req, res, next) {
	let updatequery = "UPDATE weight_products SET product_name = ?, brand = ?, pound = ?, color = ?, homepage = ? WHERE product_id = " + req.body.product_id; 

    var homepage_value=0;
    if (req.body.homepage)
    {
        homepage_value = 1;
    }

	db.query(updatequery,[req.body.product_name, req.body.brand, req.body.pound, req.body.color, homepage_value],(err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		} else {
			res.redirect('/weights');
		}
	});
});


// ==================================================
// Route to delete one specific record.
// URL: http://localhost:3002/automobile/99/delete
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM weight_products WHERE product_id = " + req.params.recordid;  
    
      // execute query
      db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.redirect('/weights');
            } 
         });
    });
    

module.exports = router;