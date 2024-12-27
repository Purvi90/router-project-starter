 import React from 'react'
 
 const SignupForm = () => {

    const [formData , setFormData]=useState({
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

<form>
    {/*first name and last name only this div */}
        <div>
      <label>
         <p>Fist Name <sup>*</sup></p>
         <input
             required
             type="text"
             placeholder="Enter your first name"
             name="firstname"
            onChange={changeHandler}
            value={FormData.firstname}
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
          </label>
     </div>

     <label>
        <button onClick={clickHandler}>
            Submit
        </button>
     </label>








 
   </form>
   
    </div>
   )
 }
 
 export default SignupForm