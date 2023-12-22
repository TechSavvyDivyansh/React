import React from 'react'

import './css/loginSignUp.css'

export default function loginSignUp() {
  return (
   <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="login-signup-fields">
             <input type="text" placeholder='Your name'/>
             <input type="email" placeholder='email address' />
             <input type="password" placeholder='password'/>
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already Have An Account? <span>Login Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By Continuing,I Agree to Use and Privacy Policy.</p>
          </div>
        </div>
   </div>
  )
}
