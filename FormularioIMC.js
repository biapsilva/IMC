import React, { useState } from 'react';

const FormularioIMC = ({ calcularIMC }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularIMC(altura, peso);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Altura (metros):
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        />
      </label>

      <label>
        Peso (kg):
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
      </label>

      <button type="submit">Calcular IMC</button>
    </form>
  );
};

export default FormularioIMC;
