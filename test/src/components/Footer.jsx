// Named export, this export makes sure that when you import this one, you must have curly brackets and uses the same name. You can also have several named exports from a file.
// The import statement will look like this: import { App } from 'path to file'

export function Footer() {
  return <footer className="footer">This is the footer</footer>;
}
