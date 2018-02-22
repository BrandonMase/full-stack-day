SELECT * FROM user_fullstackreview WHERE auth0_sub = $1
RETURNING *;