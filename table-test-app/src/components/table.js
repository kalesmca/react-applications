import React,{useReducer, useState, useMemo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import MOCK_DATA from '../data/MOCK_DATA.json';
import './global.css';
const initialState = {
  columnList: [
    { fieldName: "Name", key: "first_name", isAscOrder : true },
    { fieldName: "Last Name", key: "last_name", isAscOrder : true },
    { fieldName: "Age", key: "age", isAscOrder : true },
    { fieldName: "E-mail", key: "email" },
    { fieldName: "Gender", key: "gender" },
  ],
};

const Table =  () =>{

  const applicationState = useSelector(state => state)
  console.log('application state ::', applicationState)

  const sortingData = (index) => {
    console.log('sortign:')
    let tmpData = [...data]

    const sortCol = columns.columnList[index]

    if(sortCol.key === 'age'){
      if(sortCol.isAscOrder){
        tmpData.sort(function (a, b) {
          return b.age - a.age
        })

      } else {
        tmpData.sort(function (a, b) {
          return a.age - b.age
        })
      }
        
    } else {
      if(sortCol.isAscOrder){
        tmpData.sort(function(a, b) {
          var nameA = a[sortCol.key].toUpperCase(); // ignore upper and lowercase
          var nameB = b[sortCol.key].toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else {
        tmpData.sort(function(a, b) {
          var nameA = a[sortCol.key].toUpperCase(); // ignore upper and lowercase
          var nameB = b[sortCol.key].toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }

    }

    console.log('temp data:', tmpData)
    setData(tmpData)
  }


    console.log('data :', MOCK_DATA)
    
    const [data, setData] = useState(MOCK_DATA)
    const [columns, setColumns] = useState(initialState);

    const updateColumns = (index) => {
      console.log('index:', index)
      let temp = {...initialState}
      temp.columnList[index].isAscOrder = !temp.columnList[index].isAscOrder
      setColumns(temp)
      sortingData(index)
    }

      useEffect(()=>{
        console.log('useEffect calling', columns, data) 
      })
    return (
      <div>
        {" "}
        Table is rendering s <button onClick={(e)=> {sortingData()}} >sort</button>
        <div>
          <table>
            <thead>
              <tr>
                {/* <th>one</th>
                            <th>dd</th> */}
                {columns.columnList.map((column, colIndex) => {
                  return (
                    <th key={colIndex}>
                      {column.fieldName} .. {"column.isAscOrder"} --
                      {/* {column.isAscOrder && <span onClick={(e)=>{dispatch({payLoad:{column: column, index:colIndex, currentState: {...columns}}})}}>{column.isAscOrder ? " 🔽" : " 🔼"}</span>} */}
                      {<span onClick={(e)=>{updateColumns(colIndex)}}>{column.isAscOrder ? " 🔽" : " 🔼"}</span>}

                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                      {
                          columns.columnList.map((column, colmnId) => {
                              return(
                                <td key = {colmnId}>{row[column.key]}</td>
                              )
                          })
                      }
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );

}

export default Table;