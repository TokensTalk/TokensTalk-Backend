const express = require("express");
const messageController = require("../controllers/message");
const router = express.Router();

router.post("/", messageController.newMessage);

module.exports = router;
