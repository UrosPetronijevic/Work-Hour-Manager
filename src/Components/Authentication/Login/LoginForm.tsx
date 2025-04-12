import React from "react";

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-blue-50">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
        <ul className="space-y-4">
          <li>
            <div className="flex items-center">
              <label
                htmlFor="kadrovskiBroj"
                className="w-32 text-sm font-medium text-gray-700"
              >
                Kadrovski Broj:
              </label>
              <input
                type="text"
                id="kadrovskiBroj"
                name="kadrovskiBroj"
                placeholder="123"
                className="ml-4 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <label
                htmlFor="email"
                className="w-32 text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                className="ml-4 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <label
                htmlFor="password"
                className="w-32 text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="ml-4 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              />
            </div>
          </li>
        </ul>
        <button
          type="submit"
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end"
        >
          Login
        </button>
      </div>
    </div>
  );
}
