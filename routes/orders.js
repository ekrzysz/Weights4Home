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
    let query = "SELECT orderdetail_id, product_id, saleprice, qty FROM orderdetail"; 

  // execute query
  db.query(query, (err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		}
	res.render('orders/allrecords', {allrecs: result });
 	});
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// URL: http://localhost:3002/automobile/99/show
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT orderdetail_id, product_id, saleprice, qty FROM orderdetail WHERE orderdetail_id = " + req.params.recordid; 
    
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
            console.log("error");
        } else {
            res.render('orders/onerec', {onerec: result[0] });
        } 
    });
});

// ==================================================
// Route to show empty form to obtain input form end-user.
// URL: http://localhost:3002/automobile/addrecord
// ==================================================
router.get('/addrecord', function(req, res, next) {
	res.render('orders/addrec');
});

// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {

    let insertquery = "INSERT INTO orderdetails (product_id, saleprice, qty) VALUES (?, ?, ?)"; 
    
    db.query(insertquery,[req.body.product_id, req.body.saleprice, req.body.qty],(err, result) => {
        if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.redirect('/orders');
                }
    });
});

// ==================================================
// Route to edit one specific record.
// URL: http://localhost:3002/automobile/99/edit 
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT orderdetail_id, product_id, saleprice, qty FROM orderdetail WHERE orderdetail_id = " + req.params.recordid; 
    
      // execute query
      db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.render('orders/editrec', {onerec: result[0] });
            } 
         });
});


// ==================================================
// Route to save edited data in database.
// ==================================================
router.post('/save', function(req, res, next) {
	let updatequery = "UPDATE orderdetail SET product_id = ?, saleprice = ?, qty = ? WHERE orderdetail_id = " + req.body.orderdetail_id; 

	db.query(updatequery,[req.body.product_id, req.body.saleprice, req.body.qty],(err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		} else {
			res.redirect('/orders');
		}
	});
});


// ==================================================
// Route to delete one specific record.
// URL: http://localhost:3002/automobile/99/delete
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM orderdetail WHERE orderdetail_id = " + req.params.recordid;  
    
      // execute query
      db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.redirect('/orders');
            } 
         });
    });
    

module.exports = router;