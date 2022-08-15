const { connect } = require(`mongoose`);

const connectToDatabase = () => {
  connect(`mongodb://127.0.0.1:27017/x-men-DB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log(`MongoDB CONNECT!`))
    .catch((err) => console.log(`Erro ao conectar com o MongoDB, erro:${err}`));
};

module.exports = { connectToDatabase };
