import Usuario from "../models/Usuario.js";
import EncryptService from "../services/encryptService.js";

class UsuarioController {

  static getAllUsuarios = async(req, res) => {
    try {
      const users = await Usuario.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static getUsuarioById = async(req, res) => {
    const id = req.params.id;
    try {
      const Usuario = await Usuario.findByPk(id);
      if(Usuario) return res.status(200).json(Usuario);
      res.status(400).json({message: 'Usuario não encontrado'});
    } catch (error) {
      console.error('erro')
      res.status(500).json({error: error.message});
    }
  }

  static createUsuario = async(req, res) => {
    const createdUsuario = Usuario.build(req.body);
    const encryptedPassword = await EncryptService.hashPassword(req.body.senha);
    createdUsuario.senha = encryptedPassword; 
    try {
      await createdUsuario.save();
      res.status(200).json(createdUsuario);
      console.log(createdUsuario);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static updateUsuario = async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      await Usuario.update(body, { where: { id }});
      res.status(200).json();
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static deleteUsuario = async(req, res) => {
    const id = req.params.id;
    try {
      await Usuario.destroy({
        where: { id }
      })
      res.status(200).json();
    } catch (error) {
      res.status(500).json({error: error.message});  
    }
  }
}

export default UsuarioController;