"use client";
import React from "react";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const data ={name,email,password}
    console.log("form submitted",data);
  };
  //mongodb admin pass = VW7tdwDWEaMCZPka
  return (
    <div className="flex items-center justify-center min-h-screen ">
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
