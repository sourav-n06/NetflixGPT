import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useNavigate } from "react-router-dom"
import useAddAllMovies from '../hooks/useAddAllMovies';
import { useDispatch} from "react-redux";
import { addGtpStatus } from '../utils/GptSlice';
import GptSearch from './GptSearch';
import {useSelector} from "react-redux"
import { NetflixImage, SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLang } from '../utils/configSlice';

const Browse = () => {

  const dispatch = useDispatch();

  const gptStts = useSelector((store) => store.gpt.GptOption);
  const navigate = useNavigate();
  const handleGPT = () => {
      dispatch(addGtpStatus());
  };


  const handleLang = (e) => {
    dispatch(changeLang(e.target.value));
  };


  const handleSignOut = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
      }).catch((error) => {
        // An error happened.
      });

      console.log('Sign out ');
  }

  useAddAllMovies();
  useNowPlayingMovies();

  return (
    <div className="">
        <div className="">
          <div className="  w-screen absolute z-10">
              <div className="bg-gradient-to-b from-black px-20 py-2 flex justify-between">
                <img className="w-40  " src={NetflixImage} alt="logo"/>
                
                <div className="flex items-center ">
                    {gptStts && <select className="mr-12 py-2 px-4 rounded-md bg-slate-800 text-white" onChange={handleLang}>
                        {
                          SUPPORTED_LANGUAGES.map((lang) => {
                            return <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
                          } )
                        }
                    </select>}

                    <button className=" bg-violet-600 text-white font-bold px-4 py-2 rounded-md mr-12" onClick={handleGPT}>
                      {gptStts ? "Home" : "GPT Search" }
                    </button>

                    <img className= "w-6 cursor-pointer" src="https://www.svgrepo.com/show/449907/sign-out.svg" onClick={handleSignOut} />
                    <button className=" text-white font-semibold m-2  cursor-pointer text-sm " onClick={handleSignOut}>(Sign out)</button> 
                </div>
              </div>
            </div>
      </div>
      {
        gptStts ?  <GptSearch/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      } 
    </div>
  )
}

export default Browse;
