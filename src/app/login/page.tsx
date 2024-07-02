"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:1234/api/v1/users/login`, {
        email,
        password,
      });      
      const token = response?.data?.data?.accessToken;
      console.log(token);
      
      if(token) {
        localStorage.setItem("token", token);
        router.push("/main/dashboard");
        toast.success("Login successful!");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error("Invalid credentials!")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-300">
      <div className="border-main p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border-main bg-inherit rounded-md shadow-sm outline-none focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              id="password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border-main bg-inherit rounded-md shadow-sm focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;