drop database nerdz_db;
CREATE database nerdz_db;

use  nerdz_db;
-- // now run the server to create the tables

insert into users (username, email, password, location, created_at, updated_at) values
("user1" , "user1@test.com", "test123",  "CA", now() , now()),
("user2" , "user2@test.com", "test123", "CA", now() , now());

insert into categories (category_name) values 
("CAT A"),
("CAT B"),
("CAT C" ),
("CAT D" ),
("CAT E" );

insert into questions (question, category, created_at, updated_at) values 
("What day is today", "CAT A",now() , now() ),
("How old are you?", "CAT A", now(),now()),
("When is Monday?", "CAT C", now(), now()),
("When is Tuesday?", "CAT C", now(), now()),
("When is Wednesday?", "CAT B", now(), now()),
("When is Thursday?", "CAT B", now(), now()),
("When is Friday?", "CAT D", now(), now()),
("When is Saturday?", "CAT D", now(), now()),
("When is Sunday?", "CAT E", now(), now()),
("When is May?", "CAT E", now(), now());

insert into rawscores (user_id, score, category, question_id, created_at, updated_at) values 
(1,4, "CAT A", 1, now() , now() ),
(1, 3, "CAT A", 2, now() , now() ),
(1, 4, "CAT B", 3, now() , now() ),
(1,1, "CAT B",4, now() , now() ),
(1, 3, "CAT C", 5, now() , now() ),
(2,4, "CAT A", 1, now() , now() ),
(2, 3, "CAT A", 2, now() , now() ),
(2, 3,"CAT B", 3, now() , now() ),
(2,5, "CAT C",4, now() , now() ),
(2, 3, "CAT C",5,now() , now() );


insert into aggregatescores (user_id, score, category, created_at, updated_at) values 
(1,10, "CAT A", now() , now() ),
(1, 3,"CAT B", now() , now() ),
(1, 4, "CAT C", now() , now() ),
(1,1, "CAT D", now() , now() ),
(1, 3, "CAT E",  now() , now() ),
(2,10, "CAT A",  now() , now() ),
(2, 3,"CAT B", now() , now() ),
(2, 4, "CAT C",  now() , now() ),
(2,1, "CAT D", now() , now() ),
(2, 3, "CAT E", now() , now() );



insert into nerdlevels  (nerd_level, max_score) values
("Master Nerd", 50),
("Super Nerd", 40),
("Nerd", 30),
("Senior Nerd", 20),
("Junior Nerd", 10);

select * from users;
select * from rawscores;
select * from aggregatescores;
select * from nerdlevels;
select * from categories;
select * from questions;
