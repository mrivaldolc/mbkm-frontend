import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axios from '../axiosConfig';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { setIsAuthenticated } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem('login');
    if (token) {
      history.push('/dashboard');
    }
  }, [history]);

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/user/login', {
        email: email,
        password: password,
      }, { withCredentials: true});

      if (response.status === 200) {
        localStorage.setItem('isAuthenticatd', 'true');
        setIsAuthenticated(true);
        history.push('/dashboard');
      } else {
        setError('Login failed');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <section className="bg-cover bg-center bg-hero h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 ">
      <div className="bg-opacity-90 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-30 items-center my-2 mx-5 md:mx-0 md:my-0 shadow-2xl shadow-black min-h-[50%] md:w-[60%] bg-gray-50 dark:bg-gray-900-opacity-50">
        <div className="md:w-1/3 mr-40">
          <img
            src="https://lldikti8.kemdikbud.go.id/wp-content/uploads/2022/12/mbkm-137.png"
            alt="Sample image"
          />
        </div>
        <div className="">
          <div className="text-center mb-4 font-medium text-2xl  ">
            <h1>LOGIN</h1>
          </div>
          <form onSubmit={Auth}>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-2 ">
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
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            >
              Login
            </button>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              Don't have an account?{' '}
              <a className="text-red-600 hover:underline hover:underline-offset-4" href="/Register">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
