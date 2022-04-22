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
            <h1>{e.name}</h1>
            <p>{e.img}</p>
          </div>
      ))}
    </div>
  );
};
