const router = require("express").Router();
const { Trip } = require("../../models");

// When testing, remember that each route in this module begins with
// "/api/trips"

// TODO: CREATE a trip
router.post("/", async (req, res) => {});

// TODO: DELETE a trip
router.delete("/:id", async (req, res) => {});

module.exports = router;
