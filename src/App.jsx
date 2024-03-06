import './App.css'
import './Index.css'
import { useState, useEffect, useCallback} from 'react'

export default function App() {
  const [length,setLength] = useState(8)
  const [allowNum, setNum] = useState(false)
  const [allowSym, setSym] = useState(false)
  const [password, setPassword] = useState('')

  const passGenerator = useCallback(()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = '1234567890'
    let sym = '!@#$%^&*()[]_+=-'
    if(allowNum) str += num
    if(allowSym) str += sym
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,allowNum,allowSym,setPassword])
useEffect(()=>{
  passGenerator()
},[length,allowNum,allowSym,setPassword])
function copyFunction() {
  let copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}
  return (
    <div className="py-3 px-3 my-3">
    <div className="flex w-full items-center space-x-2 md:w-1/3 mb-5">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Password" value={password} id="myInput" readOnly></input>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" onClick={copyFunction}>
        Copy
      </button>
    </div>


<input id="default-range" type="range" min={6} max={30}  value={length} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={(e)=>{
  setLength(e.target.value)
}}/>
<label htmlFor="default-range" className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Length : {length}</label>
      
      <div className="flex items-center ps-4 mt-5 mb-2 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" defaultChecked={allowNum} onChange={(e)=>{
  setNum((prev)=> !prev)
    }}/>
    <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add Numbers</label>
</div>
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" defaultChecked={allowSym} onChange={(e)=>{
  setSym((prev)=> !prev)
    }}/>
    <label htmlFor="bordered-checkbox-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add Symbols</label>
</div>
    </div>
  )
}
