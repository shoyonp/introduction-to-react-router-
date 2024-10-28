import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid blue",
    padding: "5px",
    borderRadius: "20px",
  };

  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show details</Link>
      <Link to={`/user/${id}`}>
      <button>clck me</button></Link>
    </div>
  );
};

export default User;
