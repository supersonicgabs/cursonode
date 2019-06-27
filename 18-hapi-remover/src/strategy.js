class NotImplementedExcepetion extends Error {
    constructor(){
        super("Not Implemented Exception")
    }
}

class ICrud {
    create(item){
        throw new NotImplementedExcepetion()
    }

    read(query){
        throw new NotImplementedExcepetion()
    }

    update(id, menu){
        throw new NotImplementedExcepetion()
    }

    delete(id){
        throw new NotImplementedExcepetion()
    }
}

class MongoDB extends ICrud{
    constructor(){
        super()
    }

    create(item){
        console.log('O item foi salvo em MongoDB')
    }
}

class Postgres extends ICrud{
    constructor(){
        super()
    }
    create(item){
        console.log('O item foi salvo em Postgres')
    }
}

class ContextStrategy{
    constructor(strategy){
        this._database = strategy
    }

    create(item){
        return this._database.create(item)
    }

    read(item){
        return this._database.read(item)
    }

    update(id, item){
        return this._database.update(id, item)
    }
    
    delete(id){
        return this._database.delete(id)
    }
}

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()

contextMongo.read()