const mocksXmen = require(`../mocks/xmen.mocks`);
const entityXmen = require(`../entities/xmen.entity`);
const modelXmen = require(`../models/xmen.model`);
const xmen = require('../models/xmen.model');

const findAllService = async () => {
  return await modelXmen.find();
};

const findIdService = async (id) => {
  const idXmen = await modelXmen.findOne({ id: id });
  return idXmen;
};

const createService = async (newXmen) => {
  const newX = [];
  const validaX = new entityXmen(newXmen);
  validaX.validate();
  newX.push(validaX.getXmen());
  const newElement = await modelXmen.create(newX);
  return newElement;
};

const updateService = async (id, xmenEdt) => {
  const xmenUpdate = await xmen.findByIdAndUpdate(id, xmenEdt);
  return xmenUpdate;
};

const deleteService = async (id) => {
  return (xmenFinded = await modelXmen.findOneAndDelete({ id: id }));
};

module.exports = {
  findAllService,
  findIdService,
  createService,
  updateService,
  deleteService,
};
