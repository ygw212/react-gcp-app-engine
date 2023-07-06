import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetToken } from "../components/TokenContext";

export function useAuthenticate(user,apiURI,setCurrentUser,setErrorMsg,setIsLoading){
    
    const navigate = useNavigate();
    const curSetToken = useSetToken();
    function submitHandler(e) {
        e.preventDefault();
        setIsLoading(true);
        axios
          .post(`${apiURI}`, user, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            const result = res.data.user;
            setCurrentUser(result);
            const curToken = res.data.tokens.access.token;
            console.log(curToken);
            curSetToken(curToken)
            navigate("/userPage");
          }).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              setErrorMsg(error.response.data.message);
              
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
            setIsLoading(false);
          });
      }

    return submitHandler;
}