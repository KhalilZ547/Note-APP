
const model = require("../database-mysql/model/usersModel")

const selectU = async function (req, res) {
  try {
const response= await model.selectAll()
  res.status(200).send(response[0])
    }
    catch(error)  {
        res.status(500).send(error);
    };
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({ error: ' required userName and password ' });
    }

    const results = await model.loginUser(userName, password);
    console.log(results);
    if (results.length === 0) {
      return res.status(401).json(results);
    }
    
    res.status(200).json(results[0][0].idusers);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

const addUser = async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;
   const response= await model.addOne(userName, password);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id =req.params.id
    const response =await model.deleteU(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const username=req.body.userName;
    const pass=req.body.password
    const id =req.params.id
  const response=  await model.updateU(username,pass,id);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
 module.exports={login,selectU,addUser,deleteUser,updateUser}