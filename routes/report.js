var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('report/reportmenu');
});

// ==================================================
// Route to list all records. Display view to list all records
// URL= http://localhost:3002/automobile/
// ==================================================

router.get('/customers', function(req, res, next) {
    let query = "SELECT customer_id, firstname, lastname, email, phone, address1, city, state, zip, username, password FROM customer"; 

  // execute query
  db.query(query, (err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		}
	res.render('report/allcusts', {allrecs: result });
 	});
});

router.get('/weights', function(req, res, next) {
    let query = "SELECT product_id, product_name, brand, pound, color, homepage FROM weight_products"; 

  // execute query
  db.query(query, (err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		}
	res.render('report/allprods', {allrecs: result });
 	});
});

// ==================================================
// Route to list all records. Display view to list all records
// URL= http://localhost:3002/automobile/
// ==================================================

router.get('/orders', function(req, res, next) {
    let query = "SELECT orderdetail_id, product_id, saleprice, qty FROM orderdetail"; 

  // execute query
  db.query(query, (err, result) => {
		if (err) {
			console.log(err);
			res.render('error');
		}
	res.render('report/alldetails', {allrecs: result });
 	});
});

module.exports = router;
