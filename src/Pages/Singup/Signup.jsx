import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = ({handleRegister}) => {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const signupSubmit = (data) => {
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
        navigate("/");
        setOpen(false);
      })
      .catch((error) => {
        setErr(error.response.data);
        // navigate("/register");
        setOpen(true);
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

              <input
                type="submit"
                className="create-account-btn py-[.69rem] px-14 text-white hover:text-opacity-50 rounded-sm cursor-pointer"
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
      ) : (
        // Singnin form
        <div className="container mx-auto">
          <div className="bg-white border flex items-center shadow-md p-7">
            <div className="w-50">
              <h2 className="text-[23px] font-semibold mb-5">
                Sign in or Create an Account
              </h2>

              <forms className="w-full space-y-6 mb-6">
                <div className="inputGroup">
                  <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                  <label htmlFor="email">Email </label>
                </div>

                <div className="inputGroup">
                  <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                  <label htmlFor="password">Password</label>
                </div>

                {err ? <p>{err}</p> : ""}

                <button
                  type="submit"
                  className="secure-signIn-btn py-[.69rem] w-full bg-[#54575a] cursor-pointer text-white rounded-sm"
                  onClick={() => hadnleSignin()}
                >
                  Secure Signin
                </button>
              </forms>

              <div className="checkbox-forgot flex justify-between mb-6">
                <div className="checkbox-part flex justify-center">
                  <input
                    id="checkbox"
                    type="checkbox"
                    className="p-2 mr-1 text-xl "
                  />
                  <label
                    htmlFor="checkbox"
                    className=" text-[14px] checkbox-text"
                  >
                    Remember me
                  </label>
                </div>

                <button className="text-[14px] checkbox-text">
                  Forgot Your password?
                </button>
              </div>

              <button
                type="submit"
                className=" py-[.69rem] w-full text-black outline-1 border border-black hover:bg-slate-200 mb-6 cursor-pointer"
              >
                <label
                  htmlFor="my-modal-3"
                  className="cursor-pointer modal-button"
                  onClick={() => setOpen(true)}
                >
                  Create an Account
                </label>
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
      )}
    </>
  );
};

export default Signup;
