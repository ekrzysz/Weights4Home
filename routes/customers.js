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
    let query = "SELECT customer_id, firstname, lastname, email, phone, address1, city, state, zip, username, password FROM customer"; 

  // execute query
  db.query(query, (err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		}
	res.render('customers/allrecords', {allrecs: result });
 	});
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// URL: http://localhost:3002/automobile/99/show
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT customer_id, firstname, lastname, email, phone, address1, city, state, zip, username, password FROM customer WHERE customer_id = " + req.params.recordid; 
    
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
            console.log("error");
        } else {
            res.render('customers/onerec', {onerec: result[0] });
        } 
    });
});

// ==================================================
// Route to show empty form to obtain input form end-user.
// URL: http://localhost:3002/automobile/addrecord
// ==================================================
router.get('/addrecord', function(req, res, next) {
	res.render('customers/addrec');
});

// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {

    let insertquery = "INSERT INTO customer (firstname, lastname, email, phone, address1, city, state, zip, username, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"; 
    
    db.query(insertquery,[req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.body.address1, req.body.city, req.body.state, req.body.zip, req.body.username, req.body.password],(err, result) => {
        if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.redirect('/customers');
                }
    });
});

// ==================================================
// Route to edit one specific record.
// URL: http://localhost:3002/automobile/99/edit 
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT customer_id, firstname, lastname, email, phone, address1, city, state, zip, username, password FROM customer WHERE customer_id = " + req.params.recordid; 
    
      // execute query
      db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.render('customers/editrec', {onerec: result[0] });
            } 
         });
});


// ==================================================
// Route to save edited data in database.
// ==================================================
router.post('/save', function(req, res, next) {
	let updatequery = "UPDATE customer SET firstname = ?, lastname = ?, email = ?, phone = ?, address1 = ?, city = ?, state = ?, zip = ?, username = ?, password = ? WHERE customer_id = " + req.body.customer_id; 

	db.query(updatequery,[req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.body.address1, req.body.city, req.body.state, req.body.zip, req.body.username, req.body.password],(err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		} else {
			res.redirect('/customers');
		}
	});
});


// ==================================================
// Route to delete one specific record.
// URL: http://localhost:3002/automobile/99/delete
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM customer WHERE customer_id = " + req.params.recordid;  
    
      // execute query
      db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.redirect('/customers');
            } 
         });
    });
    

module.exports = router;