function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </div>
  );
}

export default UserCard;
