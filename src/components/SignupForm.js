 import React from 'react'
 import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
 import  { useState } from 'react';
 import {toast} from "react-hot-toast"
  import {useNavigate} from 'react-router-dom';


  const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
    const [formData , setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""

    })

    const [showPassword , setShowPassword]=useState(false);

    function changeHandler(event) {

        setFormData ((prevData)=>(
            {
              ...prevData,
            [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword ) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account");
        console.log(accountData);

        navigate("/dasboard");
    }
   return (
     <div>

        {/* student - instructor tab */}
     <div>

        <button>
            Student
        </button>

        <button>
            Instructor
        </button>

     </div>

<form onSubmit={submitHandler}>
    {/*first name and last name only this div */}
        <div>
      <label>
         <p>First Name <sup>*</sup></p>
         <input
             required
             type="text"
             placeholder="Enter your first name"
             name="firstName"
            onChange={changeHandler}
            value={FormData.firstName}
          />
        </label>

        <label>
           <p> Last Name <sup>*</sup></p>
          <input
             required
             type="text"
             placeholder="Enter your last name"
            name="lastname"
            onChange={changeHandler}
            value={FormData.lastname}
           />
          </label>
        </div>
   
    {/*email add */}
        <label>
           <p> Email Address <sup>*</sup></p>
          <input
             required
             type="email"
             placeholder="Enter your email address"
            name="email"
            onChange={changeHandler}
            value={FormData.email}
           />
          </label>
 
     {/*create password and confirm password*/}

     <div>
     <label>
           <p> Create Password <sup>*</sup></p>
          <input
             required
             type={showPassword ? ("text") :("Password")}
             placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
            value={FormData.password}
           />

             <span onClick={()=> setShowPassword((prev)=> !prev) }>
             {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
          </label>


          <label>
           <p> Confirm Password <sup>*</sup></p>
          <input
             required
             type={showPassword ? ("text") :("password")}
             placeholder="Confirm Password"
            name="confirmPassword"
            onChange={changeHandler}
            value={FormData.confirmPassword}
           />

             <span onClick={()=> setShowPassword((prev)=> !prev) }>
             {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
          </label>
        </div>

    <button>
        Create Account
    </button>


   </form>
   
    </div>
   )
 }
 
 export default SignupForm