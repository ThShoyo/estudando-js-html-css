import React, { useState} from 'react'; 
import './App.css';

function App() {
  const [item, setProduto] = useState('');   
  const [lista, setLista] = useState(['Arroz, Lentilha, Banana']);

  const adicionarProduto = () => {
    if (lista.includes(item)) {
      alert ('Produto já exsitente na lista.');
      return;  
    }
  }

    setLista([...lista, item]);
    setProduto('');

    return (
      <div classname="App"> 
      <h1>LIsta de compras</h1>
      <hr/>
      <h2>Adicionar produto</h2>
      <input
        type="Text"
        placeholder="Digite o nome do produto"
        value={item}
        onChange={(e) => setProduto(e.target.value)}
      />
    
      <button onClick={adicionarProduto}>Adicionar</button>
      <hr/>
      <h2>Lista de produtos</h2>
      <ol>
        {lista .map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ol>
    </div>
  );
}