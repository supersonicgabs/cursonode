const BaseRoute = require('./base/baseRoute')
const Joi = require('joi')
const Boom = require('boom')
//npm i jsonwebtoken
const Jwt = require('jsonwebtoken')

const failAction = (request, headers, erro)=>{
    throw erro;
}

const USER = {
    username: 'xuxadasilva',
    password: '123'
}

class AuthRoutes extends BaseRoute {
    constructor(secret){
        super()
        this.secret = secret;        
    }
    login(){
        return {
            path: '/login',
            method: 'POST',
            config: {
                auth: false,
                tags: ['api'],
                description: 'Obter token',
                notes: 'faz login com user e senha do banco',
                validate: {
                    failAction,
                    payload: {
                        username: Joi.string().required(),
                        password: Joi.string().required()
                    }
                }
            },
            handler: (request)=>{
                try {
                    
                    const {username, password} = request.payload

                    if(
                        username.toLowerCase() !== USER.username || 
                        password !== USER.password
                    )
                        return Boom.unauthorized()
                    
                    const token = Jwt.sign({
                        username: username,
                        id: 1
                    }, this.secret) //EX: MINHA_CHAVE_SECRETA
                    return {
                        token
                    }                    
                } catch (error) {
                    console.log('erro: ', error);
                    
                }
            }
        }
    }
}

module.exports = AuthRoutes