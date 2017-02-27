var express = require('express'),
    router = express.Router();

var ctrlUser = require('../controllers/user');

router.post('/register', ctrlUser.userCreate);
router.post('/signin', ctrlUser.userSignIn);
router.get('/:username', ctrlUser.userGetOne)
module.exports = router;
