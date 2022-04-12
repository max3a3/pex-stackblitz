import './style.css';
import testText0 from './text.txt?raw';
import testText from './text';
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  ${testText} ${testText0}
  `;
