const connection = require("../index.js")

const selectAll=()=>{
  const sql= "SELECT * FROM users"
  return connection.query(sql)
}
const loginUser = async (userName, password) => {
  const sql = 'SELECT * FROM users WHERE userName = ? AND password = ?';
  const results= await connection.query(sql, [userName, password]);
  return results;
};
const addOne = (userName,password)=>{
    const sql = "INSERT into users (userName,password) values (?,?) "
     return connection.query(sql,[userName,password])
  }
 
  const deleteU =(id)=>{
   const sql="DELETE FROM users WHERE idusers=?"
    return connection.query(sql,[id])
  }
  const updateU =(userName,password,id)=>{
   const sql="UPDATE users SET userName=?, password=? WHERE idusers =?"
    return connection.query(sql,[userName,password,id])
  }
  
  module.exports={loginUser,selectAll,addOne,deleteU,updateU}  