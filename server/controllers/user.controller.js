
const model = require("../database-mysql/model/usersModel")

const addUser= (req,res)=>{
  const userName=req.body.userName
  const password=req.body.password
    model.addOne(userName,password).then(()=>{
     res.status(200).send(res)
   })
   .catch(error=>{
     res.status(404).send(error)
   })
 }
 const deleteUser=(req,res)=>{
  model.deleteU(req.params.id).then(()=>{
    res.status(200).send(res)
  }).catch(error=>{
    res.status(404).send(error)
  })
 }
 const updateUser=(req,res)=>{
  model.updateU(req.body.userName,req.body.password,req.params.id).then(()=>{
    res.status(200).send(res)
  }).catch(error=>{
    res.status(404).send(error)
  })
 }
 module.exports={addUser,deleteUser,updateUser}