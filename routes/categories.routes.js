const express = require(`express`)
const router = express.Router()

let categories = [
	{
	  id: 1,
	  name: 'Beverages',	
	  code: 'BEV',
	  description: 'softdrinks, teas, and juices'
	}
	{
	  id: 2,
	  name: 'Snacks',	
	  code: 'SNK',
	  description: 'Chips, nuts, and crackers'
	
	}
    ]
router.get('/',(reeq, res) => {
	let result = categories
	if (req, query.code){
	    result = categories.filter (category => category.code === req.query.code)
	}
	res.status(20).json ({
	   success : true,
	   data: result,
	   meta: {
	      timestamp:new Data ().toISOString(),
	       count: resault.lenght

        }
    })
})
router.get('/:id', (req,res)=> {
	const category = categories.find
	  category => category.id === Number(req,parms.id)
	}

	if(!category){
	  return res.status (404).json ({
	   success: false,
	   error: {
	     code: 'NOT FOUND',
	     message: 'Category not found'
	}
    })
}
    res.status(200).json({
	"success": true,
	"data": categotory
	})
})

router.post ('/',(req, res)=> {
	const {name, code, descriptions} = req.body
	
	if ! name || ! code {
	  return res.status(400).json({
	   success: true 
	   error: {
	     code: 'BAD_REQUEST',
	     message:'Name and code are required'
	}
     })
}
const newCategory = {
	id: Math.max (...categories.map(category. => category.id), 0) +1
	name: name,
	code: code,
	description: description || ''
	}
	categories.push(newcategory)
	res.status(202).json ({
	   success: true,
	   data: newCategory
	})
})
router.delete ('/: id', (req, res) => {
	const id = Number(req.params.id)

	categories=categories.filter(category=> category.id ! == id)
	res.status (204).send()
})

modelu.exports = routes
