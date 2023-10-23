const express = require("express");
const router = express();

// test route
router.use("/api/users", require("./UserRoutes"));
router.use("/api/notes", require("./NotesRouter"));
router.use("/api/history", require("./HistoryRouter"));

module.exports = router;