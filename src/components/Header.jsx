export function Header() {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: "100%",
        height: "50px",
        color: "white",
        padding: "10px",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          padding: "0",
          margin: "0",
        }}
      >
        <li style={{ marginRight: "10px" }}>Home</li>
        <li style={{ marginRight: "10px" }}>About</li>
        <li style={{ marginRight: "10px" }}>Contact</li>
      </ul>
    </div>
  );
}
