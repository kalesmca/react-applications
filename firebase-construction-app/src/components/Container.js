import React,{useState} from 'react';
import {Card, Accordion} from 'react-bootstrap';
import SharedModal from './shared.modal';
import {useDispatch, useSelector} from 'react-redux'
import {UPDATE_SAMPLE_MODAL_FLAG} from '../constants';
import {updateSampleModalFlag} from '../Redux/actions/modals';
import Materials from './materials';

 const AppContainer = () =>{
    const [show, setShowModal] = useState(false)
    const applicationState = useSelector((state)=>state)
    console.log('application state:', applicationState)
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
      Materials
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        {/* COnst
          <div>
              <button onClick={()=>{showModal()}}> Show</button>
          </div> */}
          <div>
            {
              applicationState.materials.materialList.length && applicationState.materials.materialList.map((material, index)=>{
                return(
                  <div key={index}>
                    <Materials index={index}/>
                    </div>
                  
                )
              }) 
            }
            
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

export default AppContainer;