const mongoclient = require('mongodb').MongoClient;

async function connecttodb() {
    const client = await mongoclient.connect("mongodb://localhost:27017/sampledb")
    return client;
}

module.exports=connecttodb;