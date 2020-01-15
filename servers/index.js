const express = require("express");
const mongoose = require("mongoose");
const keys = require("../config/keys");
require("../services/passport");
require("../models/User");

mongoose.connect(keys.mongoURI);

const app = express();

require("../routes/authRoutes")(app);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
