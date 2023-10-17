import logo from "./logo.svg";
import "./App.css";
import AddUserForm from "./components/AddUserForm";
import UserData from "./components/UserData";
import { useState } from "react";

function App() {
  const userData = [
    {
      id: 1,
      name: "Khadam",
      email: "Khadam123@gmail.com",
      userName: "Khadam Hussain",
    },
    {
      id: 2,
      name: "Ahmad",
      email: "Ahmad123@gmail.com",
      userName: "M Ahmad",
    },
    {
      id: 3,
      name: "Ali",
      email: "ali123@gmail.com",
      userName: "Ali Ahmad Gil",
    },
    {
      id: 4,
      name: "Abu Bakar",
      email: "Abu123@gmail.com",
      userName: "Ali Ahmad AbU Bakar",
    },
  ];

  const [users, setUsers] = useState(userData);
  //function for adding new user
  const addUser = (person) => {
    console.log("welcome g",person);
    //increment the id for new user data
    person.id = users.length + 1;
    setUsers([...users, person]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <AddUserForm newUser={addUser} />
        </div>
        <div className="col-md-6">
          <UserData allUserData={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
