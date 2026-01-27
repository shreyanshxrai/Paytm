import { useEffect, useState } from "react"
import {AppBar} from "../components/AppBar"
import {Balance} from "../components/Balance"
import {Users} from "../components/Users"
import { Button } from "../components/Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const  Dashboard = ()=>{
    const navigate = useNavigate();
    const [balance, setBalance] = useState("");
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/accounts/balance",
            { headers :
                { Authorization : "Bearer "+localStorage.getItem("token")}
            }
        ).then((response)=>{setBalance(response.data.balance)})
    },[]);
    return <div>
        <div>
            <AppBar/>
        </div>
        <div className="m-8">
          <Balance value={balance}/>  
          <Users/>
          <Button Label={"logout"} onClick={()=>{
            localStorage.removeItem("token");
            alert("Logged out successfully.");
            navigate("/signup");
          }}/>
        </div>
    </div>
}
