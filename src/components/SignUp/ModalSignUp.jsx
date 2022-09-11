import React from 'react'
import { Link } from 'react-router-dom';
import'./SignUp.css'

const ModalSignUp = (props) => {
    const {setSignUpModal,signUpModal} =props;
  return (
    <div>
        
        
      <div className="bg-white border w-11/12 md:w-9/12 mx-auto lg:w-2/5 h-4/6 flex items-center  shadow-md p-7 overflow-y-scroll">
       
    
       <div className="w-full">
           <div className="text-right">
           <button onClick={()=>(setSignUpModal(false))}>X</button>
           </div>
       <h2 className="text-[23px] font-semibold mb-5"> Create an Account</h2>
   
       {/* ............ 
            /////// signIn-modal-form/////
       */}
   
          <form className="w-full space-y-5 mb-10">

              {/* ............ 
            /////// First-Name  /////
       */}

         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>First Name</label>
         <input  type="text" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black " />
         </div>
   
       {/* ............ 
            /////// Last-Name  /////
       */}
         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>Last Name</label>
         <input  type="text" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black " />
         </div>

       {/* ............ 
            /////// Email  /////
       */}
         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>Email</label>
         <input  type="email" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black " />
         </div>
   

       {/* ............ 
            /////// confirm-Email  /////
       */}
         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>Confirm-Email</label>
         <input  type="email" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black " />
         </div>

       {/* ............ 
            /////// Password  /////
       */}
         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>Password</label>
         <input  type="password" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black " />
         </div>

       {/* ............ 
            /////// confirm Password  /////
       */}
         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>confirm Password</label>
         <input  type="password" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black " />
         </div>

       {/* ............ 
            /////// security -quiestion  /////
       */}
         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>Security Quiestion</label>
         <input  type="select" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black " />
         
         </div>
       {/* ............ 
            /////// security -Answer  /////
       */}
         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>Security Answer</label>
         <input  type="text" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50 placeholder-black " />
         
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

export default ModalSignUp