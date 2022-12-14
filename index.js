const express = require(`express`);
const cors = require(`cors`);
const route = require(`./src/routes/xmen.route`);
const { connectToDatabase } = require(`./src/database/database`);



const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(`/xmen`, route);

connectToDatabase();

app.listen(process.env.PORT ?? port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
