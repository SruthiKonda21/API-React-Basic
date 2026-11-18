import React,{useState} from 'react';
import axios from 'axios';

export default function AxiosMethod() {
    const[users,setUsers]=useState([]);
    const[message,setMessage]=useState("");
    const url="https://jsonplaceholder.typicode.com/users";

    //GET METHOD
    const getData=async()=>{
        try{
            const response=await axios.get(url);
            setUsers(response.data);
            setMessage("Data fetched Successfully");
        }catch(error){
            setMessage(error.message);
        }
    };
    //POST METHOD
    const postData=async()=>{
        try{
            const response=await axios.post(url,{
                name:"TeksAcademy",
                email:"Teks@gmail.com"
            });
            setMessage("New User added:"+response.data.name);
        }
        catch(error){
            setMessage(error.message);
        };
    };
    //PUT METHOD
    const putData=async()=>{
        try{
            const response=await axios.put(url+"/1",
                {
                    name:"Frontend",
                    email:"frontend@gmail.com"
                }
            );
            setMessage("User Completely updated:"+response.data.name);
        }catch(error){
            setMessage(error.message);
        }
    };
    //PATCH METHOD
    const patchData=async()=>{
        try{
            const response=await axios.patch(url+"/1",{
                name:"Java Fullstack/Python Fullstack"
            });
            setMessage("User Partially updated:"+response.data.name);
        }catch(error){
            setMessage(error.message);
        }
    };
    //DELETE METHOD
    const deleteData=async()=>{
        try{
            await axios.delete(url+"/1");
            setMessage("User deleted successfully");
        }catch(error){
            setMessage(error.message);
        }
    }
  return (
    <div>
      <h1>Axios GET Method</h1>
      <button onClick={getData}>GET</button>
      <button onClick={postData}>POST</button>
      <button onClick={putData}>PUT</button>
      <button onClick={patchData}>PATCH</button>
      <button onClick={deleteData}>DELETE</button>
      <h2>{message}</h2>
      <h2>User Details</h2>
      {users.map((user)=>(
        <div key={user.id}>
            <p>Name:{user.name}</p>
            <p>ID:{user.id}</p>
        </div>
      ))}
    </div>
  )
}
