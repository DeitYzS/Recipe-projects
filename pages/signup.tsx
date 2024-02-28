import { useDefaultLayout } from '@/hooks/useDefaultLayout'
import { NextPageWithLayout } from '@/utils/types'
import React, { useState } from 'react';
import Link from 'next/link';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
    const validateForm = () => {
      let isValid = true;
  
      // Reset errors
      setNameError('');
      setEmailError('');
      setPasswordError('');
      setConfirmPasswordError('');
  
      // Validate name
      if (!name.trim()) {
        setNameError('Name is required');
        isValid = false;
      }
  
      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setEmailError('Invalid email address');
        isValid = false;
      }
  
      // Validate password
      if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters');
        isValid = false;
      }
  
      // Validate confirmPassword
      if (confirmPassword !== password) {
        setConfirmPasswordError('Passwords do not match');
        isValid = false;
      }

      if (confirmPassword == '') {
        setConfirmPasswordError('Confirm password is required');
        isValid = false;
    }
  
      return isValid;
    };

    const correctForm = () => {
        let isValid = true;
    
        // Reset errors
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
    
        // Validate name
        if (!name.trim()) {
          setNameError('Corrcet ');
          isValid = false;
        }
    
        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          setEmailError('Corrcet');
          isValid = false;
        }
    
        // Validate password
        if (password.length < 6) {
          setPasswordError('Password must be at least 6 characters');
          isValid = false;
        }
    
        // Validate confirmPassword
        if (confirmPassword !== password) {
          setConfirmPasswordError('Passwords do not match');
          isValid = false;
        }
  
        if (confirmPassword == '') {
          setConfirmPasswordError('Confirm password is required');
          isValid = false;
      }
    
        return isValid;
      };
  
    const handleSignUp = (e:any) => {
      e.preventDefault();
      if (validateForm()) {
        console.log('Form submitted successfully');
      } else {
        console.log('Form validation failed');
      }
    };
  
    return (
      <div className="flex h-full mt-8">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700">SIGN UP</h1>
              <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
            </div>

            <div className="m-7">
              <form onSubmit={handleSignUp}>
                
                <div className="mb-2">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                </div>
                
                <div className="mb-2">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>

                <div className="mb-2">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                </div>

                <div className="mb-2">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="confirm password"
                    id="confirm password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
                </div>
             
                <div className="mb-4">
                  <button
                    type="button"
                    onClick={handleSignUp}
                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    SIGN UP
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Already have an account?
                  <Link href="/signin" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                    {' '}
                    Log in.
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

SignUpForm.getLayout = useDefaultLayout;
export default SignUpForm;