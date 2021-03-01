import {useState, useEffect} from 'react'

//4 movement buttons
//lat is H
//long is V


let latMove=0;
let longMove=0;
function MoveButtons(props){

   if(props.startPress=== true){

latMove= props.location[0]
longMove=props.location[1];
}
console.log('long move ==  ',longMove)
console.log('lat move ==  ',latMove)
    
    function North(){
        // move the map up
        // add 0.002 for the long 
        props.setMoveLocation(true)
        props.setLocation((latMove += 0.002),longMove)
    }
    
    function West(){
        // move the map left 
        // subtract 0.002 for the lat 
        props.setMoveLocation(true)
        props.setLocation((longMove-=0.002),latMove)
    }
    
    function East(){
        // move the map right
        // add 0.002 for the lat 
        props.setMoveLocation(true)
        props.setLocation((longMove+=0.002),latMove)
    }
    
    function South(){
        // move the map down 
        // subtract 0.002 for the long 
        props.setMoveLocation(true)
        props.setLocation((latMove -= 0.002),longMove)
    }
    

    return(
       
        <div id = "Movements">
            <button class = "north"onClick={North}>N</button>
            <button class = "east" onClick={East}>E</button>
            <button class = "south"onClick={South}>S</button>
            <button class = "west"onClick={West}>W</button>
        </div>
    )
}

export default MoveButtons