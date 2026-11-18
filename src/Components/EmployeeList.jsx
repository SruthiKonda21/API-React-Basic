import {useEffect,useState} from 'react';
export default function EmployeeList() {
    const[employees,setEmployees]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to fetch employees");
            }
            return response.json();
        })
        .then((data)=>{
            setEmployees(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        })
    },[]);
    if(loading){
        return<h2>Employee Details using Fetch</h2>;
    }
    if(error){
        return<h1>{error}</h1>
    }
    return (
        <div>
           <h2>Employee Details</h2>
         {employees.map((employee)=>(
            <div className="employee">
                <h3>{employee.name}</h3>
                <h3>ID: {employee.id}</h3>
                <h3>Email: {employee.email}</h3>
                <p>Username: {employee.username}</p>
                <p>City: {employee.address.city}</p>
                <p>Zipcode: {employee.address.zipcode}</p>
            </div>
        ))}
        </div>
    )
}