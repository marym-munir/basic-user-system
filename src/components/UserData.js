import React from "react";

const UserData = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="text-center display-3">User Data</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">User Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        {props.allUserData.length > 0 ? (
          props.allUserData.map((user) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.userName}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.dltUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <tbody>
            <tr>
              <td colSpan={4}>No User Found</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UserData;
