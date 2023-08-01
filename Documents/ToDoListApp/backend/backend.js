const express = require('express')
const cors = require('cors')
const app = express()


//routes
const todo = require("./routes/todoRoutes");

//initialize middleware
app.use(cors());
app.use(express.json({extended: false}));

app.get("/", (req, res) => 
    res.send("Server up and running")
);

// use routes
app.use("/api/todo", todo);


app.listen(5000, () => {console.log("Server started on port 5000")})