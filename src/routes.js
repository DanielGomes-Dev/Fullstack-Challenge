const { init } = require('./app');
const productController = require('./controllers/product-controller');

module.exports = {
    product(route){
        route.get('/products',productController.index)
        route.get('/products/:id',productController.show)
        route.get('/products',productController.create)
        route.get('/products',productController.update)
        route.get('/products',productController.delete)
    },
    init(route){
      this.product(route);  
    }
}

