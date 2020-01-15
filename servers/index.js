const express = require("express");
const mongoose = require("mongoose");
const keys = require("../config/keys");
require("../models/user");
require("../services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

require("../routes/authRoutes")(app);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
