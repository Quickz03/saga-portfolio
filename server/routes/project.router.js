const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

    router.get('/', (req, res) => {
        // return all categories
        const queryText = `SELECT "projects"."id", "projects"."name" as "name", 
        "projects"."description" as "description", 
        "projects"."thumbnail" as "thumbnail",
        "projects"."website" as "website",
        "projects"."github" as "github",
        "projects"."date_completed" as "date",
        "tags"."name" as "tags"
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


    router.get('/tags', (req, res) => {
        // return all categories
        const queryText = `SELECT * FROM "tags" ORDER BY "id";`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            })
            .catch((err) => {
                console.log('Error getting tag data', err);
                res.sendStatus(500);
            });
    });

    router.post('/', (req, res) => {
        const newProject = req.body;
        const queryText = `INSERT INTO projects ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                            VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        const queryValues = [
            newProject.name,
            newProject.description,
            newProject.thumbnail,
            newProject.website,
            newProject.github,
            newProject.date_completed,
            newProject.tag_id,
        ];
        pool.query(queryText, queryValues)
            .then(() => { res.sendStatus(201); })
            .catch((err) => {
            console.log('Error completing SELECT project query', err);
            res.sendStatus(500);
            });
    });


    router.delete('/:id', (req, res) => {
        console.log(req.params.id);
        const queryText = 'DELETE FROM projects WHERE id=$1';
        pool.query(queryText, [req.params.id])
            .then(() => {
                res.sendStatus(200);
            })
            .catch((err) => {
                console.log('Error completing SELECT project query', err);
                res.sendStatus(500);
            });
    });

module.exports = router;