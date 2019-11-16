SELECT * FROM users u
JOIN posts p ON p.author_id = u.id
WHERE author_id != $1
AND title LIKE '%$2%';