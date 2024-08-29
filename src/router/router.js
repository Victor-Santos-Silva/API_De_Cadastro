const { Router } = require("express");
const userRoutes = require("./routerUser");
const prodRoutes = require("./routerProd");
const userController = require("../controller/UserController");
const authenticateToken = require("../middlewares/authenticateToken");

const router = Router();

// /api/user
router.use('/user', userRoutes);

// /api/login
router.post('/login', (req, res) => {
    userController.login(req, res);
});

module.exports = router;