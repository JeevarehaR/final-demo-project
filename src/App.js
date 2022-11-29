import "./App.css";
import { useState, useEffect } from "react";
// const API = "http://localhost:4000";
const API = "https://jeevr-node.herokuapp.com";

function App() {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch(`${API}/mobiles`)
      .then((data) => data.json())
      .then((mbs) => setMobiles(mbs));
  }, []);

  return (
    <div className="App">
      <div className="mobile-list-container">
        {mobiles.map((mb) => (
          <Phone key={mb._id} mobile={mb} />
        ))}
      </div>
    </div>
  );
}

function Phone({ mobile }) {
  return (
    <div className="mobile-container">
      <img src={mobile.img} alt={mobile.model} className="mobile-pic" />
      <h2 className="mobile-model">{mobile.model}</h2>
      <p className="mobile-company">{mobile.company}</p>
    </div>
  );
}

export default App;
