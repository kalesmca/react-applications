import React,{useState,useEffect, memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import {updateSampleModalFlag} from '../Redux/actions/modals';


const SharedModal = (props) => {
    console.log('modal props', props)
    const applicationState = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log('application state :', applicationState)
    useEffect(()=>{
           console.log(props)
    })

    const handleClose = () =>
    {
        dispatch(updateSampleModalFlag({...applicationState.modals}))
    } 
    return(

        <Modal show={applicationState.modals.sampleModalFlag} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    )

}

export default memo(SharedModal);