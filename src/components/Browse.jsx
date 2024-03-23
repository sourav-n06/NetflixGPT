import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useNavigate } from "react-router-dom"
const Browse = () => {


  const navigate = useNavigate();
  const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
      }).catch((error) => {
        // An error happened.
      });

      console.log('Sign out ');
  }


  useNowPlayingMovies();

  return (
    <div>
        <div className=" ">
          <div className="  w-screen absolute z-10">
              <div className="bg-gradient-to-b from-neutral-900 px-20 py-2 flex justify-between">
                <img className="w-40  " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>


                <div className="flex items-center ">

                    <img className= "w-6 cursor-pointer" src="https://www.svgrepo.com/show/449907/sign-out.svg" onClick={handleSignOut} />
                    <button className=" text-white font-semibold m-2  cursor-pointer text-sm " onClick={handleSignOut}>(Sign out)</button> 
                </div>
              </div>
            </div>
      </div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;
