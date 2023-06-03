const router = require("express").Router();
const db = require("../db/db");

router.get("/t/:ticketId", () => { });
router.patch("/t/:ticketId", () => { });
router.delete("/t/:ticketId", () => { });

router.get("/u/:username", () => { });
router.patch("/u/:username", () => { });
router.delete("/u/:username", () => { });

router.post("/sell", () => { });
router.post("/bulk", () => { });
router.get("/draw", () => { });
router.get("", () => { });

// router.route("/tickets/t/:ticketId").get(() => { }).patch(() => { }).delete(() => { });

module.exports = router;