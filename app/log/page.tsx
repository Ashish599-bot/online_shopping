"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); 

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);

        alert("Login Successful!");
        router.push("/"); 
      } else {
        alert(data.error || "Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  function handleCancel() {
    router.push("/"); 
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md w-[400px] max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="/images.png"
            alt="Logo"
            className="w-[80px] h-[110px] object-contain"
          />
        </div>

        <div className="p-10 mb-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
              />
            </div>

            <div className="grid gap-4 mt-6 cursor-pointer">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 shadow-lg"
              >
                Login
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 shadow-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-gray-600 mb-8 text-sm">
          Welcome! Please login to your account to continue.
        </p>
      </div>
    </div>
  );
}
