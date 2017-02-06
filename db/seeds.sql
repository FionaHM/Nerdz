drop database nerdz_db;
CREATE database nerdz_db;

use  nerdz_db;
-- // now run the server to create the tables

insert into users (username, email, password, location, overall_category, nerd_level, created_at, updated_at) values
("user1" , "user1@test.com", "test123",  "CA", "CAT A", "Master Nerd", now() , now()),
("user2" , "user2@test.com", "test123", "IL", "CAT B", "Nerd",now() , now());

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

drop table Rawscores

insert into rawscores (user_id, score, category, question_id, created_at, updated_at) values 
(1,4, "CAT A", 1, now() , now() ),
(1, 30, "CAT A", 2, now() , now() ),
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



insert into nerdlevels  (nerd_level, max_score, min_score) values
("Master Nerd", 50, 40.01),
("Super Nerd", 40, 30.01 ),
("Nerd", 30, 29.01),
("Senior Nerd", 20, 10.01),
("Junior Nerd", 10, 0);

select * from users;
select * from rawscores;
select * from aggregatescores;
select * from nerdlevels;
select * from categories;
select * from questions;

-- this section is just random queries i am testing-- 

select b.username, sum(a.score) as total_score, a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 2 group by a.category

select count(b.id) as total, b.overall_category, b.location from users as b group by b.location, b.overall_category
select sum(a.score) as total from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1;
select count(b.id)/5 as total, b.overall_category, b.location from users as b group by b.location, b.overall_category
select count(b.id), b.overall_category, b.location from users as b group by b.location, b.overall_category;
select sum(score) as total, a.category from rawscores as a  where a.user_id = 2 group by a.category order by total desc limit 1;

select nerd_level from nerdlevels where min_score < 13 order by max_score desc limit 1

select sum(a.score) as total from rawscores as a, users as b where b.id = a.user_id

select sum(a.score) as total from rawscores as a, users as b where b.id = a.user_id 

select b.username, sum(a.score) as total_score, a.category from rawscores as a, users as b where b.id = a.user_id group by  b.username, a.category