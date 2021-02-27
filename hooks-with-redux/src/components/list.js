import React from 'react';
import {useSelector} from 'react-redux';

export default function List (){
    const applicationState = useSelector(state=> state)
    console.log('application state:', applicationState)
    return(

        <div>
            <div>Cakes Quantity : <h2>some</h2></div>
            <div>Icecream Quantity : <h2>some</h2></div>
        </div>

    )

}