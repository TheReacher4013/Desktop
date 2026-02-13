const express = require("express");
const router = express.Router();

const {
    addTest,
    getAllTests
} = require("../controllers/testController");

router.post("/add", addTest);
router.get("/all", getAllTests);

module.exports = router;
