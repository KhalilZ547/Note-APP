import React, { useState } from "react";
const Login = ({login}) => {
  const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
    
    // console.log(username);
    // console.log(password);
    // console.log(login);
  return (
    <div style={{ background:"url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais')", border:" 2px solid gray",display:"flex",width: "100%",color:"white",padding:" 10px",cursor: "pointer",justifyContent:"space-around",boxShadow: "10px 5px 5px gray"}} className="login-container">
    <form style={{paddingBlock:"100px"}} >
      <label>Username:</label>
      <input onChange={(e)=>{ setUsername(e.target.value)}} style={{display:"flex",width: "100%",padding:" 5px",boxShadow: "5px 5px 5px purple",marginBottom: "5px"}} placeholder="Your Name Here" required></input>
      <label >Password:</label>
      <input onChange={(e)=>{ setPassword(e.target.value)}} style={{display:"flex",width: "100%",padding:" 5px",boxShadow: "5px 5px 5px purple", marginBottom: "10px"}} placeholder="Your Password Here" type="password"  required></input>
      <button onClick={()=>{login(username,password)}} style={{ color:"purple",width:"107%",boxShadow: "6px 5px 5px purple", marginBottom: "350px"}}type="button">Login</button>
    </form>
  </div>
  );
};
export default Login;
