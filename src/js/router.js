'use strict';

const express = require('express');
const controllers = require('./cat_controllers');

const router = express.Router();

router.get('/category',         controllers.getAll);
router.get('/category/:id',     controllers.getById);

router.post('/category',        controllers.create);

router.put('/category/:id',     controllers.update);

router.delete('/category/:id',  controllers.delete);


module.exports = router;