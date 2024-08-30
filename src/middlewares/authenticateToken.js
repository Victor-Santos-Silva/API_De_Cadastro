const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return req.status(401).json({
            msg: 'Acesso negado.'
        })
    }

    // headers, payload, SECRET
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                msg: 'Acesso Negado'
            })
        }

        //Armazenar usuario na requisicao
        req.user = user;

        next();
    })
}

module.exports = { authenticateToken };