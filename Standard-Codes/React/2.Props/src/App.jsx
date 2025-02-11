import Card from "./Components/Card";
import data from "./data/data.js";

function App() {
  const Es = data.map((e) => <Card {...e} />);

  return <>{Es}</>;
}

export default App;
