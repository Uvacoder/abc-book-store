import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import './Login.css'
import SignInModal from "./SignInModal";



const Login = () => {


  const [modalOpen,setModalOpen]=useState(false);
  // console.log(modalOpen,'login')

  return (
    <>
   

      {/* ----- signIn-modal-btn------ */}
   
   <button onClick={()=>(setModalOpen(true))}  className="py-[5px] px-12 signIn-btn text-white  block">Sign In</button>

   <SignInModal open={modalOpen} setModalOpen={setModalOpen}></SignInModal>



   
   

    </>
  );
};

export default Login;

