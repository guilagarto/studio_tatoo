var express = require('express');
const controller = require('../controller/IndexController');
var router = express.Router();


/* GET home page. */
router.get('/', controller.index);
router.get('/agenda', controller.agenda);
router.get('/bioLilPeep', controller.bioLilPeep);
router.get('/blog', controller.blog);
router.get('/chat', controller.chat);
router.get('/colecao', controller.colecao);
router.get('/faleConosco', controller.faleConosco);
router.get('/home', controller.home);
module.exports = router;
