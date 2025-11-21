"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      return alert(`Failed to add: ${errorData.error || "Unknown error"}`);
    } else {
      router.push("/");
      alert("Successfully fetch");
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

            <div className=" relative">
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type={showPassword ? "password" : "taxt"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute right-3 top-9 transform text-gray-600"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c1.99 0 3.862-.54 5.468-1.48M21.02 8.223A10.45 10.45 0 0 1 22.066 12c-1.292 4.338-5.31 7.5-10.066 7.5-1.38 0-2.687-.252-3.895-.713m7.94-12.512A9.967 9.967 0 0 0 12 4.5c-4.756 0-8.774 3.162-10.066 7.5a10.52 10.52 0 0 0 1.637 3.044M6.455 6.455l11.09 11.09"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="grid gap-4 mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 shadow-lg cursor-pointer"
              >
                Login
              </button>

              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 shadow-lg cursor-pointer"
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
