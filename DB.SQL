CREATE TABLE customer(
	customer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	email VARCHAR(25) NOT NULL,
	phone VARCHAR(20) NOT NULL,
	address1 VARCHAR(50) NOT NULL,
	city VARCHAR(20) NOT NULL,
	state VARCHAR(50) NOT NULL,
	zip VARCHAR(10) NOT NULL,
	username varchar(20) NOT NULL,
	password varchar(2000) NOT NULL
	);

CREATE TABLE weight_products(
    product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50),
    brand VARCHAR(20) NOT NULL,
    pound INT NOT NULL,
    color VARCHAR(20)
);


CREATE TABLE orderdetail (
	orderdetail_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	product_id INT NOT NULL,
	saleprice DECIMAL(8,2) NOT NULL,
	qty INT NOT NULL,
	FOREIGN KEY (product_id) REFERENCES weight_products(product_id) ON DELETE CASCADE ON UPDATE RESTRICT
	);

CREATE TABLE review (
	review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	customer_id INT NOT NULL,
	product_id INT NOT NULL,
	reviewdate DATE NOT NULL,
	comments  VARCHAR(500),
	rating INT NOT NULL,
	status  VARCHAR(10),
	FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE ON UPDATE RESTRICT,
	FOREIGN KEY (product_id) REFERENCES weight_products(product_id) ON DELETE CASCADE ON UPDATE RESTRICT
	);

INSERT INTO customer(firstname, lastname, email, phone, address1, city, state, zip, username, password) VALUES ("Kumail", "Razvi", "krazvi@depaul.edu", "6306733146", "123 Main Street", "Chicago", "IL", "60101", "krazvi", "password");
INSERT INTO customer(firstname, lastname, email, phone, address1, city, state, zip, username, password) VALUES ("John", "Smith", "jsmith@depaul.edu", "6306733146", "123 Main Street", "Chicago", "IL", "60101", "krazvi", "password");
INSERT INTO customer(firstname, lastname, email, phone, address1, city, state, zip, username, password) VALUES ("bob", "smith", "bsmith@depaul.edu", "6306733146", "123 Main Street", "Chicago", "IL", "60101", "krazvi", "password");
INSERT INTO customer(firstname, lastname, email, phone, address1, city, state, zip, username, password) VALUES ("John", "rodgers", "jrodgers@depaul.edu", "6306733146", "123 Main Street", "Chicago", "IL", "60101", "krazvi", "password");
INSERT INTO customer(firstname, lastname, email, phone, address1, city, state, zip, username, password) VALUES ("jimmy", "wales", "jwales@depaul.edu", "6306733146", "123 Main Street", "Chicago", "IL", "60101", "krazvi", "password");


INSERT INTO weight_products(product_id, product_name, brand, pound, color) VALUES (10,"dumbbells", "velocity", 10, "pink");
INSERT INTO weight_products(product_id, product_name, brand, pound, color) VALUES (11,"dumbbells", "velocity", 20, "pink");
INSERT INTO weight_products(product_id, product_name, brand, pound, color) VALUES (12,"dumbbells", "velocity", 30, "pink");
INSERT INTO weight_products(product_id, product_name, brand, pound, color) VALUES (13,"dumbbells", "velocity", 40, "pink");
INSERT INTO weight_products(product_id, product_name, brand, pound, color) VALUES (14,"dumbbells", "velocity", 50, "pink");

INSERT INTO orderdetail (orderdetail_id, product_id, saleprice, qty) VALUES (12, 10, 75.00, 1);
INSERT INTO orderdetail (orderdetail_id, product_id, saleprice, qty) VALUES (13, 10, 76.00, 1);
INSERT INTO orderdetail (orderdetail_id, product_id, saleprice, qty) VALUES (14, 10, 77.00, 1);
INSERT INTO orderdetail (orderdetail_id, product_id, saleprice, qty) VALUES (15, 10, 78.00, 1);
INSERT INTO orderdetail (orderdetail_id, product_id, saleprice, qty) VALUES (16, 10, 79.00, 1);

INSERT INTO review (review_id, customer_id, product_id, reviewdate, comments, rating, status) VALUES (1,2,10, "2022-10-01", "good", 5, "go");
INSERT INTO review (review_id, customer_id, product_id, reviewdate, comments, rating, status) VALUES (2,2,10,"2022-10-01", "bad", 1, "go");
INSERT INTO review (review_id, customer_id, product_id, reviewdate, comments, rating, status) VALUES (3,2,10,"2022-10-01", "average", 2, "go");
INSERT INTO review (review_id, customer_id, product_id, reviewdate, comments, rating, status) VALUES (14,2,10,"2022-10-01", "average", 3, "go");
INSERT INTO review (review_id, customer_id, product_id, reviewdate, comments, rating, status) VALUES (4,2,10,"2022-10-01", "averge", 4, "go");


