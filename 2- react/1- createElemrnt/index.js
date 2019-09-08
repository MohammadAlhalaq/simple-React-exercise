const h1 = React.createElement('h1', {className: 'red', onClick: () => {
    console.log('hello world');
}},'hello world');

const p = React.createElement('p', null, 'i am just a text');

const div = React.createElement('div', null, h1, p);

ReactDOM.render(div, document.getElementById('root'));