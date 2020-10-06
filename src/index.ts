import 'css-media-vars'
import './style/index.styl'
// @ts-ignore
import pug from './components/header.pug'
console.log('cccccccc', pug)

document.querySelector('.app').appendChild(pug)

console.log("Hello TypeScript!");