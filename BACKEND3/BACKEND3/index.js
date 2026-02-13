require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

// database connect
connectDB();

// start server
app.listen(process.env.PORT || 3003, () => {
    console.log("Server running on port", process.env.PORT || 3003);
});
