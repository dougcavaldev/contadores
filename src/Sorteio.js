import React, { useState } from "react";
import "./number.css";

//Primeiro criamos uma função que será exibida mais tarde:
function NumeroBuild() {
  //Dentro desta função criamos uma variável "const"
  const [numeroAleatorio, setNumeroaleatorio] = useState(1);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (1000 - 1) + 1);

    setNumeroaleatorio(novoNumero);
  }

  return (
    <div className="text">
      <h3>Número Aleatório</h3>
      <h1 className="number">{numeroAleatorio}</h1>

      <button onClick={gerarNumero}>Novo Número</button>
    </div>
  );
}

export default NumeroBuild;
