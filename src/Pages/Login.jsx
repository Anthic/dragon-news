import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center ">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg py-10 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        <form>
          {/* Email Address Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            />
          </div>
          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 my-4 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Login
          </button>
        </form>
        {/* Register Link */}

        <p className="text-center text-sm text-gray-500 mt-4">
          Don’t Have An Account?{" "}
          <Link
            to={"/auth/register"}
            className="text-red-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
