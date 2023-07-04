const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/got';

const client = new MongoClient(url);

async function connectDb(){
    
    try{
        await client.connect();
        console.log("Conexão com o banco de dados realizada!")
        return client.db();
    } catch{(error)
        console.log("Erro na conexão com o banco de dados: " + error);
        throw error;
    }
}

function desconnectDb(){
    client.close();
    console.log("Conexão com o banco de dados encerrada!");
}

module.exports = {
    connectDb,
    desconnectDb
};