SELECT * FROM users u
JOIN posts p ON p.author_id = u.id
WHERE p.id = $1;