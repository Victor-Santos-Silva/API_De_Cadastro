const express = require('express');
const router = require('./router/router');
const sequelize = require('./config/config');

const User = require("./models/User");

const app = express();

//Modelo API Json
app.use(express.json())
app.use('/api/user', router)
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
        app.listen(8080, () => {
            console.log("#########")
            console.log("On fire !!")
            console.log("#########")
        })
    })
    .catch((error) => {
        console.log("Erro ao se conectar com o banco: ", error);

    })

//listen = ouvindo a porta 8080


/* app.listen(8080, () => {


    console.log("#########")
    console.log("On fire !!")
    console.log("#########")
}) */

