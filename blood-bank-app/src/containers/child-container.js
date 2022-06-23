import React from 'react'
class ChildComponent extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log('chledd comp');
        this.props.setCallables({
           doSomething: this.doSomething
        });
     }
     shouldComponentUpdate(nextProps, nextState){
         console.log('should update calling', nextProps, nextState);
         if(this.pros != nextProps){
             return true;
         } else {
             return false;
         }
     }

    doSomething =(data) =>{
        console.log('child method trigger', data);
    }

    render(){
        return(
            <div>Child Component</div>
        )
    }
}

export default ChildComponent;