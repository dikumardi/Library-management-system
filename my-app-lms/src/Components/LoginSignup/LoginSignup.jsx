import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

const [action,setAction] = useState("Login");

  return (
    <div className='container'>
         <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>

    // <div className='container'>
    //     <div className="header">
    //         <div className="text">{action}</div>
    //         <div className="underline"></div>
    //     </div>
    //   <div className="inputs">
        
    //     {action==="Login"?<div></div>:<div className="input">
    //         <img src={user_icon} alt="" />
    //         <input type="text" placeholder="Name" />
    //     </div>}
        
    //     <div className="input">
    //         <img src={email_icon} alt="" />
    //         <input type="email" placeholder="Email Id" />
    //     </div>
    //     <div className="input">
    //         <img src={password_icon} alt="" />
    //         <input type="password" placeholder="Password" />
    //     </div>
    //   </div>
    //   {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
      
    //   <div className="submit-container">
    //     <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    //     <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    //   </div>
    // </div>
  );
};

export default LoginSignup
