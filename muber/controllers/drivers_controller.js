const Driver = require('../models/driver');

module.exports = {
  greeting(req, res){
    res.send({ hi: 'there' });
  },

  // if an error occurs, next will be called, which will be the custom error handling middleware
  create(req, res, next){
    const driverProps = req.body;
    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  }
}
