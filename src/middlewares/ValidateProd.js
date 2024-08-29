const validateProd = (req, res, next) => {
    const { nome, preco, qtd } = req.body;

    if (!nome || !preco || !qtd) {
        return res.status(400).json({
            msg: "Campos invalidos."
        });
    }
    return next();
};

const validateProdId = (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            msg: "Parametros faltando."
        })
    }
    return next();
};


module.exports = { validateProd, validateProdId };