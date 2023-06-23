import React from "react";
import './style.css';

const CardInfo = () =>{
    return(
        <>
        <div className="card">
                <h4>Informaçoes pessoais</h4>
                <div className="info"><span>Nome:</span><p>João vitor</p></div>
                <div className="info"><span>CPF:</span><p>8898900000</p></div>
                <div className="info"><span>Celular:</span><p>(85)74748483</p></div>
                <div className="info"><span>Email:</span><p>hjuhujgg@jgjh.com</p></div>
        </div>
        </>
    )

}
export default CardInfo;