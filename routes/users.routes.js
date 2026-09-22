const express = require ('express')
const router = express.router()

let users = [
    {
        id: 1,
        name: 'Ruel',
        role: "student"
    },
    {
         id: 2,
         name: 'Junior',
         role: "admin"
    }
]

 router.get('/', (req, res) => {
     let result = users
   
    if (req.query.role) {
        result = users.filter(user => user,role === req.query.role)
}
  res.status(200).json ({
  success: true,
  data: result,
  meta: {
    timestamp: new date().TolSOString(),
    count: result.length
  }
})

}),
  router.get('/:id',(req, res) => {
    const user = users.find (
      user => user.id === Number(req.params.id)
     )
   
  if (!user) {
     return res.status(404).json ({
        success: false,
        error: {
            code: 'NOT_FOUND',
            message: 'user not found'
       }
    })
}

   res.status(200).json ({
        success: true,
        data: user
     })
})

   router.post('/', (req, res) => {
      const {name, role} = req.body

   if (!name || !role) {
     return res.status(400).json ({
      success: false,
      error: {
          code: 'BAD_REQUEST',
          message: 'Name and role are required'
        }
     })
   }
    
   const newUser = {
      id: Math.max(...users.map (user => user.id), 0) + 1,
      name: name,
      role: role
    }
    
    user.push(newUser)
     res.status(200).json ({
      success: true,
      data: newUser
    })
 })

  router.delete('/:id', (req, res) => {
     const id = Number (req.params.id) 
    user = users.filter(user => user.id !== id)
    res.status(204).send()
  })

 
 Module.exports = router