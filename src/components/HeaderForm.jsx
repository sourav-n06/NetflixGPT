import React, { useState } from 'react'

const HeaderForm = () => {

  const [SignDetails, setSignDetails] = useState(true);

   const handleSignDetails = ()=>{
      setSignDetails(!SignDetails);
  }

  return (
    <div className ="flex flex-col justify-center items-center ">
        <form className="flex flex-col w-4/12 justify-center items-center bg-black rounded-md bg-opacity-80">
            <h2 className='text-white text-3xl p-8 font-bold'> {SignDetails === true? "Sign Up" :"Sign In"}</h2>

            {SignDetails && <input className=" font-semibold px-16 py-4 m-2 rounded-md bg-opacity-80  bg-slate-700  bg-opacity-70 text-slate-300" type='text' placeholder='Full name'></input>}

            <input className=" font-semibold px-16 py-4 m-2 rounded-md bg-slate-700  bg-opacity-70 text-slate-300" type='text' placeholder='Email address'></input>

            <input className=" font-semibold px-16 py-4 m-2 rounded-md  bg-slate-700  bg-opacity-70 text-slate-300" type='password' 
            placeholder='Password'></input>

            <button className="px-32 py-2 m-4 text-white bg-red-600 rounded-md font-bold">{SignDetails === true ? "Sign Up": "Sign In"}</button>

            {!SignDetails && <p className='text-white cursor-pointer underline hover:underline-offset-4 from-neutral-200'>Forgot password?</p>
}
            <div className="px-24 py-14 m-2 ">

                <p className='text-white'>{!SignDetails === true ? "New to Netflix ?" : "Already Registered ?"} <span className="underline hover:underline-offset-4 from-neutral-200 cursor-pointer" onClick={()=>handleSignDetails()}>{!SignDetails === true ? "Sign Up now." : "Sign In Now"}</span></p>


                <p className=' text-slate-300 font-light py-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className=" text-blue-700 underline hover:underline-offset-4 from-neutral-200 cursor-pointer">Learn more.</span></p>
           </div>
        </form>
        
    </div>
  )
}

export default HeaderForm;
