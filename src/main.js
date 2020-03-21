import './main.css';
import add from './add.js';

document.getElementById("app").innerHTML = `
<br>
<div id="imgTest"></div>
<div id="base64Test"></div>
<textarea id="base64Info"></textarea>
<textarea id="es6Test"></textarea>
`;
add();

// file-loader
import panda from './assets/images/panda.png';
const myPanda = `<img src='${panda}'>
<div>熊猫图片（大于10KB）的地址：${panda}</div>`;
document.getElementById("imgTest").innerHTML = myPanda;

// url-loader
import phone from './assets/images/phone.jpg';
const myPhone = `<img src='${phone}'>`;
document.getElementById("base64Test").innerHTML = myPhone;
document.getElementById("base64Info").innerHTML = `手机图片（小于10kb）编译为base64地址：
${myPhone}`;

// es6 test
const es6Test = (a, b) => a + b;
document.getElementById("es6Test").innerHTML = `ES6语法：(a, b) => a + b
编译为： 
${es6Test}`;
