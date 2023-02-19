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
    let query = "SELECT review_id, customer_id, product_id, reviewdate, comments, rating, status FROM review"; 

  // execute query
  db.query(query, (err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		}
	res.render('reviews/allrecords', {allrecs: result });
 	});
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// URL: http://localhost:3002/automobile/99/show
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT review_id, customer_id, product_id, reviewdate, comments, rating, status FROM review WHERE review_id = " + req.params.recordid; 
    
    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
            console.log("error");
        } else {
            res.render('reviews/onerec', {onerec: result[0] });
        } 
    });
});

// ==================================================
// Route to show empty form to obtain input form end-user.
// URL: http://localhost:3002/automobile/addrecord
// ==================================================
router.get('/addrecord', function(req, res, next) {
	res.render('reviews/addrec');
});

// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {

    let insertquery = "INSERT INTO review (customer_id, product_id, reviewdate, comments, rating, status) VALUES (?, ?, ?, ?, ?, ?)"; 
    
    db.query(insertquery,[req.body.customer_id, req.body.product_id, req.body.reviewdate, req.body.comments, req.body.rating, req.body.status],(err, result) => {
        if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.redirect('/reviews');
                }
    });
});

// ==================================================
// Route to edit one specific record.
// URL: http://localhost:3002/automobile/99/edit 
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT review_id, customer_id, product_id, reviewdate, comments, rating, status FROM review WHERE review_id = " + req.params.recordid; 
    
      // execute query
      db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.render('reviews/editrec', {onerec: result[0] });
            } 
         });
});


// ==================================================
// Route to save edited data in database.
// ==================================================
router.post('/save', function(req, res, next) {
	let updatequery = "UPDATE review SET customer_id = ?, product_id = ?, reviewdate = ?, comments = ?, rating = ?, status = ? WHERE review_id = " + req.body.review_id; 

	db.query(updatequery,[req.body.customer_id, req.body.product_id, req.body.reviewdate, req.body.comments, req.body.rating, req.body.status],(err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		} else {
			res.redirect('/reviews');
		}
	});
});


// ==================================================
// Route to delete one specific record.
// URL: http://localhost:3002/automobile/99/delete
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM review WHERE review_id = " + req.params.recordid;  
    
      // execute query
      db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            } else {
                res.redirect('/reviews');
            } 
         });
    });
    

module.exports = router;