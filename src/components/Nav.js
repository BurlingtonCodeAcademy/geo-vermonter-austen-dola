//Header containing Placeholder pages (Score, About)

function HighScore(){
    //shows high score
}
function About(){
    //shows about page
}


function NavBar(){


    return(
        <div>
        <button onClick={HighScore} >High Score</button>
        <button onClick={About}>About</button>
        </div>
    )
}
export default NavBar