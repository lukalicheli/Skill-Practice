const router = require("express").Router();

// When testing, remember that each route in this module begins with
// "/api/travellers"

// TODO: GET all travellers
router.get("/", async (req, res) => {});

// TODO: GET a single traveller
router.get("/:id", async (req, res) => {});

// TODO: CREATE a traveller
router.post("/", async (req, res) => {});

// TODO: DELETE a traveller
router.delete("/:id", async (req, res) => {});

module.exports = router;
