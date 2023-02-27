const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')

//Verify token for protect router
const VerifyToken = (req, res, next)=>{
    const token = req.headers.authorization 

    if(!token){
        throw boom.notFound('Token no provisto')
    }
    try {
        const Dec = jwt.verify(token, 'SECRETKEY')
        req.Identification = Dec.Identification
        next(); 
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}


module.exports = VerifyToken 