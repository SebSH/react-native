import React, { useContext, createContext, useState } from "react";

export default function Api(){
  const API =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel"
  const VelibContext = createContext(1);

  const Component1 = () => {
    const data = useContext(VelibContext);
    console.log("context", data);

    return (
      <div>
        Hello Component 1 <p>{data.velibs.nhits}</p>
        <button onClick={data.update}>Fetch vélibs</button>
      </div>
    );
  };

  const VelibProvider = ({ children }) => {
    const [velibs, setVelibs] = useState([]);
    const update = () => {
      fetch(API)
        .then(response => response.json())
        .then(data => setVelibs(data));
    };

    return (
      <VelibContext.Provider value={{ velibs, update }}>
        {children}
      </VelibContext.Provider>
    );
  };
}
