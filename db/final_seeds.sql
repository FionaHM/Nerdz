
drop database nerdz_db;
CREATE database nerdz_db;

use  nerdz_db;
SET NAMES utf8; -- //needed to import the fs data
-- // now run the server to create the tables
-- use DEFAULT CHARSET=utf8 when creating new t-- ables

insert into Questions (id, question, created_at, updated_at) values
(1, "I do not fear computers. I fear the lack of them.", now() , now() ),
(2, "I regulary use the singular form of the word 'dice.'", now(),now()),
(3, "I saw Eraserhead...in a movie theater.",  now(), now()),
(4, "We built this city...with Legos!", now(), now()),
(5, "I like to read biographies.",  now(), now()),
(6, "My only outdoor activity is Ye Ren Faire.", now(), now()),
(7, "I'd write my love notes in binary...if I had a partner.", now(), now()),
(8, "Comic Con gives my mom a chance to clean my room/her basement.", now(), now()),
(9, "I know who Leroy Jenkins is.", now(), now()),
(10, "The answer to the Ultimate Question is 42.",  now(), now()),
(11, "All my childhood toys are still in their original packaging.", now(), now()),
(12,"The earth without art is just 'eh.'", now(), now()),
(13, "I'm obsessed with Idina, and I will NOT Let It Go.", now(), now()),
(14, "If you don't know obscure anime references, you will never get me.", now(), now()),
(15,"I write the songs that make the young girls cry.", now(), now()),
(16, "I didn't pay my rent this month, but I saw Hamilton!", now(), now()),
(17,"I tricked out my Roomba to communicate with aliens.",  now(), now()),
(18,"Whatever you feel, just dance it.", now(), now()),
(19,"If Blockbuster were still a thing, I would totally work there.", now(), now()),
(20,"Magic: The Gathering is the only 'gathering' I attend.", now(), now()),
(21, "Hush...Golden Girls is on!",  now(), now()),
(22, "I'm not a Trekkie, I'm a Trekker. How dare you.",  now(), now()),
(23, "To LARP is to live", now(), now()),
(24,"Sorry, I need to soak my reeds now.",  now(), now()),
(25, "I took the liberty of suggesting some edits to your Facebook status.s",  now(), now());

insert into Categories (id, category_name, question_id) values 
(1, "SCIENCE", 1),
(2, "FANTASY", 1),
(3, "ENGINEERING", 1),
(4, "SCIENCE", 2),
(5, "TECHNOLOGY", 2),
(6, "FANTASY", 3),
(7, "MUSIC", 3 ),
(8, "ENGINEERING", 4),
(9, "SCIENCE", 4),
(10, "FANTASY" , 5),
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
(23, "FANTASY", 11),
(24, "FANTASY", 12),
(25, "SCIENCE", 12),
(26, "FANTASY", 13),
(27, "MUSIC", 13),
(28, "FANTASY", 14),
(29, "MUSIC", 15),
(30, "TECHNOLOGY", 15),
(31, "MUSIC", 16),
(32, "FANTASY", 16),
(33, "SCIENCE", 17),
(34, "TECHNOLOGY", 17),
(35, "FANTASY", 18),
(36, "SCIENCE", 18),
(37, "FANTASY", 19),
(38, "SCIENCE", 20),
(39, "TECHNOLOGY", 20),
(40, "FANTASY", 21),
(41, "FANTASY", 22),
(42, "TECHNOLOGY", 23),
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


SET NAMES utf8; -- //needed to import the fs data
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

insert into Flashcards (id, nerd, geek, nerd_score, geek_score, created_at, updated_at) VALUES
(1, "hacker", "startrek", 1, 2, now(), now()),
(2, "lecture", "documentary", 2, 7, now(), now()),
(3, "sudoku", "comic", 4, 6, now(), now()),
(4, "credits", "collection", 6, 1, now(), now()),
(5, "atari", "starwars", 8, 8, now(), now()),
(6, "bow tie", "t-shirt", 8, 6, now(), now()),
(7, "ted talk", "dr who", 5, 4, now(), now()),
(8, "apple","android" , 8, 5, now(), now()),
(9, "wikipedia", "instagram", 3, 4, now(), now()),
(10, "journal", "graphic novel", 5, 8, now(), now());





