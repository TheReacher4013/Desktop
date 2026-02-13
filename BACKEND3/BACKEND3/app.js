const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/test", require("./routes/testRoutes"));

// health route
app.get("/", (req, res) => {
    res.send("API running 🚀");
});

module.exports = app;
