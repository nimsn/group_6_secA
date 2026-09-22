const express = require(`express`);
const router = express.Router();

let products = [
    {
	id: 1,
	name: `Coke`,
	category: `Beverage`,
	price: 1.50,
	stock: 50
    },
    {
	id: 2,
	name: `Sprite`,
	category: `Beverage`,
	price: 1.50,
	stock: 40
    }
]

router.get (`/`,(req, res) => {
	let result = products;

	if (req.query.category) {
		result = products.filter(product => product.category === req.query.category);
	}

	res.status (200).json ({
	"success": true,
	"data": result,
	"meta": {
		"timestamp": new Data().toISOString(),
		"count": result.length
		}
	})
})

router.get(`/:id`,(req, res) => {
	const product = products.find(
	product => product.id === Number(req.params.id)
	);

	if (!product) {
	return res.status (404).json({
	"success": false,
	"error": {
		"code": `NOT_FOUND`,
		"message": `Product not found`
		}
	})
}

	res.status (200).json({
	"success": true,
	"data": product
	})
})

router.post (`/`,(req, res) => {
	const {name, category, price, stock} = req.body;

	if (!name || !category || price === umdifined || stock === undefined) {

return res.status (400).json ({
	"success": false,
	"error": {
		"code": "BAD_REQUEST",
		"message": "Name, category, price, and stock are required"
		}
	})
}

const newProduct = {
	id: Math.mas (...products.map (product => product.id), 0) + 1,
	name: name,
	category: category,
	price: Number(price),
	stock: Number(stock)
	}

products.push (newPoroduct)

res.status (201).json ({
	"success": true,
	"data": newProduct
	})
})