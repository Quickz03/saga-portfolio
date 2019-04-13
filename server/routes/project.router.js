const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    const queryText = `SELECT "projects"."id", "projects"."name" as "project_name", 
	   "projects"."description" as "project_description", 
	   "projects"."thumbnail" as "project_thumbnail",
	   "projects"."website" as "project_website",
	   "projects"."github" as "project_github",
	   "projects"."date_completed" as "project_date",
	   "tags"."name" as "tags_name"
FROM "projects"
JOIN "tags" on "projects"."tag_id"="tags"."id";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;