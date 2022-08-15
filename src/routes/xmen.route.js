const route = require(`express`).Router();
const controllerXmen = require(`../controllers/xmen.controller`);

route.get(`/xmen/todos-xmen`, controllerXmen.findAllController);
route.get(`/xmen/:id`, controllerXmen.findIdController);
route.post(`/xmen/create`, controllerXmen.createController);
route.put(`/xmen/update/:id`, controllerXmen.updateController);
route.delete(`/xmen/delete/:id`, controllerXmen.deleteController);

module.exports = route;
