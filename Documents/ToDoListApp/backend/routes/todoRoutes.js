const express = require("express");
const router = express.Router();

const {
    getAllTodo,
    getSpecificTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");

// get all todo
router.get("/", getAllTodo);

// get specific todo
router.get("/:id", getSpecificTodo);

// add a new todo 
router.post("/", postCreateTodo);

// update a todo
router.put("/:id", putUpdateTodo);

// delete a todo
router.delete("/:id", deleteTodo);

module.exports = router;