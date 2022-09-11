import React from 'react'
import { Link } from 'react-router-dom';
import'./SignUp.css'
// import { FiEyeOff } from 'react-icons/fi';

const ModalSignUp = (props) => {
    const {setSignUpModal} =props;
  return (
    <div>
        
        
      <div className="bg-white border w-11/12 md:w-9/12 mx-auto lg:w-2/5 h-4/6 flex items-center  shadow-md p-7 overflow-y-scroll">
       
    
       <div className="w-full">
           <div className="text-right">
           <button onClick={()=>(setSignUpModal(false))}>X</button>
           </div>
       <h2 className="text-[23px] font-semibold mb-2"> Create an Account</h2>
       <p className='text-gray-500 text-[14px] mb-7'>Fill in the fields below to create a Barnes and Noble.com account.
        If you already have an account, please <Link to='/' className='underline text-xs'>Sign In</Link>  </p>
   
       {/* ............ 
            /////// signIn-modal-form/////
       */}
   
          <form className="w-full space-y-4 mb-7">

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
         <input  type="password" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50" />
         </div>


       {/* ............ 
            /////// confirm Password  /////
       */}
         <div className="relative group ease-in duration-300">
           <label htmlFor="name" className='absolute text-center group-hover:top-[-5px] top-3 left-5 text-[14px] text-black'>confirm Password </label>
         <input  type="password" class=" input w-full input-bordered focus:outline-none focus:border focus:border-black bg-gray-50  " />
         
         </div>

     
            {/* ----- signIn-modal-submit-btn------ */}
        
            <button className='create-account-btn py-[.69rem] px-14 text-white hover:text-opacity-50'>Create an Acount</button>
            <Link className='hover:underline px-7 text=[12px]' to='/'> Cancle</Link>
          
          </form>
          <hr  className='border border-5 border-gray-300'/>
        
          <p className='text-[14px] mt-5 mb-6'>By signing in or creating an account you are agreeing to our <Link to='/' className='text-xs underline'>Terms of Use</Link> and our  <Link to='/' className='text-xs underline'>Privacy Policy</Link> </p>
       </div>
       
        </div>
   
    
        
        </div>
  )
}

export default ModalSignUp