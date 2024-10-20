import React from 'react';

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-4/5 max-w-4xl rounded-xl shadow-lg overflow-hidden">
        <div className="w-1/2 bg-white p-10">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Log in to your Account</h1>
          <p className="text-gray-500 text-center mb-8">Welcome back! Select method to log in:</p>

          <div className="flex justify-between mb-6">
            <button className="w-1/2 bg-white border-2 border-gray-300 py-2 px-4 rounded-lg flex justify-center items-center gap-2 mr-2">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="h-6 w-6" />
              Google
            </button>
            <button className="w-1/2 bg-white border-2 border-gray-300 py-2 px-4 rounded-lg flex justify-center items-center gap-2">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" className="h-6 w-6" />
              Facebook
            </button>
          </div>

          <div className="flex justify-center items-center text-gray-400 mb-6">
            <span>or continue with email</span>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">Email</label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70 mr-2"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" className="w-full p-2 focus:outline-none" placeholder="Enter your email" />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold mb-2">Password</label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="w-full p-2 focus:outline-none" placeholder="Enter your password" />
            </div>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Log In
          </button>

          <div className="flex justify-between items-center mt-6">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-blue-500">Forgot Password?</a>
          </div>

          <div className="text-center mt-6 text-gray-500">
            Don't have an account? <a href="/signup" className="text-blue-500">Create an account</a>
          </div>
        </div>

        {/* Right Section - Promotional Banner */}
        <div className="w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 p-10 flex justify-center items-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Connect with every application</h2>
            <p className="text-lg">Everything you need in an easily customizable dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
