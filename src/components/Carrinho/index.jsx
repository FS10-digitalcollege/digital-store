import { useState } from 'react';
import './index.css';

const Carrinho = () => {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const toggleCarrinho = () => {
    setCarrinhoAberto(!carrinhoAberto);
  };

  return (
    <>  
        <div className="componentCarrinho">
        <button id="carrinhoBtn" onClick={toggleCarrinho}>
        <div id="contadorItens">2</div>
            <img src="src\components\Carrinho\assets\carrinho.png" alt="" />
        </button>
        <div className="carrinhoContainer">
            <div id="carrinho" style={{ display: carrinhoAberto ? 'block' : 'none' }}>
            <h2>Meu Carrinho</h2>
            <div className="linha"></div>
            <ul className="itemContainer">
                <li className="item">
                <img src="src\components\Carrinho\assets\produto1.png" alt="Foto do Produto" />
                Tênis Nike Revolution 6 Next Nature Masculino
                </li>
                <span className="preco">R$ 219,00<span className="desconto">R$ 219,00</span></span>
                <li className="item">
                <img src="src\components\Carrinho\assets\produto1.png" alt="Foto do Produto" />
                Tênis Nike Revolution 6 Next Nature Masculino
                </li>
                <span className="preco">R$ 219,00<span className="desconto">R$ 219,00</span></span>
            </ul>
            <div className="linha"></div>
            <h2 className="total">Valor total: <span>R$ 438,00</span></h2>
            <div className="btnContainer">
                <button className="esvaziarBtn">Esvaziar</button>
                <button className="vCarrinhoBtn">Ver Carrinho</button>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default Carrinho;
