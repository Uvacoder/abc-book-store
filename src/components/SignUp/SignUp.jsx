import React from 'react'
import { useState } from 'react'
import ModalSignUp from './ModalSignUp'

const SignUp = () => {
    const [signUpModal,setSignUpModal]=useState(false)
  return (
    <>


        
    <h1>Hello Merge conflict</h1>
   
   <button onClick={()=>(setSignUpModal(true))}  className="py-[5px] underline text-black mx-auto">Create new Account</button>
  {
    signUpModal &&  <ModalSignUp signUpModal={signUpModal} setSignUpModal={setSignUpModal}></ModalSignUp>
  }

    </>
  )
}

export default SignUp