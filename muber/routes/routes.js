const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // watch for incoming requests of method get to the route http://localhost:3050/api
  app.put('/api/drivers/:id', DriversController.edit);
  app.post('/api/drivers', DriversController.create);
  app.delete('/api/drivers/:id', DriversController.delete);
  app.get('/api/drivers', DriversController.index);
}
