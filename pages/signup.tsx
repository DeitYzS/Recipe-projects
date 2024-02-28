import { useDefaultLayout } from '@/hooks/useDefaultLayout'
import { NextPageWithLayout } from '@/utils/types'
import React, { useState } from 'react';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
      <div className="w-full py-8">
        <div className="flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* ... SVG Path ... */}
          </svg>
          <h1 className="text-3xl font-bold text-blue-600 tracking-wider">Template</h1>
        </div>
        <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
          {/* ... Rest of the code ... */}
          <form className="my-8 text-sm">
            {/* ... Form fields ... */}
            <div className="flex flex-col my-4">
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <div className="relative flex items-center mt-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                  placeholder="Enter your password"
                />
                <button
                  onClick={togglePasswordVisibility}
                  type="button"
                  className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700"
                >
                  {/* ... SVGs for show and hide password ... */}
                </button>
              </div>
            </div>
            {/* ... Rest of the form ... */}
          </form>
          {/* ... Social media sign-up buttons ... */}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;