const { Schema, model } = require(`mongoose`);

const xmenSchema = new Schema({
  id: { type: String, required: true },
  character: { type: String, required: true },
  skills: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  origin: { type: String, required: true },
});

const xmen = model(`x-men`, xmenSchema);

module.exports = xmen;
