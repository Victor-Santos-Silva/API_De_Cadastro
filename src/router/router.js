const { Router } = require("express");
const userRoutes = require("./routerUser");
const userController = require("../controller/UserController");
const authenticateToken = require("../middlewares/authenticateToken");

const router = Router();

// /api/user
router.use('/user', userRoutes);

// /api/login
router.use('/login', (req, res) => {
    userController.login(req, res);
});

module.exports = router;