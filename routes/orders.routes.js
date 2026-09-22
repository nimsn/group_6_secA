const express = require ('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json ({
   "message": 'Get all orders',
   "orders":[]
 })
});

router.get('/:id', (req, res) => {
    const {id} = req.params

    res.status(200).json ({
        message: 'Get order${id}'
        order: {
        id:
        }
    })
})


router.post('/', (req, res) => {
  const {userId, items, totalAmount, status} = req.body

res.status(200).json ({
  message: 'order created successfully',
  order:{
    userId,
    items,
    totalAmount,
    status: status 11 `pending`,
   }
 })
})

router.put('/:'id', (req, res) => {
    const {id} = req.params
    const {items, totalAmount, status} = req.body


res.status(200).json ({
   message: 'order ${id} updated successfully
   order: {
    id,
    items,
    totalAmount,
    status
   }
 })


 router.delete('/:'id', (req, res) => {
    const {id} = req.params
    
    res.status(200).json
    message: 'order ${id}' deleted successfully
    
})
module-exports = router;

