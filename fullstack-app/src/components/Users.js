import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

export default function Users() {
  const API_URL = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  // before component renders, the below method gets invoked.
  useEffect(() => {
    console.log("first enter");
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    // API call
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response);
        let data = response.data;
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
        setUsers([]);
      });
  };

  return (
    <div>
      <h4>Users</h4>
      <hr />

      {/* <button onClick={fetchUsers}>Fetch</button> */}

      <div className="row">
        {users.map((u) => (
          <div className="col-md-3">
            <User user={u} />
          </div>
        ))}
      </div>
    </div>
  );
}
