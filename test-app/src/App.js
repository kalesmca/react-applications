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

//    Pure Component Example

// export default class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     console.log('app calling');
//     this.state ={
//       counter:0
//     } 
//   }
//   componentDidMount(){
    
//     setInterval(() => {
//       let tmp = this.state.counter;
//       this.setState({counter: tmp+1})
//     }, 1000);
//   }
//   render() {
//     console.log('rerendeing')
//     return (
//       <div>
//         my Data ={this.state.counter}
//       </div>
//     )
//   }
// }
