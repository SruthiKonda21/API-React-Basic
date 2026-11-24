import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserAdd(){

    let url="http://localhost:3000/users"

    let[name,setName]=useState()
    let[age,setAge]=useState()

    let navigate=useNavigate()

     async function addUser(){

        try{
            let response=await axios.post(url,{
                name:name,
                age:age
            })
            alert("User Added Successfully")
            navigate("/Users")
            
            // console.log(response.data)
        }catch(error){
            console.log("Failed to add the user")
        }

    //     let response=await fetch(url,{
    //          method:'POST',
    //          body:JSON.stringify({name,age})
    //     })

    //     response=await response.json()
    //     if(response){
    //         alert("User Added Successfully")
    //         navigate("/Users")
    //     }else{
    //         alert("User not Added")
    //     }


    //     // console.log(response)
    //     // console.log(name)
    //     // console.log(age)
    }

    return(
        <>
        <div>
            <h1>Add User</h1>

             <p>Name:</p>
            <input type="text" placeholder='Enter Name' onChange={(event)=>setName(event.target.value)}/>

            <p>Age:</p>
            <input type="text" placeholder='Enter Age' onChange={(event)=>setAge(event.target.value)}/> <br /><br />

            <button onClick={addUser}>Add User</button>
        </div>
        </>
    )
}
export default UserAdd;