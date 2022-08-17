const mongoose = require('mongoose');
const serviceXmen = require(`../services/xmen.service`);

const findAllController = async (_, res) => {
  try {
    const xmenAll = await serviceXmen.findAllService();
    res.status(200).send(xmenAll);
  } catch (err) {
    res.status(500);
  }
};

const findIdController = async (req, res) => {
  const id = req.params.id;
  const xmenId = await serviceXmen.findIdService(id);
  if (xmenId) {
    res.status(200).send(xmenId);
  } else {
    res.status(400).send({ message: `informe um id válido` });
  }
};

const createController = async (req, res) => {
  try {
    const newElement = req.body;
    const newX = await serviceXmen.createService(newElement);
    res.status(201).send(newX);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const updateController = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: `id invalido!` });
  }

  const xmenEdt = req.body;
  if (
    !xmenEdt ||
    !xmenEdt.character ||
    !xmenEdt.skills ||
    !xmenEdt.age ||
    !xmenEdt.gender ||
    !xmenEdt.origin
  ) {
    return res.status(400).send({ message: `informe todos os dado do X-Men` });
  }

  const updateXmen = await serviceXmen.updateService(id, xmenEdt);
  res.send(updateXmen);
};

const deleteController = async (req, res) => {
  const id = req.params.id;
  const deletado = await serviceXmen.deleteService(id);
  if (deletado) {
    res.status(200).send({ message: `X-Men deletado com sucesso!` });
  } else {
    res.status(400).send({ message: `X-Men Não encontrado!` });
  }
};

module.exports = {
  findAllController,
  findIdController,
  createController,
  updateController,
  deleteController,
};
