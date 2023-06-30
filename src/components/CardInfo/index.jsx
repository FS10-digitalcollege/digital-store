import React from "react";
import './style.css';

const CardInfo = ({props}) =>{
    return(
        <>
        <div className="card">
                <h4>Informaçoes pessoais</h4>
                <div className="info"><span>Nome:</span><p>{props}</p></div>
                <div className="info"><span>CPF:</span><p>{props}</p></div>
                <div className="info"><span>Celular:</span><p>{props}</p></div>
                <div className="info"><span>Email:</span><p>{props}</p></div>
        </div>
        </>
    )

}
export default CardInfo;