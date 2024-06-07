import {DataTypes, Model} from "sequelize"
import dbConnection from "../config/db.js";

class Livro extends Model { };

Livro.init(
  {
    autor: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    sequelize: dbConnection,
    modelName: 'Livro'
  }
)

export default Livro;