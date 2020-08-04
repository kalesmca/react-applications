import React, { Component } from 'react';
import {connect} from "react-redux"

class ProfileList extends Component {
    // const mapDispatchProps
    
    // constructor(){
    //     super this.props;
    // }
    componentDidMount(){
        console.log('data ::', this.props);
    }
    componentWillMount(){
        console.log('props::', this.props);
    }
    componentWillUpdate(){
        console.log('props::', this.props);

    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.profileList && this.props.profileList.length &&
                         this.props.profileList.map((profile, i) => {
                             return (<tr key={i}>
                                 <td>{profile.name}</td>
                                 <td>{profile.age}</td>
                                 <td>{profile.city}</td>

                             </tr>)

                         })}
                        <tr>

                        </tr>
                    </tbody>

                </table>
                
            </div>
        );
    }
}
const mapState = state =>{
    return {
        profileList: state.profileList
    } 
}

const mapDispachToProps = dispatch => {
    return {
        addData: (data) => dispatch({ type: "ADD", value: data }),
    //   onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
    };
  };

export default connect(mapState, mapDispachToProps)(ProfileList);