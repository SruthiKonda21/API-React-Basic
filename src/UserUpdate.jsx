import { useState, useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

export function UserUpdate() {
  

  let {id}=useParams()

  let [name,setName]=useState("")
  let [age,setAge]=useState("")

  let navigate=useNavigate()

  let url="http://localhost:3000/users/"

    async function getData(){

       try{
            let response = await axios.get(url+id);

            setName(response.data.name)
            setAge(response.data.age)
          }catch (error){
            console.error("Got Error fetching data")
          }
            // let response = await fetch("http://localhost:3000/users/"+id)
      
            // response=await response.json()

            // // console.log(response)
      
            //  setName(response.name)

            //  setAge(response.age)
          }
            useEffect(()=>{
              getData()
            },[])

            async function UpdateUser(){

              let response= await axios.put(url+id,{
                name:name,
                age:age
              })
               alert("User details Updated")

               navigate("/users")

              // let response=await fetch("http://localhost:3000/users/"+id,{
              //   method:'PUT',
              //   body:JSON.stringify({name,age})
              // })
              // if(response){
              //   alert("User details Updated")
              //   navigate("/users")
              // }
            }
  return (
    <>
      <h1>Hello from Update Component</h1>
    
    <div>
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter new name'/><br></br><br></br>

      <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder='Enter new age'/><br></br><br></br>

      <button onClick={UpdateUser}>Update user</button>
    </div>
    </>
  )
}

