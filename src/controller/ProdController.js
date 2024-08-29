const Prod = require("../models/Prod");

const ProdController = {
    create: async (req, res) => {
        try {
            const { nome, preco, qtd } = req.body;

            const prodCriado = await Prod.create({ nome, preco, qtd })

            return res.status(200).json({
                msg: 'Produto criado com sucesso!!',
                prod: prodCriado,
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, preco, qtd } = req.body;

            console.log("Atualizado com sucesso.");
            console.log({ id });
            console.log({ nome, preco, qtd });

            return res.status(200).json({
                msg: 'Produto atualizado com sucesso.'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
    getAll: async (req, res) => {

        const produtos = await Prod.findAll();

        try {
            return res.status(200).json({
                msg: 'Produto enconstrados!',
                produtos,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const produtoId = await Prod.findByPk(id);

            if (produtoId == null) {
                return res.status(404).json({
                    msg: 'Produto nao encontrado.'

                })
            }
            return res.status(200).json({
                msg: 'Produto encontrado com sucesso.',
                produtoId
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
    delete: async (req, res) => {
        try {
            return res.status(200).json({
                msg: 'Produto deletado com sucesso',
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
};

module.exports = ProdController;
