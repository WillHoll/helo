SELECT * FROM users u
JOIN posts p ON p.author_id = u.id
WHERE title LIKE $2
AND author_id != $1;