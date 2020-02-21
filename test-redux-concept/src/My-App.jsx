import React, { Component } from 'react';
import AppHeader from './Components/App-Header';
import Create from './Components/Create';
import ShowAll from './Components/Show-All';
import PubSub from 'pubsub-js';
import {connect} from 'react-redux';


 class MyApp extends Component {
    constructor(props) {
        super(props);
        window.name = "kaleeswaran";
        window.myObj = {name : "kalees", age: 29}
    }
    display =(e) => {
        console.log('window value:', window.name);
        console.log('win::', window.myObj);
        PubSub.publish('MY TOPIC', 'hello world!');

    }

    mySubscriber = (msg, data) => {
        console.log('subs');
        console.log( msg, data );
    };

    token = PubSub.subscribe('create-profile', this.mySubscriber);


    render() {
        return (
            <div>
                <AppHeader />
                <div><button onClick={(e) => {this.display(e)}}>validate</button></div>
                <div className="container">
                    <Create />
                    <ShowAll />
                </div>
            </div>
        );
    }
}

export default MyApp;

