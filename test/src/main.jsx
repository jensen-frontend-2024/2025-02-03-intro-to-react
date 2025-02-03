import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Named import, you are NOT allowed to change the variable name
import { App } from './App.jsx';

// Default import, you are allowed to changed the variabel name
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
