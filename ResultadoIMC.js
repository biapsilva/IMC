import React from 'react';

const ResultadoIMC = ({ imc, classificacao }) => {
  return (
    <div>
      <h2>Resultado do IMC</h2>
      <p>IMC: {imc}</p>
      <p>Classificação: {classificacao}</p>
    </div>
  );
};

export default ResultadoIMC;