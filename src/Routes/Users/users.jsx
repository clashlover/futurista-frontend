import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../actions";
import "./users.scss";

const Users = () => {
  const dispatch = useDispatch();
  const { isPending, users, error } = useSelector(
    (state) => state.requestUsers
  );
  const handleUsers = () => {
    dispatch(setUsers());
  };

  useEffect(() => {
    handleUsers();
    console.log(error);
  }, []);
  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div className="users-container">
      <h2>Users Details</h2>
      <Table striped>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.email}>
                <td>{user.userName}</td>
                <td>{user.companyName}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.message}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
