import React, { Component } from 'react';
import AppHeader from './components/header/header';
import Savings from './components/savings/saving-table';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('app calling');
  }
  render() {
    return (
      <div>
        <AppHeader />
        <Savings />
      </div>
    )
  }
}
