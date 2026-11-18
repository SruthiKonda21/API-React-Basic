import React,{useState} from 'react';

export default function FetchMethod() {
    const[usersf,setUsersf]=useState([]);
    const[messagef,setMessagef]=useState("");
    const url="https://jsonplaceholder.typicode.com/users";

    //GET METHOD
    const getDataf=async()=>{
        try{
            const response=await fetch(url);
            if(!response.ok){
                throw new Error("Failed to fetch Data");
            }
            const data=await response.json();
            setUsersf(data);
            setMessagef("Data fetched successfully")
        }catch(error){
            setMessagef(error.messagef)
        }
    }
    //POST METHOD
    const postDataf=async()=>{
        try{
            const response=await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
            },
            body:JSON.stringify({
            name:"Sruthi",
            email:"sruthi@gmail.com"
            }),
        });
        const data= await response.json();
        setMessagef("New user added:" + data.name);
    }catch(error){
        setMessagef(error.messagef);
    }
};
//PUT METHOD
const putDataf =async()=>{
    try{
        const response=await fetch(url + "/1",{
            method:"PUT",
            headers:{
                "content-type":"application/json",
            },
            body: JSON.stringify({
                name:"sruthi konda",
                email:"sruthi@gmail.com"
            }),
        });
        const data = await response.json();
        setMessagef("User Completely updated:" +data.name);
    }catch(error){
        setMessagef(error.messagef);
    }
};
//PATCH METHOD
const patchDataf=async()=>{
    try{
        const response=await fetch(url + "/1",{
          method:"PATCH",
          headers:{
            "content-Type":"application/json",
          },
          body: JSON.stringify({
            name:"Updated Sruthi",
          }),
        });
        const data = await response.json();
        setMessagef("User partially updated:"+ data.name);
    }catch(error){
        setMessagef(error.messagef)
    }
};
//DELETE METHOD
const deleteDataf=async()=>{
    try{
        const response = await fetch(url +"/1",{
            method:"DELETE",
        });
        if(!response.ok){
            throw new Error("Delete failed");
        }
        setMessagef("User deleted successfully");
    }catch(error){
        setMessagef(error.messagef);
    }
};
  return (
    <div>
      <h1>Fetch API-and its Methods</h1>
      <button onClick={getDataf}>GET</button>
      <button onClick={postDataf}>POST</button>
      <button onClick={putDataf}>PUT</button>
      <button onClick={patchDataf}>PATCH</button>
      <button onClick={deleteDataf}>DELETE</button>
      <h2>{messagef}</h2>
      <h2>User Details</h2>
      {usersf.map((user)=>(
        <div key={user.id}>
            <p>Name:{user.name}</p>
        </div>
      ))}
    </div>
  );
}
