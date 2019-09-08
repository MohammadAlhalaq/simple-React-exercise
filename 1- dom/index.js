const hello = () => {
    console.log('Hello World');
}
const root = document.getElementById('root');

const div = document.createElement('div');
const h1 = document.createElement('h1');
const paragraph = document.createElement('p');

h1.classList.add('red');
h1.onclick = hello;
h1.textContent = 'hello world';

paragraph.textContent = 'I am just a text';

div.appendChild(h1);
div.appendChild(paragraph);

root.appendChild(div);
