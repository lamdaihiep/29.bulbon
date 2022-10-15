import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';


function click_abc(){
  let a = document.getElementById('myimage');
  console.log('abc');
  if(a && a.src !== require('./bulbon.gif'))
    a.src = require("./bulbon.gif");
  else if(a)
    a.src = require("./bulboff.gif");
  else{}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <img id="myimage" onClick={click_abc} onMouseDown={handleEvent} onMouseUp={click_abc} src={require("./bulboff.gif")} width="100" height="180" />
);