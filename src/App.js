import "./App.css";
import AddUserForm from "./components/AddUserForm";
import UserData from "./components/UserData";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  //function for adding new user
  const addUser = (person) => {
    console.log("welcome g",person);
    //increment the id for new user data
    person.id = users.length + 1;
    setUsers([...users, person]);
  };
  const deleteUser = (userId)=>{
    
    const userListAfterDeleteUser = users.filter((person)=>person.id !== userId);

    setUsers(userListAfterDeleteUser);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddUserForm newUser={addUser} />
        </div>
        <div className="col-md-6">
          <UserData 
           allUserData={users} 
          dltUser={deleteUser}/>
        </div>
       <div>
        <button className=""></button>
        
       </div>
      </div>
    </div>
  );
}

export default App;
