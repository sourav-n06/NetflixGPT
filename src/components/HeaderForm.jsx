import React, { useRef, useState } from 'react'
import isValid from '../utils/isValid';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../utils/firebase';

const HeaderForm = () => {

  const navigate = useNavigate();
  const name = useRef("");
  const email = useRef(null);
  const password = useRef(null);
  const [ errMsg, setErrMsg] = useState(null);
  const [SignDetails, setSignDetails] = useState(true);

   const handleSignDetails = ()=>{
      setSignDetails(!SignDetails);
  }

  const handleValidation = ()=>{
    console.log(email.current.value, password.current.value);
    const errMsg = isValid(email.current.value, password.current.value);
    setErrMsg(errMsg);

    if(errMsg) return;

    if(SignDetails) {

          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigate('/browse');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg("The user already exists❗");
        // ..
      });

    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate('/browse');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode+" "+errorMessage);

      });
    }

  } 



  return (
    <div className ="flex flex-col justify-center items-center ">
        <form className="flex flex-col w-2/6 justify-center items-center bg-black rounded-md bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
            <h2 className='text-white text-3xl p-8 font-bold'> {SignDetails === true? "Sign Up" :"Sign In"}</h2>

            {SignDetails && <input ref={name} className=" font-semibold px-16 py-4 m-2 rounded-md bg-opacity-80  bg-slate-700  bg-opacity-70 text-slate-300" type='text' placeholder='Full name'></input>}

            <input ref={email} className=" font-semibold px-16 py-4 m-2 rounded-md bg-slate-700  bg-opacity-70 text-slate-300" type='text' placeholder='Email address'></input>

            <input ref={password} className=" font-semibold px-16 py-4 m-2 rounded-md  bg-slate-700  bg-opacity-70 text-slate-300" type='password' 
            placeholder='Password'></input>

            <p className=" text-red-600 py-1 px-16 text-center font-bold">{errMsg}</p>

            <button className="px-32 py-2 m-4 text-white bg-red-600 rounded-md font-bold" 
            onClick={()=>handleValidation()}>
              {SignDetails === true ? "Sign Up": "Sign In"}</button>

            {!SignDetails && <p className='text-white cursor-pointer underline hover:underline-offset-4 from-neutral-200'>Forgot password?</p>
}
            <div className="px-24 pt-14 pb-8 m-2 ">

                <p className='text-white'>{!SignDetails === true ? "New to Netflix ?" : "Already Registered ?"} <span className="underline hover:underline-offset-4 from-neutral-200 cursor-pointer" onClick={()=>handleSignDetails()}>{!SignDetails === true ? "Sign Up now." : "Sign In Now"}</span></p>


                <p className=' text-slate-300 font-light py-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className=" text-blue-700 underline hover:underline-offset-4 from-neutral-200 cursor-pointer">Learn more.</span></p>
           </div>
        </form>
        
    </div>
  )
}

export default HeaderForm;
