import React from 'react';
import ReactDOM from 'react-dom/client';

function click_abc(){
  let a = document.getElementById('myimage');
  
  if(a && a.src !== require('./bulbon.gif'))
    a.src = require("./bulbon.gif");
  else
    a.src = require("./bulboff.gif");
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <img id="myimage" onClick={click_abc} src={require("./bulboff.gif")} width="100" height="180" />
);