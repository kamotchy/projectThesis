import React from "react";

const Login = () => {
  return (
    <div className="login-container bg-[#f2f2f2]">
      <div className="w-96 p-6 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold">Login</h1>

        <form className="mt-5">
          <div className="input-group">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="login-input"
              placeholder="magtibay@gmail.com"
              required
            />
          </div>
          <div className="input-group">
            <label for="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              placeholder="*******"
              required
            />
          </div>
          <button type="submit" class="login-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
