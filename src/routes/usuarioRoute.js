import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router
.get('/usuarios', UsuarioController.getAllUsuarios)
.get('/usuarios/:id', UsuarioController.getUsuarioById)
.post('/usuarios', UsuarioController.createUsuario)
.put('/usuarios/:id', UsuarioController.updateUsuario)

export default router;