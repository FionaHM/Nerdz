
drop database nerdz_db;
CREATE database nerdz_db;

use  nerdz_db;
SET NAMES utf8; -- //needed to import the fs data
-- // now run the server to create the tables
-- use DEFAULT CHARSET=utf8 when creating new t-- ables

insert into Questions (id, question, created_at, updated_at) values
(1, "I like Science Fiction.", now() , now() ),
(2, "I sometimes prefer fictional people to real ones.", now(),now()),
(3, "I have started writing a novel.",  now(), now()),
(4, "I come up with something new ", now(), now()),
(5, "I like to read biographies.",  now(), now()),
(6, "Enjoy going to fiction conventions.", now(), now()),
(7, "I have a strong need to correct inaccurate information.", now(), now()),
(8, "I like staying indoors.", now(), now()),
(9, "I prefer spending time with machines more than with people.", now(), now()),
(10, "I love to read SCIENCE fiction novels.",  now(), now()),
(11, "I have a collection of figurines.", now(), now()),
(12,"I believe in the importance of art.", now(), now()),
(13, "I go out of my way to attend MUSIC events.", now(), now()),
(14, "I am full of ideas about novels.", now(), now()),
(15,"I love writing poetry.", now(), now()),
(16, "I love MUSICal theater.", now(), now()),
(17,"I believe in aliens.",  now(), now()),
(18,"I love Dance.", now(), now()),
(19,"I have a large collection of movies.", now(), now()),
(20,"I am good at making impromptu speeches.", now(), now()),
(21, "I am a spiritual person.",  now(), now()),
(22, "Learning body language is very important.",  now(), now()),
(23, "I don't like to dress up in costumes.", now(), now()),
(24,"I listen to MUSIC more than a hour a day",  now(), now()),
(25, "I show an attention to detail",  now(), now());

insert into Categories (id, category_name, question_id) values 
(1, "SCIENCE", 1),
(2, "CULTURE", 1),
(3, "ENGINEERING", 1),
(4, "SCIENCE", 2),
(5, "TECHNOLOGY", 2),
(6, "CULTURE", 3),
(7, "MUSIC", 3 ),
(8, "ENGINEERING", 4),
(9, "SCIENCE", 4),
(10, "CULTURE" , 5),
(11, "ENGINEERING", 6),
(12, "SCIENCE", 6),
(13, "TECHNOLOGY", 6),
(14, "ENGINEERING", 7),
(15, "SCIENCE", 8),
(16, "TECHNOLOGY", 8),
(17, "ENGINEERING", 8),
(18, "TECHNOLOGY", 9),
(19, "ENGINEERING", 9),
(20, "SCIENCE", 10),
(21, "TECHNOLOGY", 10),
(22, "ENGINEERING", 10),
(23, "CULTURE", 11),
(24, "CULTURE", 12),
(25, "MUSIC", 12),
(26, "CULTURE", 13),
(27, "MUSIC", 13),
(28, "CULTURE", 14),
(29, "MUSIC", 15),
(30, "CULTURE", 15),
(31, "MUSIC", 16),
(32, "CULTURE", 16),
(33, "SCIENCE", 17),
(34, "TECHNOLOGY", 17),
(35, "CULTURE", 18),
(36, "SCIENCE", 18),
(37, "CULTURE", 19),
(38, "SCIENCE", 20),
(39, "CULTURE", 20),
(40, "CULTURE", 21),
(41, "CULTURE", 22),
(42, "ENGINEERING", 23),
(43, "ENGINEERING", 23),
(44, "MUSIC", 24),
(45, "SCIENCE", 25),
(46, "TECHNOLOGY", 25),
(47, "ENGINEERING", 25);

insert into Nerdlevels  (nerd_level, max_score, min_score) values
("Master Nerd", 125, 100.01),
("Super Nerd", 100, 75.01 ),
("Full Blown Nerd", 75, 50.01),
("Intermediate Nerd", 50, 25.01),
("Entry Level Nerd", 25, 0);

-- bulk insert dummy data into the database from file loader.csv
-- 
-- insert into Users (username, email, password, location, overall_category, nerd_level, created_at, updated_at) values
-- ("user1" , "user1@test.com", "test123",  "CA", "CAT A", "Master Nerd", now() , now()),
-- ("user2" , "user2@test.com", "test123", "IL", "CAT B", "Nerd",now() , now());


-- ******* bulk insert dummy data into the database from file scores.csv
-- insert into Rawscores (user_id, score, category, question_id, created_at, updated_at) values
-- (1,4, "SCIENCE", 1, now() , now() ),
-- (1, 30, "MUSIC", 2, now() , now() ),
-- (1, 4, "TECHNOLOGY", 3, now() , now() ),
-- (1,1, "CULTURE",4, now() , now() ),
-- (1, 3, "ENGINEERING", 5, now() , now() );




use  nerdz_db;
select * from Users;
select * from Rawscores;
select * from Nerdlevels;
select * from Categories;
select * from Questions;


delete from Rawscores where user_id= 529

delete from Users where email = 'fiona.hegarty@icloud,com'


-- this section is just random queries i am testing-- 

-- select b.username, sum(a.score) as total_score, a.category from rawscores as a, users as b where b.id = a.user_id and a.user_id = 2 group by a.category

-- select count(b.id) as total, b.overall_category, b.location from users as b group by b.location, b.overall_category
-- select sum(a.score) as total from rawscores as a, users as b where b.id = a.user_id and a.user_id = 1;
-- select count(b.id)/5 as total, b.overall_category, b.location from users as b group by b.location, b.overall_category
-- select count(b.id), b.overall_category, b.location from users as b group by b.location, b.overall_category;
-- select sum(score) as total, a.category from rawscores as a  where a.user_id = 2 group by a.category order by total desc limit 1;

-- select nerd_level from nerdlevels where min_score < 13 order by max_score desc limit 1

-- select sum(a.score) as total from rawscores as a, users as b where b.id = a.user_id

-- select sum(a.score) as total from rawscores as a, users as b where b.id = a.user_id

-- select b.username, sum(a.score) as total_score, a.category from rawscores as a, users as b where b.id = a.user_id group by  b.username, a.category
