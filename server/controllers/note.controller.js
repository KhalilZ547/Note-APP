// const db = require("../database-mysql");
const model = require (".././database-mysql/model/notesModel.js");

const select = async function (req, res) {
    try {
  const response= await model.selectAll(req.params.id)
    res.status(200).send(response[0])
      }
      catch(error)  {
          res.status(500).send(error);
      };
};

const add = async (req, res) => {
  try {
  const response=  await model.addOne(req.body.title,req.body.content,req.params.id); 
      res.status(200).send(response);
  } catch (error) {
      res.status(500).send(error);
  }
};
const deleteOne = async (req, res) => {
  try {
   const response =await model.deleteO(req.params.id);
      res.status(200).send(response);
  } catch (error) {
      res.status(500).send(error);
  }
};
const updateOne = async (req, res) => {
  try {
    const respone = await model.update(req.body.title,req.body.content, req.params.id); 
      res.status(200).send(respone);
  } catch (error) {
      res.status(500).send(error);
  }
};


module.exports = { select,add,deleteOne,updateOne };
