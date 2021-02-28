import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../redux/actions/event";
import "./global.css";
import { MEMBER_TITLE } from "../constants";
import Select from 'react-dropdown-select';
import MultiSelect from "react-multi-select-component";
// import { Multiselect } from "multiselect-react-dropdown";

const EventList = () => {
  const dispatch = useDispatch();
  const applicationState = useSelector((state) => state);
  console.log("application state Event :", applicationState);
  const [eventState, setEventState] = useState({
    ...applicationState.events,
  });
  const [membersState, setMemberState] = useState({
    ...applicationState.members,
  });
  console.log("Events :", MEMBER_TITLE);

  const deleteRow = (index) => {
    console.log("deleteRow :", index);
    dispatch(deleteEvent(applicationState, membersState, index));
  };

  const dropDownChange = (value) => {
    console.log("value::", value);
  };

  useEffect(() => {
    console.log("membersState.memberList : use::", selected);
  });

  const options = [
    { label: "Grapes 🍇", value: "grapes",disabled:true },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear" },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" },
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div>
      {" "}
      Event List Rendered
      <div>
        <div></div>
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
              <th>Members</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {eventState.eventList.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {eventState.headerList.map((column, colmnId) => {
                    return <td key={colmnId}>{row[column.key]}</td>;
                  })}
                  <td>
                    <span>
                      <MultiSelect
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy={"Select"}
                      />
                    </span>
                  </td>
                  <td>
                    <span
                      onClick={() => {
                        deleteRow(rowIndex);
                      }}
                    >
                      Delete
                    </span>
                  </td>
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
