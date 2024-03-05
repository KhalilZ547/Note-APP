// const db = require("../database-mysql");
const model = require (".././database-mysql/model/notesModel.js");

const select = async function (req, res) {
    try {
  const response= await model.selectAll()
    res.status(200).send(response[0])
      }
      catch(error)  {
          res.status(500).send(error);
      };
};

const add = async (req, res) => {
  try {
      await model.addOne(req.body.title,req.body.content); 
      res.status(200).send("Note added successfully");
  } catch (error) {
      res.status(500).send(error);
  }
};
const deleteOne = async (req, res) => {
  try {
      await model.deleteO(req.params.id);
      res.status(200).send("Note deleted successfully");
  } catch (error) {
      res.status(500).send(error);
  }
};
const updateOne = async (req, res) => {
  try {
      await model.update(req.body.title,req.body.content, req.params.id); 
      res.status(200).send("Note updated successfully");
  } catch (error) {
      res.status(500).send(error);
  }
};


module.exports = { select,add,deleteOne,updateOne };