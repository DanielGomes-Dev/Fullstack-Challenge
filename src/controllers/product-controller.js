const Products = require('../models/Products')

class ProductController {

    async index(req, res) {
        try {
            const products = await Products.findAll();
            return res.json(products)

        } catch (err) {
            console.log(err);
            return res.status(400).json()

        }
    }
    async show(req, res) {
        const id = req.params.id;
        try {
            const products = await Products.findByPk(id);
            return res.json(products)

        } catch (err) {
            console.log(err);
            return res.status(400).json()
        }

    }

    async create(req, res) {
        const newProduct = req.body;
        try {
            const products = await Products.create(newProduct);
            return res.json(products)

        } catch (err) {
            console.log(err);
            return res.status(400).json()

        }

    }

    async update(req, res) {
        const id = req.params.id;
        const productUpdated = req.body;
        try {
            const product = await Products.findByPk(id);
            const updatedProduct = product.update(productUpdated);
            return res.json(updatedProduct);

        } catch (err) {
            console.log(err);
            return res.status(400).json()

        }
    }

    async delete(req, res) {
        const id = req.params.id
        try {
            const product = await Products.findByPk(id);
            await product.destroy();
            return res.json();

        } catch (err) {
            console.log(err);
            return res.status(400).json()

        }

    }

}

module.exports = new ProductController();