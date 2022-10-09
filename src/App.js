import "./styles.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default function App() {
  return (
    <div className="App">
      <h1>Using HOC pattern</h1>
      <ClickCounter />
      <HoverCounter />
      <h1>Using Render prop pattern</h1>
    </div>
  );
}
