const heading = React.createElement('h1', {
  id: "heading",
}, 'Hello World From React!');

const childH2 = React.createElement('h2', {}, `I'm an h2 tag`);
const childH1 = React.createElement('h1', {}, `I'm an h1 tag`);
const child = React.createElement('div', {id: 'child'}, [childH1, childH2 ]);

const child2H2 = React.createElement('h2', {}, `I'm an h2 tag`);
const child2H1 = React.createElement('h1', {}, `I'm an h1 tag`);
const child2 = React.createElement('div', {id: 'child'}, [child2H1, child2H2 ]);

const parent = React.createElement('div', { id: 'parent' }, [child, child2 ]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent); // converts object to h1 tag