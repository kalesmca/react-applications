import React, { Component } from 'react';
import AppHeader from './components/header/header';
import Savings from './components/savings/saving-table';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('app calling');
  }
  render() {
    return (
      <div>
        <div>React App calling</div>
        <AppHeader />
        <Savings />
      </div>
    )
  }
}
