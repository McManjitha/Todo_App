const router = require("express").Router();
const auth = require("../controllers/authController")


//LOGIN
router.post("/login", auth.login);
router.post("/signup", auth.signUp);

module.exports = router;