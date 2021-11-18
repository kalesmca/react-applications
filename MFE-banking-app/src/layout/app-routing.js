import React from "react";
import {
  
  Switch,
  Route,
  Link
} from "react-router-dom";

import TestComponent from "../shared/components/test";
import Test2Component from "../shared/components/test2";


export default class AppRoutingComponent {
    render(){
        return (
            <div>
        
        <Switch>
                        <Route path="/" component={TestComponent} exact />
                        <Route path="/about" component={Test2Component} />
                    </Switch>
            </div>
          );

    }
  
}

// export default AppRoutingComponent;

