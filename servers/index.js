const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("../config/keys");
require("../models/user");
require("../services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(
  cookieSession({
    maxAge: 2592000000, //30 days = 30 * 24 hrs = 30 * 24 * 60 min = 30 * 24 * 60 * 60 sec = 30 * 24 * 60 * 60 * 1000 ms
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize(null));
app.use(passport.session(null));

require("../routes/authRoutes")(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
