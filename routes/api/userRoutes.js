const router = require('express').Router();

const { getUsers, getSingleUser } = require('../../controllers/userController');

router.route('/').get(getUsers).get(getSingleUser).post().put().delete();

router.route('/:userId/friends/:friendId').post().delete();

module.exports = router;