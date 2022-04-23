import { useState } from "react";
import { Navbar } from "./Navbar";
import "../App.css";

export const Home = () => {
  const [showdata, setShowdata] = useState([]);

  fetch("http://localhost:7890/teachersdetails")
    .then((res) => res.json())
    .then((res) => setShowdata(res))
    .catch((err) => console.log(err));

  return (
    <div>
      <Navbar />
      {showdata.map((e) => (
        <div className="display" key={e._id}>
          <p>{e.img}</p>
          <h2>{e.name}</h2>
          <p>Age: {e.age}</p>
          <p>Gender: {e.gender}</p>
          {/* <p>Class: {e.class.map((e) => )}</p> */}
        </div>
      ))}
    </div>
  );
};
