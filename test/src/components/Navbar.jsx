// We can also write and use an arrow function istead of the fuction keyword and export it has a named variable.

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">The Application</h2>
      <div className="links">
        <span className="link">Home</span>
        <span className="link">About</span>
        <span className="link">Contact</span>
        <span className="link">Other</span>
      </div>
    </nav>
  );
};
