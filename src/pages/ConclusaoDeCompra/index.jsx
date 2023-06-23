import React from 'react';
import CardInfo from '../../components/CardInfo';
import '../../components/CardInfo/style.css';


const ConclusaoDeCompra = () =>{
    return(
        <>
        <div id="container">
            <div className='cardImg'>
                <img src="src\pages\ConclusaoDeCompra\assets\image.png" alt="compra realizada" />
                <h1>Compra realizada com sucesso</h1>
            </div>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        <CardInfo></CardInfo>
        </div>
        </>
    )


}

export default ConclusaoDeCompra;