import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./SignUp.css";
// import { FiEyeOff } from 'react-icons/fi';

const ModalSignUp = (props) => {
  const { setSignUpModal, signUpModal } = props;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="bg-white border w-11/12 md:w-9/12 mx-auto lg:w-2/5 h-4/6 flex items-center  shadow-md p-7 overflow-y-scroll">
        <div className="w-full">
          <div className="text-right">
            <button onClick={() => setSignUpModal(false)}>X</button>
          </div>
          <h2 className="text-[23px] font-semibold mb-2"> Create an Account</h2>
          <p className="text-gray-500 text-[14px] mb-7">
            Fill in the fields below to create a Barnes and Noble.com account.
            If you already have an account, please
            <Link to="/" className="underline text-xs">
              Sign In
            </Link>
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-4 mb-7"
          >
            <div className="relative group ease-in duration-300">
              <label
                htmlFor="name"
                className="absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black"
              >
                First Name
              </label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                name="firstName"
                className=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black "
              />
            </div>
            {errors.firstName && (
              <p className="text-gray-50 text-center">
                First Name is required.
              </p>
            )}
            <div className="relative group ease-in duration-300">
              <label
                htmlFor="name"
                className="absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black"
              >
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                name="lastName"
                className=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black "
              />
            </div>
            {errors.lastName && (
              <p className="text-gray-50 text-center">Last Name is required.</p>
            )}
            <div className="relative group ease-in duration-300">
              <label
                htmlFor="name"
                className="absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
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
                className=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black "
              />
            </div>
            {errors.email?.type === "pattern" && (
              <p className="text-gray-50 text-center">{errors.email.message}</p>
            )}
            {errors.email?.type === "required" && (
              <p className="text-gray-50 text-center">{errors.email.message}</p>
            )}
            <div className="relative group ease-in duration-300">
              <label
                htmlFor="name"
                className="absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black"
              >
                Confirm-Email
              </label>
              <input
                name="email"
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
                className=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black "
              />
            </div>
            {errors.email?.type === "pattern" && (
              <p className="text-gray-50 text-center">{errors.email.message}</p>
            )}
            {errors.email?.type === "required" && (
              <p className="text-gray-50 text-center">{errors.email.message}</p>
            )}
            <div className="relative group ease-in duration-300">
              <label
                htmlFor="name"
                className="absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
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
                className="input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50"
              />
            </div>
            {errors.password?.type === "minLength" && (
              <p className="text-gray-50 text-center">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "required" && (
              <p className="text-gray-50 text-center">
                {errors.password.message}
              </p>
            )}
            <div className="relative group ease-in duration-300">
              <label
                htmlFor="name"
                className="absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black"
              >
                confirm Password
              </label>
              <input
                type="password"
                name="password"
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
                className=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50  "
              />
            </div>
            {errors.password?.type === "minLength" && (
              <p className="text-gray-50 text-center">
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "required" && (
              <p className="text-gray-50 text-center">
                {errors.password.message}
              </p>
            )}
            <button className="create-account-btn py-[.69rem] px-14 text-white hover:text-opacity-50">
              Create an Account
            </button>
            <Link className="hover:underline px-7 text=[12px]" to="/">
              Cancel
            </Link>
          </form>
          <hr className="border border-5 border-gray-300" />
          <p className="text-[14px] mt-5 mb-6">
            By signing in or creating an account you are agreeing to our{" "}
            <Link to="/" className="text-xs underline">
              Terms of Use
            </Link>
            and our
            <Link to="/" className="text-xs underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalSignUp;
