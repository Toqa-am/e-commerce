import { Link } from "react-router-dom/cjs/react-router-dom.min";
import InputField from "./InputField"
import { useState,useEffect } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signn } from "../Store/action";



export default function Signin(){
    const user = JSON.parse(localStorage.getItem('user'));
    const signedIn = JSON.parse(localStorage.getItem('signed'));
    const dispatcher=useDispatch()
    const signed=useSelector((state)=>state.signed)
    
    const [userData, setUserData] = useState({
        email: "",
        password:""
    })
    localStorage.setItem('signed', JSON.stringify(userData));

    const [errors, setErrors] = useState({
        emailError: "",
        passError: "",
    })
    
    const changeData = (e) => {
        console.log(e.target.value)
        if(e.target.name==="email"){
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
       
    
        
    }
    useEffect(() => {
        localStorage.setItem('signed', JSON.stringify(userData));
          }, [userData]);

    

    const submitData = (e) => {
        e.preventDefault();
        if(signedIn.email===user.email && signedIn.password===user.password){
            dispatcher(signn(1))
            console.log(signed)

            // setUserData({
            //     ...userData,
            //     signed: "1"
            // })
            

        }



    }
    console.log(signed)
    
    
    return(
        <>
            <div className={" "+ (signed===1 ? "invisible":"visible")}>
                <InputField for="exampleInputEmail1" label="E-mail" name="email" type="email" err={errors.emailError} val={userData.email} chg={(e)=>changeData(e)} pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"/>
                <InputField for="pass" label="Password" name="pass" type="password" err={errors.passError} val={userData.password} chg={(e)=>changeData(e)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                <button disabled = {errors.emailError || errors.nameError ||errors.passError|| errors.cpassError
                ||userData.name===''||userData.cpassword===''||userData.password===''||userData.email===''}
                 type="submit" className="btn btn-primary" onClick={(e)=>{submitData(e);}}> Sign in
                    </button>

            </div>

            <div className={" "+ (signed===0 ? "invisible":"visible")}>
                <h2>Welcome, Now you can shop freely!
                    <Link to="/products">
                        Click here to view products
                    </Link>
                </h2>
            </div>
        </>


    )
}