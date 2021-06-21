import React, {useState, useEffect} from 'react';

const ProductComponent = () => {
    const initialState = {
        name:'',
        age:0
    }
    const [obj, setObj] = useState(initialState)
    const [arr1, setArr] = useState([])
    const addData = () => {
        setArr([...arr1, ...[obj]])
        setObj({...obj, ...initialState}) 
    }
    useEffect(()=>{
        console.log(arr1)
        console.log(obj)
    })
    return(

        <div>ProductComponents

        <div>
            Name : <input value={obj.name} onChange={(e)=>{setObj({...obj, ...{name:e.target.value}})}}/>
            Age : <input value={obj.age} onChange={(e)=>{setObj({...obj, ...{age:e.target.value}})}}/>
            <div><button onClick={()=>{addData()}}>Add</button></div>
            
        </div>
        Output: 
        <div>
        <table>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
            {arr1.length ? arr1.map((myData, myIndex) =>{
                return(
                    <tr key={myIndex}>
                    <td>
                        {myData.name}
                    </td>
                    <td>
                    {myData.age}
                    </td>
                </tr>
                )
            })  : ""}
                
            </tbody>
        </table>
         </div>
         </div>

    )

}

export default ProductComponent;