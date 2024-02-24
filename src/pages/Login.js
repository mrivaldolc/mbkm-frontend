// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       <h1 className="text-rose-600">sdasd</h1>
//     </div>
//   )
// }

// export default Login

import React,{useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
// import backgroundImage from './background.jpg'; // Sesuaikan dengan path gambar Anda

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState('');
  const history = useHistory();

  const Auth = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http:/localhost:3000/login',{
        email: email,
        password: password,
      });
      history.push("/dashboard");
    } catch (error){
      if (error.response){
        console.log(error.response.data.msg)
        setMsg(error.response.data.msg)
      }
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Tambahkan logika login di sini
  //   console.log("Username:", username);
  //   console.log("Password:", password);
    
  // };

  return (
    <section className="bg-cover bg-center bg-hero h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 ">
      <div className="bg-opacity-90 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-30 items-center my-2 mx-5 md:mx-0 md:my-0 shadow-2xl shadow-black min-h-[50%] md:w-[60%] bg-gray-50 dark:bg-gray-900-opacity-50">
        {/* <div className="md:w-1/3 max-w-sm"> */}
        <div className="md:w-1/3 mr-40">
          <img
            src="https://lldikti8.kemdikbud.go.id/wp-content/uploads/2022/12/mbkm-137.png"
            alt="Sample image"
          />
        </div>
        {/* <div
          className="min-h-screen flex items-center justify-center "
          style={{
            backgroundImage: `url(${'https://telkomuniversity.ac.id/wp-content/uploads/2023/10/Group-129-3.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        > */}
        <div className="">
          <div className="text-center mb-4 font-medium text-2xl  ">
            <h1>LOGIN</h1>
          </div>
          {/* <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Login</h2> */}

          <form onSubmit={Auth}>
            <p className="has-text-centered">{msg}</p>
            <div className="mb-2 ">
              {/* <label htmlFor="username" className="block text-sm font-semibold text-gray-600 mb-2">
                Username
              </label> */}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
                required
              />
            </div>

            <div className="mb-2">
              {/* <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">
                Password
              </label> */}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              {/* <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a> */}
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Login
            </button>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Don't have an account?{" "}
              <a
                className="text-red-600 hover:underline hover:underline-offset-4"
                href="/Register"
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Login;
