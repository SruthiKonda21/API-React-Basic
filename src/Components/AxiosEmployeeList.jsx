import {useEffect,useState} from 'react'
import axios from 'axios'

export default function AxiosEmployeeList() {
    const[employees,setEmployees]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setEmployees(response.data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(true);
        });
    },[]);
    if(loading){
        return<h2>Loading Employee Details....;</h2>
    }
    if(error){
        return<h2>{error}</h2>
    }
  return (
    <div>
      <h2>Employee Details using API</h2>
      {employees.map((employee)=>(
        <div className="employee" key={employee.id}>
            <h3>{employee.name}</h3>
           
        </div>
      ))}
    </div>
  )
}
