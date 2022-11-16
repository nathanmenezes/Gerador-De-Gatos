import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import './App.css'

function App() {
  const [cat, setCat] = useState('');

  const api = async () => {
    const data = await axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {return res.data})
      .catch(() => {console.log("first")});
      setCat(await data);
  };


  return(
    <div className="App">
      <button onClick={api}>Gerar Gato</button>
      {cat &&( //if cat == true (executa) else não executa (verifica se há valor no cat)
        <div classname="img">
          <img src={cat[0].url} alt="" className="gato"/>
        </div>
      )}
    </div>
  );
}

export default App;