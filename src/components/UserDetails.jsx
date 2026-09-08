import { useSelector } from "react-redux";

function UserDetails() {
  const user = useSelector((state) => state.kousik);

  return (
    <div>
      <h2>User Details</h2>

      <p>Name: {user.name}</p>

      <p>Email: {user.email}</p>

      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserDetails;