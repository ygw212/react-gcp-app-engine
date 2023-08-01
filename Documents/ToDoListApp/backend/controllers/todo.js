const {dataBase} = require("../models/dataBase");

exports.getAllTodo = (req, res) => {
    let todoList = dataBase.getAll();
    res.json(todoList);
};

exports.getSpecificTodo = (req, res) => {
   let todo = dataBase.getTodo(req.params.id);
   console.log(todo);
   res.json(todo);
}

exports.postCreateTodo = (req, res) => {
    let data = req.body;
    dataBase.create(data);
    console.log(data);
    res.json({ message: "Todo added successfully", data});

};

exports.putUpdateTodo = (req, res) => {
    let updateId = req.params.id;
    console.log(updateId);
    let data = req.body;
    console.log(data);
    dataBase.update(updateId, data);
    res.json({ message: "Todo updated successfully", data});
};

exports.deleteTodo = (req, res) => {
    let toDeleteId = req.params.id;
    dataBase.delete(toDeleteId);
    res.json({ message: "Todo deleted successfully"});
};