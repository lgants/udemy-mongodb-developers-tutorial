const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // watch for incoming requests of method get to the route http://localhost:3050/api
  app.get('/api', DriversController.greeting);

  app.put('/api/drivers/:id', DriversController.edit);

  app.post('/api/drivers', DriversController.create);
}
