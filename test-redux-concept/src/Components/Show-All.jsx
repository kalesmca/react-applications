import React from 'react';
import { Table } from 'reactstrap';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import {connect} from 'react-redux';
import {addUsers} from  '../redux/actions/createUserActions';

class ShowAll extends React.Component {
  constructor(props) {
    super(props);
    console.log('show all::', this.props);
  }
  myFunction(current, pageSize) {
    console.log('cs', current);
    console.log(pageSize);
  }
  render() {
    return (
      <div>
        {
          this.props.userList ? 
          <div>my store :::::::::::::{this.props.userList.name}</div> : ''
        }
        
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Pagination  total = {100} pageSize = {10} onChange={this.myFunction}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userList: state.userInfoReducer.userList
})

export default connect (mapStateToProps, {addUsers})(ShowAll);