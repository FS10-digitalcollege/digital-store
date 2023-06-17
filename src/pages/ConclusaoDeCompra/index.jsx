import React from 'react';
import CardInfo from '../../components/CardInfo';
import '../../components/CardInfo/style.css';


const ConclusaoDeCompra = () =>{
    return(
        <>
        <div className="container">
                <img src="src\pages\ConclusaoDeCompra\assets\image.png" alt="compra realizada" />
                <h1>Compra realizada com sucesso</h1>
        </div>
        <CardInfo></CardInfo>
        </>
    )


}

export default ConclusaoDeCompra;