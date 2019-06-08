const BaseRoute = require('./base/baseRoute')

class HeroRoutes extends BaseRoute {
    constructor(db){
        super()
        this.db = db;
    }

    list(){
        return {
            path: '/herois',
            method: 'GET',
            handler: (request, headers) => {
                try {
                    const {
                        skip,
                        limit, 
                        nome
                    } = request.query
                    let query = {}

                    console.log('limit', limit);
                    if(nome){
                        query.nome = nome
                    }
                    if(isNaN(skip)){
                        throw Error('O tipo do skip é incorreto')
                    }
                    if(isNaN(limit)){
                        throw Error('O tipo do limit é incorreto')
                    }
                    
                    return this.db.read(query, parseInt(skip), parseInt(limit))
                }
                catch(error){
                    console.log('DEU RUIM!', error);
                    return "Erro interno no servidor"
                }
            }
        }
    }
}

//localhost:500/herois?skip=0&limit=10&nome=flash
module.exports = HeroRoutes