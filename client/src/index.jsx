import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import NotesList from './components/noteList.jsx'
import Login from './components/login.jsx'


const App = () => {
  const [view,setView]=useState("login")
  const [userid ,setUserId]=useState("")
  const changeView = ()=>{

  }
  if (view==="login") {
  return (
    <div>
      <h2 style={{background:"url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais')",width:"102%",textAlign:"center",color:"white",marginBottom: "3px"}} >It's more than a Note.</h2>
      <Login/>
    </div>
  
  )}else if (view==="notes") {
    return (<div>
       <h1>Your Notes</h1>
      <NotesList id={userid}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
