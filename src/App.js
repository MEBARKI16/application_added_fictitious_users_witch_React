import './App.css';
import AddUser from './composants/Users/AddUser';
import UsersList from './composants/Users/UsersList';
function App() {
 return (
  <div>
<AddUser />
<UsersList users={[]}/>
  </div>
 )

}

export default App;
