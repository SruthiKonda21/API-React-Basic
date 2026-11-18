import {useEffect,useState} from 'react'
  import './App.css';

  function App() {

    let [count,setCount]=useState(0)

    let[data,setData]=useState([])

    async function getData(){
      let response=await fetch("https://dummyjson.com/users")

      response=await response.json()

      // console.log(response.users)

      setData(response.users)
    
      // console.log(data)
    }
      useEffect(()=>{
        getData()
      },[])
    
  
    // function greet(){
    //   console.log("hello")
    // }
    // useEffect(()=>{
    //     greet()
    // },[])
    
  return (
    <>
      <h1>Hello from app</h1>
      <button onClick={()=>setCount(count+1)}>Click me{count}</button>
      
      {
        data.map((user)=>(
          <ul>
            <li>{user.id}</li>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
            <li>{user.phone}</li>
          </ul>
        ))
      }
    </>
  );
}

export default App;
