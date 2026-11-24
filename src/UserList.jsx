import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

function UserList(){

  let navigate=useNavigate()

    let[data,setData]=useState([])

    let url="http://localhost:3000/users/"
    
        async function getData(){

          try{
            let response = await axios.get(url);
            setData(response.data)
          }catch (error){
            console.error("Got Error fetching data")
          }


          // let response = await fetch("http://localhost:3000/users")
    
          // response=await response.json()
    
          // // console.log(response)
    
          // setData(response)
        
          // // console.log(data)
        }
          useEffect(()=>{
            getData()
          },[])
    
          async function deleteData(id){

            try{
              let response=await axios.delete(url+id)
              alert("User deleted Successfully")
              navigate("/users")
            }catch(error){
              console.error("Failed to delete User")
            }
            // console.log("from delete function")
          //   console.log(id)
          //  let response= await fetch("http://localhost:3000/users/"+id,{
          //   method:'DELETE'
          //   })
          //   if(response){
          //     alert("user deleted successfully")
          //     navigate("/users")
          //   }
          }

          async function editUser(id){
            // console.log("hello update function")
            navigate("/update/"+id)
          }

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
            <ul key={user.id} className='userlist'>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.age}</li>
                <li><button onClick={()=>deleteData(user.id)}>Delete</button></li>
                <li><button onClick={()=>editUser(user.id)}>Edit</button></li>
                </ul>
                ))
                }
                </>
                )
            }
export default UserList;