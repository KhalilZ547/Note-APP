const connection = require("../index.js")

const selectAll=(id)=>{
   const  sql= "SELECT * FROM notes where users_idusers=?"
    return connection.query(sql,[id])
}

const addOne = (title,content,users_idusers)=>{
 const  sql = "INSERT into notes (title,content,users_idusers) values (?,?,?) "
   return connection.query(sql,[title,content,users_idusers])
}

const deleteO= (id)=>{
const   sql="DELETE FROM notes WHERE idnotes=?"
  return connection.query(sql,[id])
}

const update =(title,content,id)=>{
const sql="UPDATE notes SET title=?,content=? WHERE idnotes =?"
return connection.query(sql,[title,content,id])
}

  module.exports={selectAll,addOne,deleteO,update}