import React, { useState } from 'react';
import './App.css';
import logo from  '../src/assets/images/logo_uchiha.png';

import AdicionarProduto from './components/AdicionarProduto';
import ListaDeProdutos from './components/ListadeProdutos';  // Corrigir o caminho, se necessário

function App() {
  const [produtos, setProdutos] = useState(['Mouse', 'Teclado', 'Monitor']);

  const adicionarUsuario = (nome) => {
    const produto = nome.trim();

    if (produtos.includes(produto)) {
      alert('O produto já existe!');
      return;
    }  
    setProdutos([...produtos, produto]);
  };

  return (
    <div className="App">
      <img src = {logo} className="logo" alt="logo do Senai" />  
      <h1>Produtos</h1>
      <AdicionarProduto onAdd={adicionarUsuario} />
      <hr />
      <h2>Lista de produtos</h2>
      <ListaDeProdutos itens={produtos} />
    </div>
  );
}

export default App;


