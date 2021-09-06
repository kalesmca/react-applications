require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';

const appElement = document.getElementById('list');

const mount = (e1) => {
    ReactDOM.render(<App />, e1);

}
mount(appElement)
// console.log('list :', process)
// if(process.env.NODE_ENV === "developement"){
//     if(appElement){
//         mount(appElement)
//     }
// }


export {mount};
