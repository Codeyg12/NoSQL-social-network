const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post();

router.route("/:thoughtId").get(getSingleThought).put().delete();

router.route("/:thoughtId/reactions").post();

router.route("/:thoughtId/reactions/:reactionId").delete();

module.exports = router;
