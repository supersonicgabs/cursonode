const assert = require('assert')
const MongoDb = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')

const MOCK_HEROI_CADASTRAR = {
    nome: 'Mulher Maravilha',
    poder: 'Laço'
}

const context = new Context(new MongoDb())
describe('MongoDB Suite de testes', function (){
    this.beforeAll(async () => {
        await context.connect()
    })
    it('verificar conexão', async ()=>{
        const result = await context.isConnected()
        const expected = 'Conectado'
        console.log('result', result);

        assert.deepEqual(result, expected)
    })
    it('cadatrar', async ()=>{
        const { nome, poder } = await context.create(MOCK_HEROI_CADASTRAR)
        assert.deepEqual({nome, poder}, MOCK_HEROI_CADASTRAR)
    })
})