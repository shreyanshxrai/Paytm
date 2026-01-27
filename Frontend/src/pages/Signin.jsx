import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export const Signin = () => {
    const navigate = useNavigate();
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading Lable={"Sign in"} />
        <SubHeading Lable={"Enter your credentials to access your account"} />
        <InputBox onChange={(e)=>{
          setUsername(e.target.value);
        }}
        Placeholder="shreyanshtalks@gmail.com" Lable={"Email"} />
        <InputBox onChange={(e)=>{
          setPassword(e.target.value);
        }} 
         Placeholder="123456" Lable={"Password"} />
        <div className="pt-4">
          <Button onClick={async()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username ,
                        password
                    })
                    localStorage.setItem("token", response.data.token);
                    navigate("/dashboard");
          }} Label={"Sign in"} />
        </div>
        <BottomWarning Lable={"Don't have an account?"} Buttontext={"Signup"} To={"/signup"} />
      </div>
    </div>
  </div>
}