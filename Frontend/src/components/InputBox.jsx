export function InputBox({Lable , Placeholder , onChange}){
    return <div>
        <div className="text-sm text-left font-medium py-2">
            {Lable}
        </div>
      
         <input onChange={onChange} type="text" placeholder={Placeholder}  className=" w-full px-2 py-1 rounded border-slate-700"/>
    </div>
}