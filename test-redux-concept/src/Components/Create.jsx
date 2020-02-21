import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PubSub from 'pubsub-js'
import {connect} from 'react-redux';
import {addUsers} from  '../redux/actions/createUserActions';

class Create extends React.Component {
  state = {
    email : 'kalees@gmail.com',
    password: 'myName',
    city: 'muhavoor',
    state: "Kerala",
    name: "kalees"
  }
    constructor(props) {
        super(props);
        console.log('Create :: Props::', this.props);
    }

    change = (event) => {
      console.log('event ::', event);
      console.log('this ::',this);
      this.setState({[event.target.name] : event.target.value})
    }

    handleChange(event) {
      console.log('event ::', event);
    }
    myFunction = (e) =>{
      console.log('city ::', this.state.city);
      console.log('name::', this.state.name);
      let profile = {name : this.state.name, city: this.state.city, state: this.state.state};
      this.props.addUsers(profile);
      window.name = "saravana";
      window.myObj = {name : "saravana", age: 25}
      //PubSub.publish('create-profile', profile);
    }

  render() {
    return (
      <div>
        <div>email :: {this.state.email}</div>
        <button onClick={(e) => {this.myFunction(e)}}>Click</button>

      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="text" name="name" id="exampleEmail" placeholder="with a placeholder" onChange={this.change} value={this.state.name} />
            </FormGroup>
          </Col>
          {/* <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="text" name="password" id="examplePassword" onChange={this.change} value={this.state.password} placeholder="password placeholder" />
            </FormGroup>
          </Col> */}
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" onChange={this.change} value={this.state.city}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" onChange={this.change} value={this.state.state} id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  userList: state.userInfoReducer
})

export default connect (mapStateToProps, {addUsers})(Create);