drop database nerdz_db;
CREATE database nerdz_db;

use  nerdz_db;
-- // now run the server to create the tables

insert into users (username, email, password, location, created_at, updated_at) values
("user1" , "user1@test.com", "test123",  "CA", now() , now()),
("user2" , "user2@test.com", "test123", "CA", now() , now()),
("user3" , "user3@test.com", "test123", "IL", now() , now()),
("user4" , "user4@test.com", "test123",  "IL", now() , now()),
("user5" , "user5@test.com", "test123", "NY", now() , now()),
("user6" , "user6@test.com", "test123", "NY", now() , now()),
("user7" , "user7@test.com", "test123",  "OH", now() , now()),
("user8" , "user8@test.com", "test123",  "OH", now() , now()),
("user9" , "user9@test.com", "test123",  "CO", now() , now()),
("user10" , "user10@test.com", "test123",  "CO", now() , now());

insert into categories (category_name, created_at, updated_at) values 
("CAT A", now(), now() ),
("CAT B", now(), now() ),
("CAT C", now(), now() ),
("CAT D", now(), now() ),
("CAT E", now(), now() );



insert into scores (user_id, score, category_id,  created_at, updated_at) values 
(1,4, 1,now() , now() ),
(1, 3, 2,now() , now() ),
(1, 4, 3,now() , now() ),
(1,1, 4,now() , now() ),
(1, 3, 5,now() , now() ),
(2,4, 1,now() , now() ),
(2, 3, 2,now() , now() ),
(2, 3, 3,now() , now() ),
(2,5, 4,now() , now() ),
(2, 3, 5,now() , now() ),
(3,3, 1,now() , now() ),
(3, 3, 2,now() , now() ),
(3, 4, 3,now() , now() ),
(3,5, 4,now() , now() ),
(3, 3, 5,now() , now() ),
(4,4, 1,now() , now() ),
(4, 3, 2,now() , now() ),
(4, 4, 3,now() , now() ),
(4, 1, 4,now() , now() ),
(4, 3, 5,now() , now() ),
(5, 4, 1,now() , now() ),
(5, 3, 2,now() , now() ),
(5, 4, 3,now() , now() ),
(5,5, 4,now() , now() ),
(5, 3, 5,now() , now() ),
(6, 5, 1,now() , now() ),
(6, 3, 2,now() , now() ),
(6, 4, 3,now() , now() ),
(6,5, 4,now() , now() ),
(6, 3, 5,now() , now() ),
(7, 4, 1,now() , now() ),
(7, 3, 2,now() , now() ),
(7, 4, 3,now() , now() ),
(7,2, 4,now() , now() ),
(7, 3, 5,now() , now() ),
(8, 4, 1,now() , now() ),
(8, 3, 2,now() , now() ),
(8, 4, 3,now() , now() ),
(8,5, 4,now() , now() ),
(9, 3, 5,now() , now() ),
(9, 4, 1,now() , now() ),
(9, 5, 2,now() , now() ),
(9, 4, 3,now() , now() ),
(9,5, 4,now() , now() ),
(9, 3, 5,now() , now() ),
(10, 4, 1,now() , now() ),
(10, 3, 2,now() , now() ),
(10, 4, 3,now() , now() ),
(10,5, 4,now() , now() ),
(10, 3, 5,now() , now() );

insert into questions (question, category_id, created_at, updated_at) values 
("What day is today", 1,now() , now() ),
("How old are you?", 2, now(),now()),
("When is Monday?", 3, now(), now()),
("When is Tuesday?", 5, now(), now()),
("When is Wednesday?", 5, now(), now()),
("When is Thursday?", 1, now(), now()),
("When is Friday?", 2, now(), now()),
("When is Saturday?", 3, now(), now()),
("When is Sunday?", 4, now(), now()),
("When is May?", 5, now(), now());



select * from users;
select * from scores;
select * from categories;
select * from questions;

delete * from scores;