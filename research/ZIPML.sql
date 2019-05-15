Drop database if exists zipml_db;
create database zipml_db;

use zipml_db;

select * 
from zipcode_listings
where zipcode = 85016;