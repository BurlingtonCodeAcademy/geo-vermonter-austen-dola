//Header containing Placeholder pages (Score, About)

function HighScore(){
    //shows high score
}
function About(){
    //shows about page
}


function NavBar(){


    return(
        <div id = "Nav">
        <button onClick={HighScore} >High Score</button>
        <button onClick={About}>About</button>
        </div>
    )
}
export default NavBar