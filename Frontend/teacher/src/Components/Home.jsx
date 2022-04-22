import { useState } from "react";
import { Navbar } from "./Navbar";

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
          <div key={e._id}>
            <p>{e.img}</p>
            <h2>{e.name}</h2>
            <p>Age: {e.age}</p>
            <p>Gender: {e.gender}</p>
            {/* <p>Class: {e.class}</p> */}
          </div>
      ))}
    </div>
  );
};
