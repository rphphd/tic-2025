/* eslint-disable no-console */
import express from 'express';
import { databaseConnection } from '../config/db.js';

const router = express.Router();

router.get('/', function(req, res) {
    console.log('Database connection status:', databaseConnection);
    res.send(databaseConnection);
});

export default router;
