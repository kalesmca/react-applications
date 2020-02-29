import React, { Component } from 'react';
import AppHeader from './components/header/header';
import Savings from './components/savings/saving-table';
import CreateEntry from "./components/entry/create-entry";
import BankComponent from "./shared/components/bank-info";
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
        {/* <Savings /> */}
        <CreateEntry />
        {/* <BankComponent /> */}
      </div>
    )
  }
}
