import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import NotesList from './components/noteList.jsx'
import Login from './components/login.jsx'
import axios from 'axios'


const App = () => {
  const [view,setView]=useState("login")
  const [userId ,setUserId]=useState("")

  const handleLogin = (userName,password)=>{
 axios.post('http://localhost:3000/api/users/login',{userName,password})
.then((res)=>{
  console.log(res.data)
  const userData=res.data
  setUserId (userData)
  setView('notes');

 
})
.catch((error)=>{console.error(error);})
  }
  if (view==="login") {
  return (
    <div>
      <h2 style={{background:"url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais')",width:"102%",textAlign:"center",color:"white",marginBottom: "3px"}} >It's more than a Note.</h2>
      <Login login={handleLogin}/>
    </div>
  
  )}else if (view==="notes") {
    return (<div>
      <NotesList id={userId}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
