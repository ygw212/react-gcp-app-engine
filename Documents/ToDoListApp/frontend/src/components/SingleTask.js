import React, { useState } from "react";
import axios from 'axios';

function SingleTask({ task, index }) {
    const baseURL = 'http://localhost:5000/api/todo';
    const [newTask, setNewTask] = useState("");

    // delete
    function deleteTask() {
        axios.delete(`${baseURL}/${task.id}`)
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

    // handle update input
    function renameTask(e) {
        setNewTask(e.target.value);
    }


    // submit
    function submitUpdateTask() {
        const id = task.id;
        axios.put(`${baseURL}/${task.id}`,
            { userInput: newTask, id: id })
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
            <center><h4 key={index}>{task.userInput}</h4>
                <input onChange={renameTask}></input>
                <button onClick={deleteTask}>delete</button>
                <button onClick={submitUpdateTask}>update</button>
            </center>
        </>
    );
}

export default SingleTask;