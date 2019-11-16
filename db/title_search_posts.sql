SELECT * FROM users u
JOIN posts p ON p.author_id = u.id
WHERE title LIKE $1;