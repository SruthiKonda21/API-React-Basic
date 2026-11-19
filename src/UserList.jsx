import { useEffect, useState } from 'react'
function UserList(){
    let[data,setData]=useState([])
    
        async function getData(){
          let response = await fetch("http://localhost:3000/users")
    
          response=await response.json()
    
          // console.log(response)
    
          setData(response)
        
          // console.log(data)
        }
          useEffect(()=>{
            getData()
          },[])
    
          return(
          <>
          <h1>Hello from app</h1>
          
          
          <ul className='userHead'>
            <li><h1>User ID </h1></li>
            <li><h1>User Name</h1></li>
            <li><h1>User Age </h1></li>
            <li><h1>Action</h1></li>
            </ul>
            {
            data.map((user)=>(
            <ul className='userlist'>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.age}</li>
                <li><button>Delete</button></li>
                <li><button>Edit</button></li>
                </ul>
                ))
                }
                </>
                )
            }
export default UserList;