import "./login.css"
import React from 'react'

function Login() {
  return (
    <div className='login'>
      <div className='loginContainer'>
        <div className="left">
            <h1 className="text-2xl font-bold mb-3">Sign In</h1>
            <input className="email" placeholder="  Email"></input>
            <input className="password" placeholder="  Password"></input>
            <p className="forgot mt-3 text-xs cursor-pointer">forgot your password ?</p>
            <button className="btnSignIn text-black">Sign In</button>
        </div>
        <div className="right">
            <h1 className="text-2xl font-bold mb-3 text-black">Hello Friend!</h1>
            <p className="text">Enter Your personal details and start journey with us</p>
            <button className="btnSignUp ">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Login
