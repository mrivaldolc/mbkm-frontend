import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import jwt_decode from "jwt-decode";

const Dashboard = () => {
    // const [name, setName] = useState('');
    // const [token, setToken] = useState('');

    // useEffect(() => {
    //     refreshToken();
    // },[]);

    // const refreshToken = async() => {
    //     try{
    //         const response = await axios.get('');
    //         setToken(response.data.accessToken);
    //         const decode = jwt_decode(response.data.accessToken);
    //         console.log(decode);
    //     }catch (error) {

    //     }
    // }
    console.log("TEST")
    const endpoint = "https://31de-118-99-116-253.ngrok-free.app/api/v1/user/hello"
    fetch(endpoint)
    // .then((data) => data.json())
    .then((result) => console.log(result))

  return (
    <div>
      <h1>ini dashboard</h1>
    </div>
  )
}

export default Dashboard
