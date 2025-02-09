import { useState, useEffect } from "react";
import "./App.css";

const Card = ({ title }) => {

  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(`Card Rendered ~~`);
  }, []);

  useEffect(() => {
    console.log(`${title} has been Liked: ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title}  { count ? " , " + count : null }
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};


const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="3 Idiots" />
      <Card title="Avengers" />
    </div>
  );
};


export default App;
