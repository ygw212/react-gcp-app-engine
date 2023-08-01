import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';
function Input() {
    const [task, setTask] = useState("");
    const [userInput, setUserInput] = useState("");
    const id = uuid();

    const baseURL = 'http://localhost:5000/api/todo';

    function handleInput(e) {
        setUserInput(e.target.value);
        console.log(userInput);
    }

    // post task
    function createPost(e) {
        e.preventDefault();
        setTask(userInput);
        //console.log(task);
        axios.post('http://localhost:5000/api/todo', {
            userInput, id
        })
            .then(
                (response) => {
                    console.log(response);
                }
            )
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    return (
        <>
            <form>
                <input onChange={handleInput}></input>
                <button onClick={createPost}>Add Task</button>
            </form>
            <div>
                <h2><center>Specific To do Task</center></h2>
                {task}
            </div>
        </>
    );
}

export default Input;