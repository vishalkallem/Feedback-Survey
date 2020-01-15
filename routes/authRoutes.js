const passport = require("passport");

/* Issues with Passport JS
    1. Passport JS does require us to reach in to some specific points of the flow and add little bit of code to work
    nicely. It automates most of the oauth workflow but not everything.
    2.
 */

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate(
      "google",
      {
        scope: ["profile", "email"]
      },
      () => {
        console.log(`Callback function has been called`);
      }
    )
  );

  app.get("/auth/google/callback", passport.authenticate("google", null, null));

  app.get("/api/logout", (req, res) => {
    req.logout(); // Kills the cookie
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
