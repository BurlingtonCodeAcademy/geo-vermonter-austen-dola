// This page is being used to add a quit option
// Display the answer (Town, County, Longitude, and Latitude)
import { useState } from "react";
// Quit function
function Quit() {
  return (
    <div>
      <button id="Quit" onClick={() => window.location.reload(false)}>
        Quit
      </button>
    </div>
  );
  //This is going to ask you if you are sure you want to quit and if yes it then will display a modal that shows you the correct answer
  function Alert(props) {
    const [display, setDisplay] = useState(false);
    let clickMe = display;

    setDisplay(!clickMe);
    //this is the basic modal set up but not finished
    return (
      <div style={{ height: "250px", width: "100%", background: "yellow" }}>
        <h1>Hello!! I am MODAL!</h1>
        {/* this button is going to display the correct answer on click */}
        <button
          onClick={(evt) => {
            setDisplay(true);
          }}
        >
          Close
        </button>
      </div>
    );
  }
}

export default Quit;
