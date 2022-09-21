import React, { useState } from 'react';
import Signin from '../Signin/Signin';
import Signup from '../Singup/Signup';

const Register = () => {
const [isOpen,setIsoPen]=useState(true)
const handleRegister=()=>{
    setIsoPen(!isOpen)
   
    }

    return (
        <div>
            {isOpen&& <Signin handleRegister={handleRegister}/>}
            {!isOpen&& <Signup handleRegister={handleRegister}/>}
        </div>
    );
};

export default Register;