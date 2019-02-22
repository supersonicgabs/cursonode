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

    isConnected(){
        throw new NotImplementedExcepetion()
    }
}

module.exports = ICrud