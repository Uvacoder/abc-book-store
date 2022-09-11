import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

const SignInModal = (props) => {
    const {open,setModalOpen} = props;
    
    console.log(open);
  return (
    <div className={`${open? 'block':'hidden'}`}>
        {/* <div className="h-screen w-full bg-black/5  absolute inset-0 z-10"></div> */}

             {/* ----- signIn-modal-body------ */}

      <div className="bg-white border w-11/12 md:w-9/12 mx-auto lg:w-2/5 h-max flex items-center  shadow-md p-7">
       
    
    <div className="w-full">
        <div className="text-right">
        <button onClick={()=>(setModalOpen(false))}>X</button>
        </div>
    <h2 className="text-[23px] font-semibold mb-5">Sign in or Create an Account</h2>

    {/* ----- signIn-modal-form------ */}

       <form className="w-full space-y-5 mb-10">
      <div className="relative group ease-in duration-300">
        <label htmlFor="email" className='absolute text-center group-hover:top-[-6px] top-3 left-5 text-[14px] text-black'> Email Address</label>
      <input  type="email" class=" input w-full input-bordered focus:outline-none bg-gray-50 placeholder-black " />
      </div>

        <div className="relative group ease-in duration-300">
        <label htmlFor="email" className='absolute text-center group-hover:top-[-6px] top-3 left-5 text-[14px] text-black'> Password</label>
      <input  type="password" placeholder="Password" class=" input w-full input-bordered focus:outline-none bg-gray-50 placeholder-black " />
      </div>


       <div className="checkbox-forgot flex justify-between">
       <div className="checkbox-part flex justify-center">
         <input id="checkbox" type="checkbox" className="p-2 mr-1 text-xl " />
         <label htmlFor="checkbox" className=" text-[14px] checkbox-text"> Remember me</label>
       </div>
       <div className="forgot">
         <button className="text-[14px] checkbox-text">Forgot Your password?</button>
       </div>
       </div>

         {/* ----- signIn-modal-submit-btn------ */}
     
     <div className="submit-btn w-full">
     <button type='submit' className='secure-signIn-btn py-[.69rem] w-full text-white '>Secure Sign In</button>
     </div>
     
     <div className="submit-btn w-full">
     <button type='submit' className=' py-[.69rem] w-full text-black outline-1 border border-black hover:bg-slate-200'>Create an Account</button>
     </div>

       </form>
       <p className='text-[14px] text-center mb-12'>By signing in you are agreeing to our <Link to='/' className='text-xs underline'>Terms of Use</Link> and our  <Link to='/' className='text-xs underline'>Privacy Policy</Link> </p>
    </div>
    
     </div>

 


    </div>
  )
}

export default SignInModal