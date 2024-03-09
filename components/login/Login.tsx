import PropTypes from 'prop-types'
import React, {useState, useEffect } from 'react'
import Link from 'next/link'

async function loginUser(credentials: any) {
    return fetch("http://localhost:5000/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to log in');
        }
        return response.json();
      });
  }

const Login = ({setToken}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    const onUsernameChange = (e: React.ChangeEvent<any>): void => {
        const username = e.target.value;
        setUsername(username);
    }


    const onPasswordChange = (e: React.ChangeEvent<any>): void => {
        const password = e.target.value;
        setPassword(password);
    }

    return (
        <div className="flex h-full mt-32">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700">SIGN IN</h1>
                <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
              </div>
              <div className="m-7">
                <form method='post'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                    <input
                        type="username"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={onUsernameChange}
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                </div>
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                      <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      value={password}
                      onChange={onPasswordChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                    >
                      Sign in
                    </button>
                  </div>
                  <p className="text-sm text-center text-gray-400">
                    Don't have an account yet? 
                    <Link href="/signup" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"> Sign up</Link>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login