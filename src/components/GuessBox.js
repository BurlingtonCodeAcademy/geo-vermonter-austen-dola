//This is the options box that will pop up when you hit guess.... ADD CANCEL BUTTON IN HERE
import { useState } from "react";
function GuessBox() {
  const [picked, setPicked] = useState(null);
  const [selected, setSelected] = useState({});
  function submitForm(evt) {
    evt.preventDefault();

    setPicked({
      name: selected.name,
      county: selected.county,
    });
  }
  function handleChange(evt) {
    let name = evt.target.name;
    let currentGuess = selected;
    currentGuess[name] = evt.target.value;

    setSelected(currentGuess);
  }
  return (
    <div>
      <h1>{picked ? ` You Guessed ${picked.county} !` : ""}</h1>

      <form onSubmit={submitForm}>
       
        <select
          name="county"
          value={selected.county && ""}
          onChange={handleChange}
        ><option value=""></option>
          <option value="Franklin County">Franklin County</option>
          <option value="Lamoille County">Lamoille County</option>
          <option value="Orange County">Orange County</option>
          <option value="Washington County">Washington County</option>
          <option value="Orleans County">Orleans County</option>
          <option value="Essex County">Essex County</option>
          <option value="Grand Isle County">Grand Isle County</option>
          <option value="Windsor County">Windsor County</option>
          <option value="Rutland County">Rutland County</option>
          <option value="Windham County">Windham County</option>
          <option value="Bennington County">Bennington County</option>
          <option value="Addison County">Addison County</option>
          <option value="Caledonia County">Caledonia County</option>
          <option value="Chittenden County">Chittenden County</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default GuessBox;
