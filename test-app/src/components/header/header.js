import React, { Component } from 'react';
import './header.scss';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-head">
                <div>
                    <h3>Family Budget </h3>
                </div>

            </div>
        )
    }
}

