const router = require("express").Router();

// When testing, remember that each route in this module begins with
// "/api/locations"

// TODO: GET all locations
router.get("/", async (req, res) => {});

// TODO: GET a single location
router.get("/:id", async (req, res) => {});

// TODO: CREATE a location
router.post("/", async (req, res) => {});

// TODO: DELETE a location
router.delete("/:id", async (req, res) => {});

module.exports = router;
