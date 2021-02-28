import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteEvent} from '../redux/actions/event';
import "./global.css";
import {MEMBER_TITLE} from '../constants'

const EventList = () => {
  const dispatch = useDispatch();
  const applicationState = useSelector((state) => state);
  console.log("application state Event :", applicationState);
  const [eventState, setEventState] = useState({
    ...applicationState.events,
  });
  console.log("Events :", MEMBER_TITLE);

  const deleteRow = (index) => {
    console.log('deleteRow :', index)
    dispatch(deleteEvent(applicationState, index))
}

  
  return (
    <div>
      {" "}
      Event List Rendered 
      <div>
        <table>
          <thead>
            <tr>
              {/* <th>one</th>
                            <th>dd</th> */}
              {eventState.headerList.map((header, headerIndex) => {
                return (
                  <th key={headerIndex}>
                    {header.fieldName} 
                    {/* {header.sortingType &&
                      <span
                        onClick={(e) => {
                            sorting(headerIndex);
                        }}
                      >
                        {header.sortingType === 'asc' ? " 🔽" : " 🔼"}
                      </span>
                    } */}
                  </th>
                );
              })}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {eventState.eventList.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {eventState.headerList.map((column, colmnId) => {
                      return <td key={colmnId}>{row[column.key]}</td>

                  })}
                  <td><span onClick={()=>{deleteRow(rowIndex)}}>Delete</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventList;
