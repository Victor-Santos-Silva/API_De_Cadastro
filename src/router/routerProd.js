const { Router } = require("express");
const router = Router();
const { validateProd, validateProdId } = require("../middlewares/ValidateProd");

//configurar as rotas ( CRUD )

router.get('/prod/', validateProd, (req, res) => {
    UserController.getAll(req, res)
});

router.post('/prod/', (req, res) => {
    UserController.create(req, res)
});

router.delete('/prod/:id', validateProdId, (req, res) => {
    UserController.delete(req, res)
});

router.put('/prod/:id', validateProdId, (req, res) => {
    UserController.update(req, res)
});

router.get('/prod/:id', validateProdId, (req, res) => {
    UserController.getOne(req, res)
});

module.exports = router;