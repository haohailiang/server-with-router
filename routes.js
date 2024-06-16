let express = require('express');

let router = express.Router();

let projectA = require('./project/01_project_A');
router.use(projectA);

// const projectB = require('./project/02_project_B');
// router.use(projectB);

module.exports = router;
