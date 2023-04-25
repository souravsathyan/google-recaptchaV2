var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController')
/* GET users listing. */
router.get('/',loginController.getLogin);

router.post('/loginPost',loginController.postLogin)

module.exports = router;
