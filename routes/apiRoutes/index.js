//This will serve as a hub of sorts for API routes

const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));


module.exports = router;