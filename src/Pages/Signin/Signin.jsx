import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./Signin.css";

const Signin = () => {
  const [err, setErr] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    axios
      .post("http://localhost:5000/api/v1/login", { email, password })
      .then((user) => {
        localStorage.setItem("token", user.data.token);

        console.log(user);
        console.log("user is successfully login!");
        // navigate("/profile");
      })
      .catch((error) => {
        setErr(error.response.data.message);
        console.log(error.response.data)
        // navigate("/login");
      });
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white border w-11/12 md:w-9/12 mx-auto lg:w-2/5 h-max flex items-center shadow-md p-7">
        <div className="w-full">
          <h2 className="text-[23px] font-semibold mb-5">
            Sign in or Create an Account
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-6 mb-6"
          >
            <div className="inputGroup">
              <input
                type="email"
                name="email"
                required
                {...register("email", {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />

              <label htmlFor="email">Email Address</label>
            </div>

            {errors.email?.type === "pattern" && (
              <p className="text-black text-center">{errors.email.message}</p>
            )}
            {errors.email?.type === "required" && (
              <p className="text-black text-center">{errors.email.message}</p>
            )}

            <div className="inputGroup">
              <input
                type="password"
                name="password"
                required
                {...register("password", { required: true })}
              />

              <label htmlFor="password">Password</label>
            </div>

            {err ? <p>{err}</p> : ""}

            <input
              type="submit"
              className="secure-signIn-btn py-[.69rem] w-full text-white rounded-sm"
              value="Secure Sign In"
            />
          </form>

          <div className="checkbox-forgot flex justify-between mb-6">
            <div className="checkbox-part flex justify-center">
              <input
                id="checkbox"
                type="checkbox"
                className="p-2 mr-1 text-xl "
              />
              <label htmlFor="checkbox" className=" text-[14px] checkbox-text">
                Remember me
              </label>
            </div>

            <button className="text-[14px] checkbox-text">
              Forgot Your password?
            </button>
          </div>

          <button
            type="submit"
            className=" py-[.69rem] w-full text-black outline-1 border border-black hover:bg-slate-200 mb-6"
          >
            Create an Account
          </button>

          <p className="text-[14px] text-center mb-12">
            By signing in you are agreeing to our
            <Link to="/" className="text-xs underline mx-1">
              Terms of Use
            </Link>
            and our
            <Link to="/" className="text-xs underline mx-1">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
