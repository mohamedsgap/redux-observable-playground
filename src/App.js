import { useSelector, useDispatch } from "react-redux";
import { ping } from "./store/actions";
import "./App.css";

function App() {
  const isPinging = useSelector((state) => state.isPinging);
  const dispatch = useDispatch();
  console.log("isPinging", isPinging);
  const handleClick = () => dispatch(ping());

  return (
    <div className="App">
      <header className="App-header">
        <h1>isPinging: {isPinging.toString()} </h1>
        <button onClick={handleClick}>Start Ping</button>
      </header>
    </div>
  );
}

export default App;
