drop database nerdz_db;
CREATE database nerdz_db;

use  nerdz_db;

insert into scores (user_id, score, category_id,  created_at, updated_at) values 
(1,50, 3,now() , now() ),
(1, 55, 4,now() , now() ),
(1, 55, 2,now() , now() );

insert into categories (category_name) values 
("A"),
("B"),
("C");

insert into questions (question, category_id, created_at, updated_at) values 
("What day is today", 1,now() , now() ),
("How old are you?", 2, now(),now()),
("When is Christmas?", 3, now(), now());

insert into categories (category_name, created_at, updated_at) values 
("E", now() , now() ),
("B", now(),now()),
("C", now(), now());

select * from users;
select * from scores;
select * from categories;
select * from questions;
