var appendTarget = document.querySelector('#appendTarget');

var node = document.createElement('h1');
node.innerText = 'WILL WE COLLECT?';

console.log(appendTarget)
console.log(node)


setTimeout(() => {
  appendTarget.appendChild(node);
}, 5000)
