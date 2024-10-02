/* In Vanilla JavaScript way
const myElement = React.createElement(
    'div', 
    null, 
    React.createElement('p', null, "Hello React")
);

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
*/

// Using JSX
// Babel transpile this code as Vanilla JavaScript way displayed as before
const myElement = (
    <div>
        <p>Hello React JSX</p>
    </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(myElement);