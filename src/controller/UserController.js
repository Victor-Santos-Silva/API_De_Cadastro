const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const UserController = {

    login: async (req, res) => {
        try {
            const { email, senha } = req.body;

            const user = await User.findOne({ where: { email } })

            if (!user) {
                return res.status(400).json({
                    msg: 'Email ou senha incorretos.'
                });
            };

            const isValida = await bcrypt.compare(senha, user.senha);
            if (!isValida) {
                return res.status(400).json({
                    msg: 'Email ou senha incorretos.'
                });
            };

            const token = jwt.sign({
                email: user.email,
                username: user.nome,
            }, process.env.SECRET, { expiresIn: '1h' });

            return res.status(200).json({
                msg: 'Login realizado!',
                token
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        };
    },
    create: async (req, res) => {
        try {
            const { nome, email, senha } = req.body;
            //até 12 sal pode colocar
            const hashSenha = await bcrypt.hash(senha, 10)

            const userCriado = await User.create({ nome, email, senha: hashSenha })

            return res.status(200).json({
                msg: 'Usuario criado com sucesso!!',
                user: userCriado
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, senha } = req.body;

            console.log("Atualizado com sucesso.");
            console.log({ id });
            console.log({ nome, email, senha });

            return res.status(200).json({
                msg: 'usuario atualizado com sucesso.'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
    getAll: async (req, res) => {

        const usuarios = await User.findAll();

        try {
            return res.status(200).json({
                msg: 'Usuarios enconstrados!',
                usuarios
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const usuarioId = await User.findByPk(id);

            if (usuarioId == null) {
                return res.status(404).json({
                    msg: 'usuario nao encontrado.'

                })
            }
            return res.status(200).json({
                msg: 'usuario encontrado com sucesso.',
                usuarioId
            })

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
    delete: async (req, res) => {
        try {
            return res.status(200).json({
                msg: 'Usuario deletado com sucesso',
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o suporte' });
        }
    },
};

module.exports = UserController;
