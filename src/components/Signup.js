import { useState,useEffect } from "react";
import InputField from "./InputField";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function SignUp(){
    localStorage.clear();

     function chg(e){
        e.preventDefault()
    }

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password:"",
        cpassword:"",
        Address:""
    })
    localStorage.setItem('user', JSON.stringify(userData));

    const [errors, setErrors] = useState({
        nameError: "", 
        emailError: "",
        passError: "",
        cpassError: "",
        addressError: ""
    })

    const changeData = (e) => {
        console.log(e.target.value)
        if(e.target.name === "name"){
            setUserData({
                ...userData,
                name: e.target.value 
            })
            setErrors({
                ...errors, 
                nameError: e.target.value.length === 0 ? "this Field Is Required" : e.target.value.length < 3 && "Please Insert a Valid Name,not less that 3 letters"
            })

        }else if(e.target.name==="email"){
            setUserData({
                ...userData,
                email: e.target.value
            })
            setErrors({
                ...errors,
                emailError: e.target.value.length === 0 ? "This Field is required" :!e.target.validity.valid && "Please enter a vaild email"
            })
        }

        else if(e.target.name==="pass"){
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErrors({
                ...errors,
                passError: e.target.value.length === 0 ? "This Field is required" :!e.target.validity.valid && "Please enter a vaild password"
            })
        }
        else if(e.target.name==="cpass"){
            setUserData({
                ...userData,
                cpassword: e.target.value
            })
            setErrors({
                ...errors,
                cpassError: e.target.value.length === 0 ? "This Field is required" :e.target.value !== userData.password && "Password and re-type should match"
            })

        }
        else if(e.target.name==="addr"){
            setUserData({
                ...userData,
                Address: e.target.value
            })
            setErrors({
                ...errors,
                addressError: e.target.value.length === 0 && "This Field is required" 
            })
        }
    }
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(userData));
          }, [userData]);
    const submitData = (e) => {
        // e.preventDefault();
        
        console.log("data is Submited")
    }

    return(
        <>
         

            <h1> Sign Up </h1>
            <form onSubmit={(e) => submitData(e)}>
                <InputField for="exampleInputEmail1" label="E-mail" name="email" type="email" err={errors.emailError} val={userData.email} chg={(e)=>changeData(e)} pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"/>
                <InputField for="name" label="Name" name="name" type="text" err={errors.nameError} val={userData.name} chg={(e)=>changeData(e)} pattern="/^[a-z ,.'-]+$/i" />
                <InputField for="addr" label="Address" name="addr" type="text" err={errors.addressError} val={userData.Address} chg={(e)=>changeData(e)} />
                <InputField for="pass" label="Password" name="pass" type="password" err={errors.passError} val={userData.password} chg={(e)=>changeData(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                <InputField for="cpass" label="Password Re-type" name="cpass" type="password" err={errors.cpassError} val={userData.cpassword} chg={(e)=>changeData(e)} />
               
                {/* disabled = true or false  */}
                {/* {errors.positionError || errors.nameError }  == true*/}
                <button disabled = {errors.emailError || errors.nameError ||errors.passError|| errors.cpassError
                ||userData.name===''||userData.cpassword===''||userData.password===''||userData.email===''}
                 type="submit" className="btn btn-primary" onClick={(e)=>chg(e)}>Submit
                    {/* <Link to='/welcome' >Register</Link> */}
                    </button>
            </form>
        
        </>
    )

}

