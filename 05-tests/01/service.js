const {
    get
} = require('axios')

const URL = 'http://swapi.co/api/people'

async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const results = await get(url)
    return results.data.results.map(mapearPessoas)
}

function mapearPessoas(item) {
    return {
        nome: item.name,
        peso: item.height
    }
}

module.exports = {
    obterPessoas
}