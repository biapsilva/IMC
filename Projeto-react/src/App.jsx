import React, { useState } from 'react';
import FormularioIMC from './FormularioIMC';
import ResultadoIMC from './ResultadoIMC';

function App() {
  const [resultado, setResultado] = useState({ imc: null, classificacao: '' });

  const calcularIMC = (altura, peso) => {
    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else if (imc < 34.9) classificacao = 'Obesidade Grau 1';
    else if (imc < 39.9) classificacao = 'Obesidade Grau 2';
    else classificacao = 'Obesidade Grau 3';

    setResultado({ imc, classificacao });
  };

  return (
    <div>
      <FormularioIMC calcularIMC={calcularIMC} />
      {resultado.imc !== null && (
        <ResultadoIMC imc={resultado.imc} classificacao={resultado.classificacao} />
      )}
    </div>
  );
}

export default App;
