import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
  const users = useLoaderData();

  // state --> data
  // state --> loader
  // us effect
  // fetch --> state set --> set state
  console.log(users);
  return (
    <div>
      <div>
        <h2>Our Users: {users.length}</h2>
        <p>fantastic and awesome</p>
        <div className="users">
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
