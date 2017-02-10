CREATE database nerdz_db;
drop database nerdz_db;
CREATE database nerdz_db;

use  nerdz_db;
-- // now run the server to create the tables

insert into Users (username, email, password, location, overall_category, nerd_level, created_at, updated_at) values
("user1" , "user1@test.com", "test123",  "CA", "CAT A", "Master Nerd", now() , now()),
("user2" , "user2@test.com", "test123", "IL", "CAT B", "Nerd",now() , now());

insert into Categories (category_name) values
("SCIENCE"),
("MUSIC"),
("TECHNOLOGY" ),
("CULTURE" ),
("ENGINEERING" );

insert into Questions (question, category, created_at, updated_at) values
("I like science fiction.", "science, culture, engineering",now() , now() ),
("I sometimes prefer fictional people to real ones.", "science, technology", now(),now()),
("I have started writing a novel.", "culture, music", now(), now()),
("I come up with something new ", "science, engineering", now(), now()),
("I like to read Biographys.", "culture", now(), now()),
("Enjoy going to fiction conventions.", "scinence, engineering, technology", now(), now()),
("I have a strong need to correct inaccurate information.", "engineering", now(), now()),
("I like staying indoors.", "science, technology, engineering", now(), now()),
("I prefer to spend time with machines than with people.", "technology, engineering", now(), now()),
("I love to read science fiction novels.", "science, technology, engineering", now(), now()),
("I have a collection of figurines.", "culture", now(), now()),
("I believe in the importance of art.", "music, culture", now(), now()),
("I go out of my way to attend music events.", "music, culture", now(), now()),
("I am full of ideas about novels.", "culture", now(), now()),
("I love writing poetry.", "music, culture", now(), now()),
("I love musical theater.", "music, culture", now(), now()),
("I believe in aliens.", "science, technology", now(), now()),
("I love Dance.", "music, culture", now(), now()),
("I have a large collection of movies.", "music, culture", now(), now()),
("I am good at making impromptu speeches.", "science, culture", now(), now()),
("I am a spiritual person.", "culture", now(), now()),
("Learning body language is very important.", "culture", now(), now()),
("I don't like to dress up in costumes.", "engineering", now(), now()),
("I listen to music more than a hour a day", "engineering", now(), now()),
("I show an attention to detail", "science, technology, engineering", now(), now());



insert into Rawscores (user_id, score, category, question_id, created_at, updated_at) values
(1,4, "SCIENCE", 1, now() , now() ),
(1, 30, "MUSIC", 2, now() , now() ),
(1, 4, "TECHNOLOGY", 3, now() , now() ),
(1,1, "CULTURE",4, now() , now() ),
(1, 3, "ENGINEERING", 5, now() , now() );



insert into Nerdlevels  (nerd_level, max_score, min_score) values
("Master Nerd", 50, 40.01),
("Super Nerd", 40, 30.01 ),
("Nerd", 30, 29.01),
("Senior Nerd", 20, 10.01),
("Junior Nerd", 10, 0);

use  nerdz_db;
select * from Users
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
