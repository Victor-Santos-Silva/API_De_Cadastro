const { Router } = require("express");
const userRoutes = require("./routerUser")
const prodRoutes = require("./routerProd")

const router = Router();

router.use('/user', userRoutes);
router.use('/prod', prodRoutes);

module.exports = router;