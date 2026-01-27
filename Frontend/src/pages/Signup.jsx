import {Heading} from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import {Button} from "../components/Button"
import {BottomWarning} from "../components/BottomWarning"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export const Signup = ()=>{
    const [firstname , setFirstname] = useState("");
    const [lastname , setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center ">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading Lable={"Sign Up"}/>
                <SubHeading Lable={"Enter your Details to Create Account"}/>
                <InputBox onChange= {(e)=>{
                    setFirstname(e.target.value);
                }}Lable={"Firstname"} Placeholder={"Shreyansh"}/>
                <InputBox onChange={e => {
                    setLastname(e.target.value);
                }} Lable={"Lastname"} Placeholder={"Rai"}/>
                <InputBox onChange={ e =>{
                    setUsername(e.target.value);
                }} Lable={"Email"} Placeholder={"shreyanshtalks@gmail.com"}/>
                <InputBox onChange={ e =>{
                    setPassword(e.target.value);
                }} Lable={"Password"} Placeholder={"123456"}/>
                <div className="pt-1">
                <Button onClick={ async()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                        username ,
                        firstname,
                        lastname,
                        password
                    })
                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard")


                }
                } Label={"Signup"}/></div>
                <div>
                    <BottomWarning Lable={"Already Have an account?"} Buttontext = {"Signin"} To={"/signin"}/>
                </div>
                </div>
            </div>
        </div>
    )
}
