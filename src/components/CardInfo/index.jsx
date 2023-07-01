import React from "react";
import './style.css';

const CardInfo = ({itens}) =>{
    return(
        <>
        <div className="card">
                   {itens.map(item => (
                        <h4>{item.nome}</h4>, 
                        <div className="info"><span>{item.titulo}</span><p>{item.texto}</p></div>
                    ))
                }   
        </div>
        </>
    )

}
export default CardInfo;