import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from "./logo.webp";
import userIcon from "./user-icon.png";

// React Element
const reactHeader = React.createElement('div', {class: 'title'}, [
  React.createElement('h1', {}, `I'm h1`),
  React.createElement('h2', {}, `I'm h2`),
  React.createElement('h3', {}, `I'm h3`),
]);
console.log(reactHeader);

const jsxHeader = <div className='title'>
  <h1>I'm h1</h1>
  <h2>I'm h2</h2>
  <h3>I'm h3</h3>
</div>
console.log(jsxHeader);

// React Component
// Class Based Components - OLD
// Functional Components - NEW

// Functional Component
// Functional Component is nothing but a JS function. So we can invoke it as well like { H4() } in another component. 
// We can also add it inside another component like <H4/> or <H4> </H4>.
const H4 = () => <h4>I'm h4</h4>

// Component Composition => Add a component inside another
const Header = () => {
  return (
    <div className='title'>
      <h1 style={{color:"blue"}}>I'm h1</h1>
      <h2 style={{color:"palevioletred"}}>I'm h2</h2>
      <h3 style={{color:"green"}}>I'm h3</h3>
      { H4() }
      <H4/>
      <H4></H4>
    </div>
  );
}

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="center">
        <input
          className="input"
          type="text"
          placeholder="Search anything you want..."
        />

        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>

      <div className="right">
        <img src={userIcon} alt="User Icon" />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// converts object to h1 tag
root.render(<HeaderComponent />); // Render Functional Component => Header or HeaderComponent
// root.render(); // Render React Element => jsxHeader or reactHeader