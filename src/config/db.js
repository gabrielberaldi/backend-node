import { Sequelize } from "sequelize";

const dbConnection = new Sequelize({
  dialect: 'sqlite',
  storage: './src/config/database.sqlite'
})

export default dbConnection;