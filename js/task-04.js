

const divEl = document.querySelector('#counter');

const newHeader = document.createElement('H1');
newHeader.innerText = 'NEW TITLE';
divEl.append(newHeader);

const mainButton = document.querySelector('button');

const buttonCopy = mainButton.cloneNode(true)
divEl.append(buttonCopy);
buttonCopy.innerText = 'delete';

const htmlExample = '<h2>frontend</h2>';
divEl.insertAdjacentHTML('beforeend',htmlExample);

