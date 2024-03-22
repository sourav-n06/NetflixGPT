import React from 'react'
import Header from './Header'
import HeaderForm from './HeaderForm'
import ManageUser from './ManageUser'

const Login = () => {
  ManageUser();
  return (
    <div className= "w-screen h-screen overflow-x-hidden pb-5" style={{backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg")`}}>
      <Header/>
      <HeaderForm/>
    </div>
    
  )
}

export default Login;
