import './index.css'

const Carrinho = () => {
    return(
        <>
            <button id="abrirCarrinho"><img src="src\components\Carrinho\assets\carrinho.png" alt="" /></button>
            <div id="carrinho">
            <h2>Meu Carrinho</h2>
            <div className="linha"></div>
            <ul>
                <li className="item"><img src="src\components\Carrinho\assets\produto1.png" alt="Foto do Produto" />
                Tênis Nike Revolution 6 Next Nature Masculino
               </li>
               <span className="preco">R$ 219,00<span className="desconto">R$ 219,00</span></span>
               <li className="item"><img src="src\components\Carrinho\assets\produto1.png" alt="Foto do Produto" />
                Tênis Nike Revolution 6 Next Nature Masculino
               </li>
               <span className="preco">R$ 219,00<span className="desconto">R$ 219,00</span></span>
            </ul>
            <div className="linha"></div>
            <h2 className="total">Valor total: <span>R$ 438,00</span></h2>
            <button className="esvaziar">Esvaziar</button>
            <button className="vCarrinho">Ver Carrinho</button>
            </div>
        </>
    );
}

export default Carrinho;