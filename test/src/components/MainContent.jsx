// Default export, if this on is imported in some other file you could change the name of the import. There can only be one default export from any one file.
// The import statmenet will look like this: import App from 'path to file'

import { Button } from './Button';

export default function MainContent() {
  const content = 'This is the main content of the Application';

  return (
    <>
      <h1 className="header">{content}</h1>
      <Button />
    </>
  );
}
