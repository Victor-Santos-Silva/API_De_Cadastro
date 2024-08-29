const { Router } = require("express");
const router = Router();

//configurar as rotas ( CRUD )
router.post('/', validateProd, (req, res) => {
    UserController.create(req, res)
});

router.get('/', (req, res) => {
    UserController.getAll(req, res)
});

router.delete('/:id', validateProdId, (req, res) => {
    UserController.delete(req, res)
});

router.put(':id', validateProdId, (req, res) => {
    UserController.update(req, res)
});

router.get('/:id', validateProdId, (req, res) => {
    UserController.getOne(req, res)
});

module.exports = router;