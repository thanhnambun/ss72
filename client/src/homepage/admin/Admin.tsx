import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/reducer/reducersUser'
import { User } from "../../interface/interface";

export default function Admin() {
    const getDate:any = useSelector(state =>state)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getUser())
    },[])
    const addUser:any = () =>{
        let newUser={
            name:"thảo"
        }
        dispatch(addUser(newUser))
    }    
    
  return (
    <div>Admin
       
        
        {getDate.count.users.map((user:User) => (<li key={user.id}>{user.name}</li>))}
        <button onClick={addUser}>add</button>
    </div>
  )
}
