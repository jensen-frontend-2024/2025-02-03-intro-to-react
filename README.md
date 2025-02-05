# 2025-03-02 - Intro till React

<details open>
<summary>Table of content</summary>

- [What is React?](#what-is-react)
- [Global usage](#global-usage)
- [Key Features](#key-features)
- [Setting Up a React Application with Vite.js](#setting-up-a-react-application-with-vitejs)

  - [Project Structure](#project-structure)
  - [Key Files Explained](#key-files-explained)
  - [Summary](#Summary)

- [Writing Your First React Component](#writing-your-first-react-component)
- [Introduction to JSX](#introduction-to-jsx)
- [Debugging Basics](#debugging-basics)

</details>

### **What is React?**

React is a JavaScript library used to build dynamic and interactive user interfaces, especially for single-page applications. Developed by Facebook in 2011 and open-sourced in 2013, React focuses on the view layer of an application, making it easier to create reusable components that manage their own state.

React’s key features include its component-based architecture, which simplifies UI development, and its Virtual DOM, which ensures fast updates by minimizing changes to the real DOM. It also uses a declarative approach, allowing developers to describe how the UI should look, and React automatically updates it when the data changes.

Popular among developers and companies like Netflix and Instagram, React is widely used for its performance, reusability, and rich ecosystem of tools and libraries.

[Back to top](#2025-03-02---intro-till-react)

---

### Global usage

As of 2024, React continues to be a dominant force in front-end development. According to the State of Frontend 2024 report, 85% of survey respondents have used React in the past year, indicating its widespread adoption. ([Software House](https://tsh.io/state-of-frontend/?utm_source=chatgpt.com))

In terms of active development, React maintains a strong presence. A recent analysis highlights that Angular has the most active development community, followed by React, Svelte, and Vue. ([JavaScript in Plain English](https://javascript.plainenglish.io/which-one-is-the-most-actively-developed-front-end-framework-in-2024-d662c9951ecc?utm_source=chatgpt.com))

When comparing React to other frameworks:

- **React vs. Angular**: React offers a more flexible and lightweight approach, allowing developers to integrate it into various projects without enforcing a specific structure. Angular, being a comprehensive framework, provides a more opinionated structure, which can be beneficial for large-scale applications but may feel restrictive for smaller projects. ([Medium](https://medium.com/%40GuruTechnolabs/reactjs-vs-other-front-end-frameworks-choosing-the-right-tool-for-your-project-b713d5214f71?utm_source=chatgpt.com))

- **React vs. Vue.js**: Vue.js has gained popularity due to its simplicity and gentle learning curve. While React has a larger ecosystem and community support, Vue offers an approachable alternative, especially for developers new to front-end frameworks. ([TinyMCE](https://www.tiny.cloud/blog/vue-react-angular-js-framework-comparison/?utm_source=chatgpt.com))

In summary, React's component-based architecture, virtual DOM implementation, and extensive community support contribute to its continued popularity and widespread use in the industry.

[Back to top](#2025-03-02---intro-till-react)

---

### Key Features

Here’s a list of React’s **key features**:

1. **Component-Based Architecture**

   - React applications are built using reusable, independent components that simplify UI development and maintenance.

2. **Declarative UI**

   - React lets developers focus on what the UI should look like by describing the desired outcome, rather than detailing how to achieve it. This declarative approach abstracts manual DOM manipulation, making development simpler and code more maintainable. Unlike imperative programming, which requires step-by-step instructions to update the UI, React automatically handles rendering and updates when data or state changes.

   - [Article - Declarative vs. Imperative Programming: 4 Key Differences ](https://codefresh.io/learn/infrastructure-as-code/declarative-vs-imperative-programming-4-key-differences/)

   - Short code example

   Declarative _( React )_

   ```jsx
   const App => () => <button onClick={() => console.log("Btn has been clicked")}>Click me</button>
   ```

   You describe what the button should do, and React takes care of rendering and handling all the updates.

   Imperative _( Vanilla JS )_

   ```js
   const button = document.createElement('button');
   button.innerText = 'Click me';

   button.addEventListener('click', () => {
     console.log('Btn has been clicked');
   });

   document.body.append(button);
   ```

3. **Virtual DOM**

   - React uses a lightweight in-memory representation of the DOM to update only the parts of the UI that have changed, improving performance.

   - [Article - Virtual DOM in React ](https://refine.dev/blog/react-virtual-dom/#the-role-of-the-virtual-dom-in-reacts-reconciliation)

   - Check out images of the Virtual DOM in the images folder!

4. **Unidirectional Data Flow _( Props )_**

   - Data flows in one direction, from parent components to child components, making it easier to debug and predict application behavior.

   - [Article - Passing Props to a Component ](https://react.dev/learn/passing-props-to-a-component?)
   - [Article - React Props ](https://refine.dev/blog/react-props/?#introduction)

5. **JSX _( JavaScript XML )_**

   - JSX is a syntax extension that allows developers to write HTML-like code directly in JavaScript, making the code more readable and expressive.

   - [Article - Writing Markup with JSX ](https://react.dev/learn/writing-markup-with-jsx)
   - [Article - JavaScript in JSX with Curly Braces ](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

6. **Rich Ecosystem**

   - React has a vast ecosystem of libraries, tools, and extensions, such as React Router for navigation and Redux for state management.

7. **React Hooks**

   - Introduced in React 16.8, hooks like `useState` and `useEffect` allow developers to manage state and lifecycle methods in functional components.

   - [Learn React Hooks – A Beginner's Guide
     ](https://www.freecodecamp.org/news/the-beginners-guide-to-react-hooks/)

8. **Cross-Platform Development**

   - React Native enables developers to use the same React principles to build mobile applications for iOS and Android.

9. **Flexibility**

   - React is not a full framework, so it can be integrated with other tools and libraries to suit the needs of a project.

10. **Developer Tools**
    - React provides debugging and profiling tools, such as the React Developer Tools browser extension.

[Back to top](#2025-03-02---intro-till-react)

---

### Setting Up a React Application with Vite.js

When you create a new **Vite** project using the React template with:

```bash
npm create vite@latest [my-app]
```

You switch out the text in the square brackets to a name of your own choosing.

You get the following **starting files and folders**:

[Back to top](#2025-03-02---intro-till-react)

#### Project Structure

```
my-app/
│── node_modules/         # Installed dependencies
│── public/               # Static assets
│   ├── vite.svg          # Vite logo (safe to delete)
│── src/                  # Main source code
│   ├── assets/           # (Optional) Place for images or styles
│   ├── App.css           # Styles for App.jsx
│   ├── App.jsx           # Main React component
│   ├── main.jsx          # Entry point for React
│   ├── index.css         # Global styles
│── .gitignore            # Files to ignore in Git
│── index.html            # Main HTML file (root of the app)
│── package.json          # Project dependencies and scripts
│── vite.config.js        # Vite configuration
│── README.md             # Project documentation
```

#### Key Files Explained

##### **1. `index.html` (Main HTML file)**

- The root **HTML file** that loads the React app.
- Contains:
  ```html
  <body>
    <div id="root"></div>
    <!-- React mounts here -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
  ```

##### **2. `src/main.jsx` (Entry Point)**

- The first file executed by Vite.
- Mounts React into the `#root` div in `index.html`:

  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App.jsx';
  import './index.css';

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ```

##### **3. `src/App.jsx` (Main Component)**

- The default **React component** you see when running the project:

  ```jsx
  function App() {
    return (
      <div>
        <h1>Hello Vite + React!</h1>
      </div>
    );
  }

  export default App;
  ```

##### **4. `src/index.css` & `src/App.css` (CSS Styles)**

- `index.css` → Global styles.
- `App.css` → Styles specific to `App.jsx`.

##### **5. `vite.config.js` (Vite Configuration)**

- Configuration for Vite, such as aliases, plugins, and optimizations.

##### **6. `package.json` (Project Dependencies)**

- Lists dependencies like `react` and `react-dom`:
  ```json
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
  ```
- Includes useful scripts:
  ```json
  "scripts": {
    "dev": "vite",       // Start dev server
    "build": "vite build", // Build for production
    "preview": "vite preview" // Preview build output
  }
  ```

##### **7. `public/` (Static Assets)**

- Any files here (e.g., images, fonts) **won’t be processed by Vite** and can be accessed directly, e.g., `/logo.png`.

[Back to top](#2025-03-02---intro-till-react)

#### Summary

- **`index.html`** → Loads the app, includes `#root`.
- **`main.jsx`** → Entry point, renders React into `#root`.
- **`App.jsx`** → Main component of the app.
- **CSS files** → `index.css` (global styles), `App.css` (component styles).
- **`vite.config.js`** → Configures Vite (optional).
- **`public/`** → Stores static assets.

Let me know if you need more details on any part! 🚀

[Back to top](#2025-03-02---intro-till-react)

---

### Writing Your First React Component

- What is a React component?
  - A reusable piece of UI.
- Creating a functional component
  - Basic syntax and structure.
- Rendering a component in the `App.jsx`.

[Back to top](#2025-03-02---intro-till-react)

---

### Introduction to JSX

- What is JSX?

  - JavaScript XML – a syntax extension for writing HTML in JavaScript.

  ```jsx
  <h1 className="header">Hello, React!</h1>
  ```

  Writing this is the equivalent to writing this in in vanilla Javascript:

  ```js
  const h1: HTMLElement = document.createElemnent('h1');
  h1.classList.add('header');
  h1.innerText = 'Hello React!';
  document.body.append(h1);
  ```

- Why JSX is used in React.

  JSX makes React code more readable by allowing HTML-like syntax in JavaScript. You don't have to write JSX, you could use the "original way" of creating the template. It is something alled React.CreateComponent which is a function that takes fom information that React uses behind the scenes to create HTML. But, JSX is easier and it compiles to React.createElement() by the React ecosystem, optimizing DOM updates for better performance.

  Corresponding content written with React.createElement:

  ```jsx
  const h1: ReactElement = React.createElement('h1', null, 'Hello, React!');
  ```

  Syntax:

  ```
  React.createElement(type, props, ...children)
  ```

  Where the parameters are:

  1. type (string | React Component)

     - The type of the element to create.
     - Can be a string (for native HTML elements like "div", "p", "button") or a React component.

  2. props (object | null)

     - An object containing attributes and properties for the element (e.g., { className: "my-class", id: "unique" }).
     - If there are no props, pass null.

  3. ...children (React elements, strings, or arrays)

     - The content inside the element.
     - Can be:
       - A string ("Hello World")
       - Another React element (React.createElement("p", null "Text"))
       - An array of multiple React elements ([element1, element2])

Slightly more complex example with React.createElement compared to JSX:

JSX:

```jsx
const App = () => (
  <section id="section">
    <article className="image-card">
      <img src="image1.jpg" alt="First" />
      <p>First article text</p>
      <button className="btn" disabled type="button">
        Read More
      </button>
    </article>
    <article className="image-card">
      <img src="image2.jpg" alt="Second" />
      <p>Second article text</p>
      <button className="btn" disabled type="button">
        Read More
      </button>
    </article>
  </section>
);
```

React.createElement

```js
const App = () =>
  React.createElement(
    'section',
    { id: 'section' },
    React.createElement(
      'article',
      { className: 'image-card' },
      React.createElement('img', { src: 'image1.jpg', alt: 'First' }),
      React.createElement('p', null, 'First article text'),
      React.createElement(
        'button',
        { className: 'btn', disabled: true, type: 'button' },
        'Read More'
      )
    ),
    React.createElement(
      'article',
      { className: 'image-card' },
      React.createElement('img', { src: 'image2.jpg', alt: 'Second' }),
      React.createElement('p', null, 'Second article text'),
      React.createElement(
        'button',
        { className: 'btn', disabled: true, type: 'button' },
        'Read More'
      )
    )
  );
```

- Rules of JSX
  - JSX must have a single parent element.
  - Using `{}` for embedding expressions.
  - JSX syntax is stricter than HTML (e.g., self-closing tags, camelCase attributes like `className`).

[Back to top](#2025-03-02---intro-till-react)

---

### Building the First Application

In the test folder in this repo, you can find the application we built with React. There we introduce how to create components, import/export syntax, import styling and general project structure.

[Back to top](#2025-03-02---intro-till-react)

---

### Debugging Basics

TBD

[Back to top](#2025-03-02---intro-till-react)
