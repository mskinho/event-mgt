'use strict';

var express = require('express');
var controller = require('./form.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/',auth.hasRole('admin'), controller.index);
router.get('/:id',auth.hasRole('admin'), controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id',auth.hasRole('admin'), controller.destroy);

module.exports = router;
