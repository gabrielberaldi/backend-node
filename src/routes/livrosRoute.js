import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
.get('/livros', LivroController.getAllLivros)
.get(`/livros:id`, LivroController.getLivroById)
.post(`/livros`, LivroController.createLivro)
.put(`/livros/:id`, LivroController.updateLivro)

export default router;