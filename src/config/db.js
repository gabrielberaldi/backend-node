import { Sequelize } from "sequelize";

const dbConnection = new Sequelize({
  dialect: 'sqlite',
  storage: './config/database.sqlite'
})

export default dbConnection;