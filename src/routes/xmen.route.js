const route = require(`express`).Router();
const controllerXmen = require(`../controllers/xmen.controller`);
const swaggerUi = require(`swagger-ui-express`);
const swaggerDocument = require(`../docs/swagger.json`);


route.use(`/api/docs`, swaggerUi.serve);
route.get(`/api/docs`, swaggerUi.setup(swaggerDocument));

route.get(`/todos-xmen`, controllerXmen.findAllController);
route.get(`/:id`, controllerXmen.findIdController);
route.post(`/create`, controllerXmen.createController);
route.put(`/update/:id`, controllerXmen.updateController);
route.delete(`/delete/:id`, controllerXmen.deleteController);

module.exports = route;
