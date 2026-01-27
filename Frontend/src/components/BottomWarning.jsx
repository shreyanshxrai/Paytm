import { Link } from "react-router-dom"
export function BottomWarning({Lable , Buttontext , To}){
    return (
        <div className="text-slate-500 text-md pt-1 pb-4 px-4">
           <div>{Lable}</div> 
          
           <Link className="pointer underline pl-1 cursor-pointer" to={To}>{Buttontext}</Link>
            
        </div>
    )
}