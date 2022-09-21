import React, {useState } from "react";
import {useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Signup.css";
// import { useAddUser } from "../../hooks/useUserHook";
import axios from "axios";

const Signup = ({handleRegister}) => {
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, mobile, address, password } = data;

    axios
      .post("http://localhost:5000/api/v1/register", {
        name,
        email,
        mobile,
        address,
        password,
      })
      .then(() => {
        console.log("user is registered!");
        // navigate("/login");
      })
      .catch((error) => {
        setErr(error.response.data);

        // navigate("/register");
      });

    
  };

  return (
    <div >
      <div className="bg-white border  flex items-center  shadow-md p-7 overflow-y-scroll">
        <div className="w-full">
          <h2 className="text-[23px] font-semibold mb-2"> Create an Account</h2>

          <p className="text-gray-500 text-[14px] mb-7">
            Fill in the fields below to create a Barnes and Noble.com account.
            If you already have an account, please
            {/* <Link to="/" className="underline text-xs mx-1 text-teal-800">
              Sign In
            </Link> */}
            <button className="px-2 text-indigo-500 underline" onClick={handleRegister}>  sign in</button>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <div className="inputGroup">
              <input
                type="text"
                name="name"
                required
                {...register("name", { required: true })}
              />
              <label htmlFor="name">Full Name</label>
            </div>
            {errors.name && (
              <p className="text-gray-50 text-center">
                First Name is required.
              </p>
            )}

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

              <label htmlFor="email">Email</label>
            </div>
            {errors.email?.type === "pattern" && (
              <p className="text-gray-50 text-center">{errors.email.message}</p>
            )}
            {errors.email?.type === "required" && (
              <p className="text-gray-50 text-center">{errors.email.message}</p>
            )}

            <div className="inputGroup">
              <input
                type="text"
                required
                {...register("mobile", { required: true })}
                name="mobile"
              />
              <label htmlFor="mobile">Mobile</label>
            </div>

            <div className="inputGroup">
              <input
                type="text"
                required
                {...register("address", { required: true })}
                name="address"
              />
              <label htmlFor="address">Address</label>
            </div>

            <div className="inputGroup">
              <input
                type="password"
                name="password"
                required
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password min-length six characters",
                  },
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />

              <label htmlFor="password">Password</label>
            </div>
            {errors.password?.type === "minLength" && (
              <p className="text-gray-50 text-center">
                {errors.password.message}
              </p>
            )}

            {err ? <p className="text-black">{err}</p> : ""}

            <input
              type="submit"
              className="create-account-btn py-[.69rem] px-14 text-white hover:text-opacity-50 rounded-sm"
              value="Create an Account"
            />

            <Link className="hover:underline px-7 text=[12px]" to="/">
              Cancel
            </Link>
          </form>

          <hr className="border border-5 border-gray-300 my-5" />

          <hr className="border border-5 border-gray-300 my-5" />

          <p className="text-[14px] mt-5 mb-6">
            By signing in or creating an account you are agreeing to our{" "}
            <Link to="/" className="text-xs underline mr-1">
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

export default Signup;
