const assert = require('assert')
const PasswordHelper = require('../helpers/passwordHelper')

const SENHA = 'Erick@32123123'
const HASH = '$2b$04$Nz8780i4DqV14kq.Mf8NB.bFQjKtXAIBf3NUOKIhdqW2xK0W4dLPW'

describe('UserHelper test suite', function (){
    it('deve gerar um hash a partir de uma senha', async ()=>{
        const result = await PasswordHelper.hashPassword(SENHA)
        
        assert.ok(result.length > 10)
    })
    it('deve comparar uma senha e o seu hash', async ()=>{
        const result = await PasswordHelper.comparePassword(SENHA, HASH)        
        assert.ok(result)
    })
})