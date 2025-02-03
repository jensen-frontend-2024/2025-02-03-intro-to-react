import { Button } from './Button';

// We can also write and use an arrow function istead of the fuction keyword and export it has a named variable.
export const Navbar = () => {
  const logo = 'The Super Application';

  const links = [
    {
      id: 1,
      name: 'home',
    },
    {
      id: 2,
      name: 'about',
    },
    {
      id: 3,
      name: 'contact',
    },
    {
      id: 4,
      name: 'other',
    },
  ];

  return (
    <nav className="navbar">
      <h2 className="logo">{logo}</h2>
      <div className="links">
        {links.map((link) => {
          return (
            <span className="link" key={link.id}>
              {link.name}
            </span>
          );
        })}
        <Button />
      </div>
    </nav>
  );
};
