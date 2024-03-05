const express = require("express");
const noteRoutes = require('./routes/note.routes.js')
const userRoutes = require('./routes/user.routes.js')
// const db = require('./database-mysql');


const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/notes", noteRoutes);
app.use("/api/users",userRoutes)



app.listen(PORT,()=>{
  console.log(`listening on port : ${PORT}`);
});
