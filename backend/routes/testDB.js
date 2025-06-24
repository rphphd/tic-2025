import express from 'express';
import databaseConnection from '../config/db.js';

const router = express.Router();

router.get('/', function(req, res) {
    res.send(databaseConnection);
});

export default router;
