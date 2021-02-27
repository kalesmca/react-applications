import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {ascOrderMembers} from '../redux/actions/member';
import "./global.css";
import {MEMBER_TITLE} from '../constants'
import memberReducer from "../redux/reducers/member";

const MemberList = () => {
  const dispatch = useDispatch()
  const applicationState = useSelector((state) => state);
  console.log("application state :", applicationState);
  const [memberState, setMemberState] = useState({
    ...applicationState.members,
  });
  console.log("members :", memberState, MEMBER_TITLE);

  const testing = () => {
      console.log('testing');
      dispatch(ascOrderMembers(applicationState, 5))

  }

  return (
    <div>
      {" "}
      MemberList Rendered 
      <button onClick={(e)=>{testing()}}>test</button>
      <div>
        <table>
          <thead>
            <tr>
              {/* <th>one</th>
                            <th>dd</th> */}
              {memberState.headerList.map((header, headerIndex) => {
                return (
                  <th key={headerIndex}>
                    {header.fieldName} .. {header.sortingType} 
                    {header.sortingType &&
                      <span
                        // onClick={(e) => {
                        //   updateColumns(colIndex);
                        // }}
                      >
                        {header.sortingType === 'asc' ? " 🔽" : " 🔼"}
                      </span>
                    }
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {memberState.memberList.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {memberState.headerList.map((column, colmnId) => {
                    return <td key={colmnId}>{row[column.key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;
