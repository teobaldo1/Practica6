import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [getId, setGetId]=useState(null)
  let idData;
  const generador = async () => {
    const resultado = await fetch("https://api.adviceslip.com/advice");
    const jsonData = await resultado.json();

    setData(jsonData.slip.advice);
    setGetId(jsonData.slip.id)
   
  };
  useEffect(() => {
    generador();
  }, []);

  return (
    <main className="total">
      
        <div className="principal">
          <div>
            <span className="title">ACVICE #{getId}</span>
          </div>
          <h1 className="text">{data}</h1>
          <div>
            <button className="boton" onClick={generador}></button>
          </div>
        </div>
    
    </main>
  );
}

export default App;
