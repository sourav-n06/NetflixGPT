import React, { useRef, useState } from 'react'
import isValid from '../utils/isValid';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { useSelector} from "react-redux"
import { changeLang } from '../utils/configSlice';
import { langLogin } from '../utils/langConstant';


const HeaderForm = () => {

  const navigate = useNavigate();

  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey)
  
  const name = useRef("");
  const email = useRef(null);
  const password = useRef(null);

  const [ errMsg, setErrMsg] = useState(null);
  const [SignDetails, setSignDetails] = useState(true);
  const dispatch = useDispatch();
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

            updateProfile(user, {
              displayName: name.current.value , photoURL: ""
            }).then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({uid: uid,email: email, displayName: displayName}));
            }).catch((error) => {
              // An error occurred
            });
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

        <form className="w-[350px] flex flex-col sm:w-[475px] md:w-[475px] justify-center items-center bg-black rounded-md bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
            <h2 className='text-white text-3xl p-4 sm:p-6 md:p-8 lg:p-8 font-bold'>
              { SignDetails === true ? langLogin[langKey].signup :langLogin[langKey].signin}
              </h2>

            {SignDetails && <input ref={name} className=" font-semibold w-78 sm:w-80 md:w-80 px-4 py-4 m-2 rounded-md bg-opacity-70  bg-slate-700  text-slate-300" type='text' placeholder={langLogin[langKey].fullname}></input>}

            <input ref={email} className=" font-semibold w-78 sm:w-80 md:w-80 px-4 py-4 m-2 rounded-md bg-slate-700  bg-opacity-70 text-slate-300" type='text' placeholder={langLogin[langKey].email}></input>

            <input ref={password} className=" font-semibold w-78 sm:w-80 md:w-80 px-4 py-4 m-2 rounded-md  bg-slate-700  bg-opacity-70 text-slate-300" type='password' 
            placeholder={ SignDetails === true ? langLogin[langKey].passwordNew :langLogin[langKey].passwordOld}></input>

            <p className=" text-red-600 py-1 px-16 text-center font-bold">{errMsg}</p>

            <button className="w-[62%] sm:w-4/6 md:w-4/6 lg:w-4/6 py-3 m-4 text-white bg-red-600 hover:bg-red-700 
             box-border rounded-md font-bold" 
            onClick={()=>handleValidation()}>
              {SignDetails === true ?  langLogin[langKey].signup :langLogin[langKey].signin}</button>

            {!SignDetails && <p className='text-white cursor-pointer underline hover:underline-offset-4 from-neutral-200'>{langLogin[langKey].forgot }</p>
}
            <div className="px-16 pt-8 sm:pt-14 md:pt-14 sm:pb-8 md:pb-8 m-2 lg:px-24 lg:pt-6">

                <p className='text-white'>
                  {!SignDetails === true ? langLogin[langKey].netflixSttsNew : langLogin[langKey].netflixSttsOld} 
                  <span className="underline hover:underline-offset-4 from-neutral-200 cursor-pointer" onClick={()=>handleSignDetails()}>
                    {!SignDetails === true ? langLogin[langKey].netflixSttsNewLogin :
                     langLogin[langKey].netflixSttsOldLogin}</span></p>


                <p className=' text-slate-300 font-light py-2'>{langLogin[langKey].netflixTerm} <span className=" text-blue-700 underline hover:underline-offset-4 from-neutral-200 cursor-pointer">
                  {langLogin[langKey].netflixLearn}</span></p>
           </div>
        </form>
        
    </div>
  )
}

export default HeaderForm;
