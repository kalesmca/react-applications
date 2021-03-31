import React, { useState, memo } from "react";
import { Card, Accordion } from "react-bootstrap";
// import SharedModal from './shared.modal';
import { useDispatch, useSelector } from "react-redux";
import { updateSampleModalFlag } from "../Redux/actions/modals";
import Materials from "./materials";
import './global.css'

const AppContainer = () => {
  const [show, setShowModal] = useState(false);
  const [date, setDate] = useState('');
  const applicationState = useSelector((state) => state);
  console.log("application state:", applicationState);
  const [flag, setFlag] = useState(false)

  return (
    <div className="cont">
      
      <div >
        <input type="date" value={date} onChange={(e)=>{setDate(e.target.value); setFlag(true)}}/> 

      </div>
      <div>
        {flag && applicationState.materials.materialList.length &&
          applicationState.materials.materialList.map((material, index) => {
            return (
              <div key={index}>
                <Materials index={index} date={date} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default memo(AppContainer);
