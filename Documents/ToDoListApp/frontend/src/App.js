import React, { useEffect, useState} from 'react'
import Input from './components/Input';
import axios from 'axios';
import SingleTask from './components/SingleTask';

function App() {
  const [tasks, setAllTasks] = useState ([]);
  const baseURL = 'http://localhost:5000/api/todo';


// get all tasks
function getAllTasks() {
   axios.get(baseURL)
    .then(
      (response) => {
      const result = response.data;
      setAllTasks(result);
      }
    )
    .catch(function(error) {
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
    <div className="App">
      <div>
        <h1><center>To do List App</center></h1>
      </div>
      <div><center>
        <Input />
      </center></div>
   
      <br></br>
      <div>
        <center><button onClick={getAllTasks}>Get all tasks</button></center>
        <h2><center>All To do Tasks</center></h2>
        {tasks && tasks.map((task, i) => (
          <SingleTask 
            task={task}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
