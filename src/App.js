import './App.css';
import AddUser from './composants/Users/AddUser';
import UsersList from './composants/Users/UsersList';
import React, {useState} from 'react'
function App() {
  const [listusers, setlistuser] = useState([])
  const addUser = (uName,uAge) => {
    setlistuser((preventUserList) => {
      return [...preventUserList, {name: uName,age : uAge, id : Math.random().toString}];
    });

  };
 return (
  <div>
<AddUser onAddUser={addUser}/>
<UsersList users={listusers}/>
  </div>
 )

}

export default App;
