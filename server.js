import dbConnection from './src/config/db.js';
import app from './src/app.js';

// const port = process.ENV.PORT || 3000;
const port = 3000;

const tryConnection = async () => {
  try {
    await dbConnection.authenticate();
    await dbConnection.sync();
    console.log('db sincronizado');
  } catch (error) { 
    console.error(`Erro ao se conectar com db ${error}`)
  }
}

app.listen(port, () => {
  console.log(`Servidor escutando na porta: ${port}`);
  tryConnection();
})




