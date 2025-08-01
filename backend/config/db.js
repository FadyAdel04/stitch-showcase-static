const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
let client;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    console.log('MongoDB connected');
  }
  return client.db();
}

module.exports = connectDB; 