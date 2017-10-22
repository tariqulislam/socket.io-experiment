require('dotenv').config();
const env = process.env;
const database = {
  connectionString: 'mongodb://'+ env.DATABASE_USER_NAME + ":" + env.DATABASE_PASSWORD + "@" + env.DATABASE_HOST +":" + env.DATABASE_PORT + "/" + env.DATABASE_USER_NAME
}

module.exports = database;