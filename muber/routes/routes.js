module.exports = (app) => {
  // watch for incoming requests of method get to the route http://localhost:3050/api
  app.get('/api', (req, res) => {
    res.send({ hi: 'there' });
  });
}
