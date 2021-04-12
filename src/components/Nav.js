//Header containing Placeholder pages (Score, About)
// Highscore function
function HighScore() {
  //shows high score
}
// About function
function About() {
  //shows about page
}

// this function is what holds the buttons to check your highscore and other info about your current game
function NavBar() {
  return (
    <div id="Nav">
      <button onClick={HighScore}>High Score</button>
      <button onClick={About}>About</button>
    </div>
  );
}
export default NavBar;
