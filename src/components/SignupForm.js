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
    const[accountType , setAccountType]=useState("student");

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
     <div
     className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'
     >

        <button
        
        onClick={()=>setAccountType("student")}>
            Student
        </button>

        <button
        onClick={()=>setAccountType("Instructor")}
        >
            Instructor
        </button>

     </div>

<form onSubmit={submitHandler}>
    {/*first name and last name only this div */}
        <div className='flex gap-x-6 mt-[20px]'>

      <label className='w-full '>
         <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
         <input
             required
             type="text"
             placeholder="Enter your first name"
             name="firstName"
            onChange={changeHandler}
            value={FormData.firstName}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[5px]'                                                                                                     
          />
        </label>

        <label className='w-full'>
           <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Last Name <sup className='text-pink-200'>*</sup></p>
          <input
             required
             type="text"
             placeholder="Enter your last name"
            name="lastname"
            onChange={changeHandler}
            value={FormData.lastname}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[5px]'                                                                                                                                            
          
           />
          </label>
        </div>
   
    {/*email add */}
    <div className='mt-[20px]'>

    <label className='w-full mt-[20px]'>
           <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Email Address <sup className='text-pink-200'>*</sup></p>
          <input
             required
             type="email"
             placeholder="Enter your email address"
            name="email"
            onChange={changeHandler}
            value={FormData.email}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[5px]'                                                                                                                                            
            
           />
          </label>
    </div>
   
     {/*create password and confirm password*/}

     <div className='w-full flex gap-x-6 mt-[20px]'>
     <label className='w-full relative'>
           <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Create Password <sup className='text-pink-200'>*</sup></p>
          <input
             required
             type={showPassword ? ("text") :("Password")}
             placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
            value={FormData.password}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[5px]' 
           />

             <span 
             className='absolute right-3 top-[33px] cursor-pointer'
             onClick={()=> setShowPassword((prev)=> !prev) }>
             {showPassword ?
              (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) :
              
              (<AiOutlineEye   fontSize={24} fill='#AFB2BF'/>)}
            </span>
          </label>


          <label className='w-full relative'>
           <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'> Confirm Password <sup className='text-pink-200'>*</sup></p>
          <input
             required
             type={showPassword ? ("text") :("password")}
             placeholder="Confirm Password"
            name="confirmPassword"
            onChange={changeHandler}
            value={FormData.confirmPassword}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[5px]'  
           />

             <span
             className='absolute right-3 top-[33px] cursor-pointer'
             onClick={()=> setShowPassword((prev)=> !prev) }>
             {showPassword ?

              (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>) :
              
              (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
            </span>
          </label>
        </div>

    <button className= 'w-full bg-yellow-50 rounded-[6px] font-medium text-richblack-900 px-[12px] py-[8px] mt-3'>
        Create Account
    </button>


   </form>
   
    </div>
   )
 }
 
 export default SignupForm