const { init } = require('./app');
const productController = require('./controllers/product-controller');

module.exports = {
  product(route) {
    route.get('/products', productController.index)
    route.get('/products/:id', productController.show)
    route.post('/products', productController.create)
    route.put('/products/:id', productController.update)
    route.delete('/products/:id', productController.delete)
  },
  init(route) {
    this.product(route);
  }
}

