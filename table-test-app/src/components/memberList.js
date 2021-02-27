import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {sortingMembers, deleteMember} from '../redux/actions/member';
import "./global.css";
import {MEMBER_TITLE} from '../constants'

const MemberList = () => {
  const dispatch = useDispatch()
  const applicationState = useSelector((state) => state);
  console.log("application state :", applicationState);
  const [memberState, setMemberState] = useState({
    ...applicationState.members,
  });
  console.log("members :", memberState, MEMBER_TITLE);

  const sorting = (index) => {
      console.log('testing');
      dispatch(sortingMembers(applicationState, index))

  }
  const deleteRow = (index) => {
      console.log('deleteRow :', index)
      dispatch(deleteMember(applicationState, index))
  }

  useEffect(()=>{
      console.log('useEE',applicationState)
  })

  return (
    <div>
      {" "}
      MemberList Rendered 
      <button onClick={(e)=>{sorting()}}>test</button>
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
                        onClick={(e) => {
                            sorting(headerIndex);
                        }}
                      >
                        {header.sortingType === 'asc' ? " 🔽" : " 🔼"}
                      </span>
                    }
                  </th>
                );
              })}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {memberState.memberList.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {memberState.headerList.map((column, colmnId) => {
                    return <td key={colmnId}>{row[column.key]}</td>;
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

export default MemberList;
