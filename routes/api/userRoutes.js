const router = require("express").Router();

const { getUsers, getSingleUser } = require("../../controllers/userController");

router.route("/").get(getUsers).post();

router.route("/:userId").get(getSingleUser).put().delete();

router.route("/:userId/friends/:friendId").post().delete();

module.exports = router;
