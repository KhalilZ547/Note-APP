const connection = require("../index.js")

const addOne = (userName,password)=>{
    sql = "INSERT into users (userName,password) values (?,?) "
     return connection.query(sql,[userName,password])
  }
  const deleteU =(id)=>{
    sql="DELETE FROM users WHERE idusers=?"
    return connection.query(sql,[id])
  }
  const updateU =(userName,password,id)=>{
    sql="UPDATE users SET userName=? password=? WHERE idusers =?"
    return connection.query(sql,[userName,password,id])
  }
  
  module.exports={addOne,deleteU,updateU}  