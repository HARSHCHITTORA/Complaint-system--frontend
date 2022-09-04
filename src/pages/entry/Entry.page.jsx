import React,{useState} from 'react'
import "./entry.style.css"
import Login from "../../components/login/Login.co"
import PasswordReset from '../../components/login/password.reset/Password.reset';

function Entry() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [Loadform,setLoadFOrm]=useState("login")

    const handleOnchange=e=>{
      const {name,value}=e.target

        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
        
            default:
                break;
        }
     
    }

    const handleonSubmit=e=>{
          e.preventDefault()
           
          if(!password || !email)
          {
           return alert("Fill the required field");
          }
          

          //Todo call api to submit the form
        //   console.log(email,password)
    }
    const handleonResetSubmit=e=>{
          e.preventDefault()
           
          if(!email)
          {
           return alert("Fill the required field");
          }
          

          //Todo call api to submit the form
        //   console.log(email,password)
    }

    const formSwitcher=formtype=>{
        setLoadFOrm(formtype)
    }
  return (

    <div className='page-entry bg-info'>
        <div className="jumbotron form-box ">
            {Loadform==="login" && (

            <Login 
            handleOnchange={handleOnchange} 
            handleonSubmit={handleonSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}/>
            
            )}
            
            {Loadform==="reset" && (

            <PasswordReset
            handleOnchange={handleOnchange} 
            // handleonSubmit={handleonSubmit}
                handleonResetSubmit={handleonResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
           />
            )}
            
            </div>

    </div>
  )
}

export default Entry