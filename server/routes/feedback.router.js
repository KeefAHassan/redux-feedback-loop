const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
//save a new feedback received from the front/react. 
router.post('/', (req, res) => {
    const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES ($1, $2, $3, $4);`
//get what was sent from req.body.
    pool.query(query, [req.body.feeling, req.body.understanding, req.body.support, req.body.comment]).then(result => {
        res.sendStatus(201)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
