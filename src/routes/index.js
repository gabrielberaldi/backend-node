import express from "express";
import livros from "./livrosRoute.js";
import usuario from "./usuarioRoute.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: 'Teste livros'});
  })

  app.use(
    express.json(),
    livros,
    usuario
  )
}

export default routes;