import './App.css';
import UserList from './UserList';
import { Routes, Route, NavLink } from 'react-router-dom';
import UserAdd from './UserAdd';
function App() {
    
  return (
    <>

    <ul>
      <NavLink to='/Users'><li>Users</li></NavLink>
      <NavLink to='/AddUser'><li>Add User</li></NavLink>
    </ul>

     <Routes>
      <Route path='/users' element={<UserList/>}/>
      <Route path='/AddUser' element={<UserAdd />}/>
     </Routes>
    </>
  );
}

export default App;
