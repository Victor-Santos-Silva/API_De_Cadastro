const { Router } = require("express");
const { validateUser, validateUserId } = require("../middlewares/ValidateUser");
const router = Router();

//configurar as rotas ( CRUD )
router.post('/user/', validateUser, (req, res) => {
    UserController.create(req, res)
});

router.get('/user/', (req, res) => {
    UserController.getAll(req, res)
});

router.delete('/user/:id', validateUserId, (req, res) => {
    UserController.delete(req, res)
});

router.put('/user/:id', validateUserId, (req, res) => {
    UserController.update(req, res)
});

router.get('/user/:id', validateUserId, (req, res) => {
    UserController.getOne(req, res)
});

module.exports = router;