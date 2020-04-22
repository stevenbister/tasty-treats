// Connect to mongodb
const { MongoClient } = require('mongodb');

const connectDB = async (func) => {

  try {
    // Connect to mongodb
    const client = await MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', { useNewUrlParser: true,   useUnifiedTopology: true }).catch(err => console.log(err));
    const db = client.db('tasty-treats-db');

    func(db);

  } catch (err) {
    res.status(500).json({ message: 'Error connecting to database', error: err });
  } finally {
    client.close();
  }
}

module.exports = connectDB
