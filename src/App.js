import "./App.css";
import "./components/buttons/buttons.scss";

import Buttons from "./components/buttons/Buttons";
import Headers from "./components/headers/Headers";
import Cards from "./components/cards/Cards";

function App() {
  return (
    <>
      <Buttons />
      <Cards />
      <Headers />
    </>
  );
}

export default App;
