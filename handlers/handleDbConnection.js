// Connect to mongodb
const { MongoClient } = require('mongodb');

// Pass function
const connectDB = async (func) => {

  const LOCAL_CONNECTION = 'mongodb://localhost:27017';
  const LOCAL_DATABASE = 'tasty-treats-db';

  try {
    // Connect to mongodb
    const client = await MongoClient.connect(process.env.MONGODB_URI || LOCAL_CONNECTION, { useNewUrlParser: true,   useUnifiedTopology: true }).catch(err => console.log(err));
    const db = client.db(process.env.MONGODB_DATABASE || LOCAL_DATABASE);

    // Run function passing the database as the param
    func(db);

  } catch (err) {
    res.status(500).json({ message: 'Error connecting to database', error: err });
  } finally {
    client.close();
  }
}

module.exports = connectDB
