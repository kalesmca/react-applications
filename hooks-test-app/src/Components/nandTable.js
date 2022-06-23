import React,{useState, useEffect} from 'react'

export default function NandTable() {
    const [list, setList] = useState([]);
    const [tableKey, setKey] = useState("");
    const [tableVal, setVal] = useState("");
    const [flag, setFlag] = useState(false);
    useEffect(()=>{
        console.log(list)
    })
    const addRow = () => {

        console.log('table:', tableKey, tableVal)
        const myArray = tableKey.split(".");
        
        let tempArray = list;
        for(let i=0;i<myArray.length;i++){
            let obj = {}
            if(myArray.length === i+1){
                obj.key = myArray[i];
                obj.value = tableVal;
            } else {
                obj.key = myArray[i];
                obj.value = ""
            }
            tempArray.push(obj);
        }
        console.log(tempArray);
        setList(tempArray);
        setVal("");
        setKey('')
    }
  return (
    <div>NandTable
        <div>
            Key : <input value={tableKey} onChange={(e)=> {setKey(e.target.value)}}/>
        </div>
        <div>
            Value : <input value={tableVal} onChange={(e)=> {setVal(e.target.value)}}/>
        </div>
        <div><button onClick={()=> addRow()}>Save</button></div>
        <div>
            <table>
                <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                    {
                        list && list.length ? list.map((rowData, rowIndex) =>{
                            return(
                                <tr key={rowIndex}> 
                                    <td>{rowData.key}</td>
                                    <td>{rowData.value}</td>
                                </tr>
                            )
                        }) : (<tr><td>No Data found</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
