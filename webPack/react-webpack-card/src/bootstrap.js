require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './App.scss';

const appElement = document.getElementById('card');

const mount = (e1) => {
    ReactDOM.render(<App />, e1);

}
mount(appElement)

export {mount};