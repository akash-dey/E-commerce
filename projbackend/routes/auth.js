const express = require("express");
const router = express.Router();
const { signup, signin, signout, isSignedIn } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

router.post(
  "/signup",
  [
    check("name", "Name should be at least 3 characters").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  signup
);
router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
