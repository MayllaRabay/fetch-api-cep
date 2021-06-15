import React, { useState } from 'react';
import './App.css';

const baseURL = (cep) => `https://viacep.com.br/ws/${cep}/json/`;

function App() {
  const [ cepPesquisado, setCepPesquisado ] = useState('');
  const [ endereco, setEndereco ] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    const url = baseURL(cepPesquisado);
    
    fetch(url)
    .then(response => response.json())
    .then(data => setEndereco(data))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={cepPesquisado} onChange={e => setCepPesquisado(e.target.value)} />
        <br />
        {endereco && (<p>{endereco.logradouro}, {endereco.localidade} - {endereco.uf}</p>)}
      </form>
    </div>
  );
}

export default App;
