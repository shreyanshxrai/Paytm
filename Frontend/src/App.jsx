import {BrowserRouter , Link , Routes , Route} from "react-router-dom"
import './App.css'
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {SendMoney} from "./pages/SendMoney"
import {Dashboard} from "./pages/Dashboard"

function App() {
const token = localStorage.getItem("token");
  return <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {token?<Dashboard/>:<Signup/>}/>
          <Route path="/signin" element = {<Signin/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/dashboard" element = {token?<Dashboard/>:<Signup/>}/>
          <Route path="/send" element = {token?<SendMoney/>:<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
}

export default App
