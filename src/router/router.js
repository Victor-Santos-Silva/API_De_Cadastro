const { Router } = require("express");
const userRoutes = require("./routerUser");
const userController = require("../controller/UserController");
const authenticateToken = require("../middlewares/authenticateToken");

const uploadRoutes = require('./routerUpload');

const router = Router();

// /api/images/upload
router.use('/image', uploadRoutes)

// /api/user
router.use('/user', userRoutes);

// /api/login
router.use('/login', (req, res) => {
    userController.login(req, res);
});

module.exports = router;