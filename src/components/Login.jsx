import React from 'react'
import Header from './Header'
import HeaderForm from './HeaderForm'
import ManageUser from './ManageUser'
import { BG_URl } from '../utils/constant'
const Login = () => {
  ManageUser();
  return (
    <div className= "w-screen h-screen bg-cover" style={{backgroundImage: `url(${BG_URl})`}}>
      <Header/>
      <HeaderForm/>
    </div>
    
  )
}

export default Login;
