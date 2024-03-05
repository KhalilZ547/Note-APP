const connection = require("../index.js")

const selectAll=()=>{
    sql= "SELECT * FROM notes"
    return connection.query(sql)
}

const addOne = (title,content)=>{
  sql = "INSERT into notes (title,content) values (?,?) "
   return connection.query(sql,[title,content])
}

const deleteO= (id)=>{
  sql="DELETE FROM notes WHERE idnotes=?"
  return connection.query(sql,[id])
}

const update =(title,content,id)=>{
sql="UPDATE notes SET title=?,content=? WHERE idnotes =?"
return connection.query(sql,[title,content,id])
}

  module.exports={selectAll,addOne,deleteO,update}