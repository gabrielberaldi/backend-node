import Livro from "../models/Livro.js";

class LivroController {

  static getAllLivros = async(req, res) => {
    try {
      const livros = await Livro.findAll();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static getLivroById = async(req, res) => {
    const id = req.params.id;
    try {
      const livro = await Livro.findByPk(id);
      if(livro) return res.status(200).json(livro);
      res.status(400).json({message: 'Livro não encontrado'});
    } catch (error) {
      console.error('erro')
      res.status(500).json({error: error.message});
    }
  }

  static createLivro = async(req, res) => {
    const createdLivro = Livro.build(req.body);
    //const createdLivro = Livro.create(req.body) --> método que executa o build e save em conjunto.
    try {
      await createdLivro.save();
      res.status(200).json(createdLivro);
      console.log(createdLivro);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static updateLivro = async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      await Livro.update(body, { where: { id }});
      res.status(200).json();
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }

  static deleteLivro = async(req, res) => {
    const id = req.params.id;
    try {
      await Livro.destroy({
        where: { id }
      })
      res.status(200).json();
    } catch (error) {
      res.status(500).json({error: error.message});  
    }
  }
}

export default LivroController;