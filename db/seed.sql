CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users (id)
);

INSERT INTO users (username, password, profile_pic)
VALUES ('DantheMan', 'password', 'https://robohash.org/DantheMan?set=set2'),
('StevetheNieve', 'StevetheNieve', 'https://robohash.org/StevetheNieve'),
('Jieceinyoface', 'password', 'https://robohash.org/Jieceinyoface?set=set3');

INSERT INTO posts (title, img, content, author_id)
VALUES ('I Hate the Monarchy', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.affordablehousinginstitute.org%2Fblogs%2Fus%2FGrail_being_repressed_small.jpg&f=1&nofb=1' , 'Come see the violence inherent in the system. HELP HELP! IM BEING REPRESSED', 2),
('Keys keys keys', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.happysimpleliving.com%2Fwp-content%2Fuploads%2F2015%2F04%2FKeys.jpg&f=1&nofb=1', 'Why do I have so many of these?', 3),
('I think pancakes are a little overrated', 'https://cdn.foodbeast.com/content/wp-content/uploads/2012/04/wafflecakes.jpg','Seriously, can we end the PAN(cake)demic and all agree that waffles are just far superior in every way shape and form', 1);