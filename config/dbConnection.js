const {MongoClient} = require('mongodb');

module.exports = () =>{

    var db = MongoClient.connect('localhost:27017', (err, client) => { 

        if(err){
            console.error('Erro ao conectar ao MongoDB:', err);
            return
        }

        console.log('Conexão bem-sucedida ao MongoDB!');

        const db = client.db('got')
    });

    return db;
}