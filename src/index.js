require('dotenv').config();
const express = require('express');
const router = require('./router/router');
const sequelize = require('./config/config');

const User = require("./models/User");

const app = express();

const routerUpload = require('./router/routerUpload')

//Modelo API Json
app.use(express.json())
app.use('/api/user', router)
app.use('/api/image', routerUpload)
//REQ = Requisição
//RES = Response
app.get('/healthcheck', (req, res) => {
    return res.status(200).json({
        msg: 'Está okay.',
        alive: true
    });
})



sequelize.authenticate()
    .then(async () => {
        console.log("Conexão estabelecida com sucesso.");
        await sequelize.sync();
    })
    .then(() => {
        app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
            console.log("#########")
            console.log("On fire !!")
            console.log("#########")
        })
    })
    .catch((error) => {
        console.log("Erro ao se conectar com o banco: ", error);

    })


