"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { useRouter } from "next/navigation";
import React from "react";

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const result = await registerUser({ name, email, password });
    console.log("form submitted", result);

    if (result?._id) {
      router?.push("/products");
    } else {
      alert(result.message || "registration failed!");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-116px)]">
      <div className="p-6 rounded shadow-md w-80 border">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
