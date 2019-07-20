const Mongoose = require('mongoose')
Mongoose.connect('mongodb://supersonicgabs:minhasenhasecreta@192.168.99.100:27017/herois', 
    {useNewUrlParser: true}, function(error){
        if(!error) return;
        console.log('Falha na conexão!', error);
    })
    
const connection = Mongoose.connection
    
//Maneiras de escrever função
/**
 * function nomeFuncao() {
 * }
 * 
 * const minhaFuncao = function(){
 * }
 * 
 * const minhaFuncaoArrow = () => {
 * }
 * 
 * const minhaFuncaoArrow = (params) => console.log(params);
 */    

connection.once('open', ()=> console.log('database rodando!!'))

// setTimeout(() => {
//     const state = connection.readyState
//     console.log('state: ', state);
// }, 1000);
/**
 * 0: Disconectado
 * 1: Conectado
 * 2: Conectando
 * 3: Disconectando
 */

 const heroisSchema = new Mongoose.Schema({
     nome: {
         type: String,
         required: true
     },
     poder: {
         type: String,
         required: true
     },
     insertedAt: {
         type: Date,
         default: new Date()
     }
 })
 const model = Mongoose.model('herois', heroisSchema)

 async function main(){
     const resultCadastrar = await model.create({
         nome: 'Batman',
         poder: 'Dinheiro'
     })
     console.log('result cadastrar', resultCadastrar);

     const listItens = await model.find()
     console.log('items: ', listItens)     
 }
 main()
