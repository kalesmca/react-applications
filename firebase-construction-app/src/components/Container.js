import React,{useState} from 'react';
import {Card, Accordion} from 'react-bootstrap';
import SharedModal from './shared.modal';
import {useDispatch, useSelector} from 'react-redux'
import {UPDATE_SAMPLE_MODAL_FLAG} from '../constants';
import {updateSampleModalFlag} from '../Redux/actions/modals';

export default function AppContainer (){
    const [show, setShowModal] = useState(false)
    const applicationState = useSelector((state)=>state)
    const dispatch = useDispatch()
    const showModal = () =>{
      dispatch(updateSampleModalFlag(applicationState.modals))
      setShowModal(true)
    }

    return(

        <div className="cont">Container
        
        <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Construction
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>COnst
          <div>
              <button onClick={()=>{showModal()}}> Show</button>
          </div>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
 {show &&  <SharedModal flag={true} />}
        
        </div>

    )

}