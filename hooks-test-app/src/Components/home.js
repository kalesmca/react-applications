import React, {useState} from 'react';


const Home = () => {
    const[obj, setObj] = useState({name:'', department: '', location:''});
    function save (){
        console.log('data ::', obj)
    }
    return(

        <div> Hoem 
            <div>
                <input type = "text" placeholder="Name" value={obj.name} onChange={(e)=>{setObj({name: e.target.value})}}/>
            </div>
            <div>
                <input type = "text" placeholder="Department" value={obj.department} onChange={(e)=>{setObj({department: e.target.value})}}/>
            </div>
            <div>
                <input type = "text" placeholder="Location" value={obj.location} onChange={(e)=>{setObj({location: e.target.value})}}/>
            </div>
            <button onClick ={()=> save()}>Ok</button>
        </div>

    )

}

export default Home;