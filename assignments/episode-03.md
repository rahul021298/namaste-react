### What is JSX? Superpowers of JSX?
- JSX is not a HTML inside JS. JSX is HTML like or XML like syntax.
- JSX => Babel transpiles it to React.createElement => ReactElement JS-Object => HTMLElement(render)
- JSX (transpiled before it reaches JS) - PARCEL - Babel
- { we can put any JS expression here or function/invocation }

### Role of type attribute in script tag? What options can I use there?
- The `script` HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. 
- Other attributes can be async, defer etc.
- type attribute is optional, but it allows you to specify the scripting language or the format of the script.
- text/javascript: The default JavaScript type (can be omitted)
- module: For JavaScript modules which allows import/export statements
- text/plain: Content that is not executed as JavaScript.
- application/json: For including JSON data.

### `<TitleComponent>` vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>` in JSX

- **`TitleComponent`**  
  - **Meaning**: This refers to the component class or function itself, not an instance of it.
  - **Use Case**: This syntax is used when you need to reference the component itself, such as passing it as a prop to another component or using it in higher-order functions.

- **`<TitleComponent/>`**  
  - **Meaning**: This creates a self-closing component instance.
  - **Use Case**: This syntax is used when your component does not require any children elements or custom content between opening and closing tags. It's a shorthand for a component that doesn't have child elements.

- **`<TitleComponent></TitleComponent>`**  
  - **Meaning**: This creates a component instance with explicit opening and closing tags, allowing you to pass children or nested elements inside the component.
  - **Use Case**: Use this syntax when your component needs to accept children or has content between its tags.


### Create a Header Component from scratch using Functional Components with JSX (Pending)
- Add a Logo on left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice