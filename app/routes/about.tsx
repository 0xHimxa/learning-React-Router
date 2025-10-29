


// you have to use function and expor default 

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserName } from "~/redux/slice";

export default  function About() {
  
  const name = useSelector((state:any)=> state.user.userName)
const dispatch = useDispatch();
const [newName , setnewName]= useState('nabil')

  return (
    <>
    <div>welocme to about page</div>
    <input type="text"  style={{background: 'red'}} onChange={(e)=> setnewName(e.target.value)}/>
    <button onClick={()=> dispatch(setUserName(newName))}> submit</button>
    

   <h1> {name}</h1>
    </>
  )
}

