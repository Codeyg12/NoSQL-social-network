const router = require("express").Router();

const {
  getThoughts,
  getSingleThough,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).get(getSingleThought).post().put().delete();

router.route("/:thoughtId/reactions").post().delete();

module.exports = router;
