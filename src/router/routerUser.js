const { Router } = require("express");
const { validateUser, validateUserId } = require("../middlewares/ValidateUser");
const router = Router();

//configurar as rotas ( CRUD )
router.post('/', validateUser, (req, res) => {
    UserController.create(req, res)
});

router.get('/', (req, res) => {
    UserController.getAll(req, res)
});

router.delete('/:id', validateUserId, (req, res) => {
    UserController.delete(req, res)
});

router.put(':id', validateUserId, (req, res) => {
    UserController.update(req, res)
});

router.get('/:id', validateUserId, (req, res) => {
    UserController.getOne(req, res)
});

module.exports = router;