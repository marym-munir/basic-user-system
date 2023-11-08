import React, { useState } from "react";

const AddUserForm = (props) => {
  const clearForm = {
    id: null,
    name: "",
    email: "",
    userName: "",
  };
  const [user, setUser] = useState(clearForm);
  //function that take input from all input fields and pass data to hook
  const handleInput = (event) => {
    const { name, value } = event.target;
    //same as above
    // const name = event.target.name;
    // const value= event.target.value;
    //assigning data to hook
    setUser({ ...user, [name]: value });
    console.log('object',{ ...user, [name]: value });
  };
  return (
    <div>
      <h1 className="text-center display-3">Add User Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // send user as prop to app.js
          props.newUser(user);
          setUser(clearForm);
        }}
      > 
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleInput}
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email:</label>
          <input
            type="email"
            className="form-control"
            
            placeholder="Enter Email"
            value={user.email}
            onChange={handleInput}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">User Name:</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Enter User Name"
            value={user.userName}
            onChange={handleInput}
            name="userName"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      {/* <input onChange={(event) => console.log(event.target.value)} name="one" /> */}

     
    </div>

    
  );
};

export default AddUserForm;
