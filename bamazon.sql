CREATE DATABASE BamazonP_db

use BamazonP_db;


create table items (
	ItemID integer(90) not null,
    ItemsName varchar(255) not null,
    DepartmentName varchar(255) not null,
    Price integer(255) not null,
    StockQuanitiy integer(100) not null
);


INSERT INTO items
VALUES (01, "satchel", "men", 69.99, 13)

INSERT INTO items
VALUES (02, "grill", "outdoor", 12, 19)

INSERT INTO items
VALUES (03, "Lord of the Rings", "books", 24.99, 69)

INSERT INTO items
VALUES (04, "Bonsai Plant", "office", 10.99, 30)

INSERT INTO items
VALUES (05, "Galaxy s-12", "electronics", 999.00, 23)

INSERT INTO items
VALUES (06, "3D Printer", "electronics", 100.99, 18)

INSERT INTO items
VALUES (07, "I-Pad Pro", "electronics", 599, 28)

INSERT INTO items
VALUES (08, "The Hobbit", "books", 16.99, 38)

INSERT INTO items
VALUES (09, "lawnmower", "outdoor", 199.99, 39)

INSERT INTO items
VALUES (10, "kilt", "men", 19.99, 6)

INSERT INTO items
VALUES (11, "tuxedo", "men", 300, 5)

INSERT INTO items
VALUES (12, "ticonderoga pencils", "office", 5.99, 900)

INSERT INTO items
VALUES (12, "goldslick vodka", "men", 19.99, 10)