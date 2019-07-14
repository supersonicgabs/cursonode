// docker exec -it 7f2f85a34942 /
//     mongo -u supersonicgabs -p minhasenhasecreta --authenticationDatabase herois

// docker exec -it 7f2f85a34942 mongo -u supersonicgabs -p minhasenhasecreta --authenticationDatabase herois

// database
show dbs //(mostra todos os bancos)

// mudando o contexto para uma database
use herois //(usa o database herois)

// mostrar tables (colecoes)
show collections //(para visualizar as tabelas)

db.herois.insert({
    nome: 'Flash',
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
})

db.herois.find()
db.herois.find().pretty()

for(let i=0; i<=50000; i++){
   db.herois.insert({
       nome: `Clone-${i}`,
       poder: 'Velocidade',
       dataNascimento: '1998-01-01'
   }) 
}

db.herois.count()
db.herois.findOne()
db.herois.find().limit(1000).sort({nome: -1})
db.herois.find({}, {poder: 1, _id: 0})

//create
db.herois.insert({
    nome: 'Flash',
    poder: 'velocidade',
    dataNascimento: '1998-01-01'
})

//read
db.herois.find()

//update
db.herois.update({_id: ObjectId("5c6f55dad6d3d5fb0ca34cd3")}, 
            {nome: 'Mulher Maravilha'})

db.herois.update({poder: 'Velocidade'}, 
            { $set: {poder: 'super força'}})

// delete
db.herois.remove({nome: 'Mulher Maravilha'})