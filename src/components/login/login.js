import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './login.css'


  function Login({nama}) {
    let [inputName, setInputName] = useState("")

    const handle = (event) => {
      // console.log(inputName)
      nama(inputName)
    }
    

    return (
      <div className="login">
        <div>
          <h1>LOGIN</h1><br />
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="name" class="form-control" placeholder="Enter email" value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" placeholder="Password" />
            </div><br />
            <button type="submit" class="btn btn-primary" onClick={handle}>
              
              <Link to="/homepage" style={{textDecoration:'inherit',color:'inherit'}} >Submit</Link>
                
            </button>
          </form>
        </div>
      </div>
    )
  }


export default Login