import {useState} from 'react'
//4 movement buttons
//lat is H
//long is V

function North(props){
    // move the map up
    // add 0.002 for the long 
}

function West(props){
    // move the map left 
    // subtract 0.002 for the lat 
}

function East(props){
    // move the map right
    // add 0.002 for the lat 
}

function South(props){
    // move the map down 
    // subtract 0.002 for the long 
}

function MoveButtons(props){
let LongInput = props.long
let LatInput = props.lat
const [long,setLong]= useState(LongInput)
const [lat,setLat]= useState(LatInput)

    return(
        <div>
            <button onClick={North}>N</button>
            <button onClick={West}>W</button>
            <button onClick={East}>E</button>
            <button onClick={South}>S</button>
        </div>
    )
}

export default MoveButtons