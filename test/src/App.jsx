// ########## Function key word and named export ##########

// Named export, this export makes sure that when you import this one, you must have curly brackets and uses the same name. You can also have several named exports from a file.
// The import statement will look like this: import { App } from 'path to file'

export function App() {
  return (
    // React Fragment, works as a placeholder for the root element of the component IF you want to.
    <>
      <nav className="navbar">
        <h2 className="logo">The application</h2>
        <div className="links">
          <span className="link">Home</span>
          <span className="link">About</span>
        </div>
      </nav>

      <h1>App Component</h1>

      <footer className="footer">
        This is the footer
      </footer>
    </>
  );
}

// ########## Arrow function and named export ##########

// We can also write and use an arrow function istead of the fuction keyword.

// export const App = () => {
//   return <div>App Component</div>;
// }

// ########## Function keyword and default export ##########

// Default export, if this on is imported in some other file you could change the name of the import. There can only be one default export from any one file.
// The import statmenet will look like this: import App from 'path to file'

// function App() {
//   return <div>App Component</div>;
// }

// export default App;
