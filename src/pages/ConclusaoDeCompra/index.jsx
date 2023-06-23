import React from 'react';
import CardInfo from '../../components/CardInfo';
import '../../components/CardInfo/style.css';


const ConclusaoDeCompra = () =>{
    return(
        <>
        <div id="container">
            <div className='cardImg'>
                <img src="src\pages\ConclusaoDeCompra\assets\image.png" alt="compra realizada" />
                <h1>Compra realizada com sucesso!</h1>
            </div>
            
        <div className='linha'></div>
        <CardInfo></CardInfo>
        <div className='linha'></div>
        <CardInfo></CardInfo>
        <div className='linha'></div>
        <CardInfo></CardInfo>
        <div className='linha'></div>

        <div className='cardResumo'>
            <h4>Resumo de Compra</h4>
            <div className='cardResumoInfo'>
                <img src="src\pages\ConclusaoDeCompra\assets\tenis.png" alt="tenis" srcset="" />
                <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>
        </div>
        <div className='cardFooter'>
            <h2>Total</h2>
            <div>
                <span>R$ 219,00</span>
                <p>ou 10x de R$ 21,00 sem juros</p>
            </div>
        </div>
        <a href="">Imprimir recibo</a>
        </div>
        </>
    )


}

export default ConclusaoDeCompra;