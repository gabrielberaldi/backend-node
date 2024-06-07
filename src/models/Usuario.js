import {DataTypes, Model} from "sequelize"
import dbConnection from "../config/db.js";

class Usuario extends Model {}

Usuario.init(
  {
    nome: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize: dbConnection,
    modelName: 'Usuario'
  }
)

export default Usuario;

