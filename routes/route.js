const express = require("express");
const passport = require("passport");
const route = express.Router();

//google oauth
route.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

//google oath callback
route.get("/auth/google/callback", passport.authenticate("google"));

//all routes
route.all("**", (req, res) => {
  res.json({ message: "Requested page does not exist" });
});

module.exports = route;
