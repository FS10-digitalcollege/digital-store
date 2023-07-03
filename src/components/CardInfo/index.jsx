import React from "react";
import './style.css';

const CardInfo = ({itens,title}) =>{
    return(
        <>
        <div className="card">
            <h4>{title}</h4> 
                   {itens.map(item => (
                        <div className="info"><span>{item.titulo}</span><p>{item.texto}</p></div>
                    ))
                }   
        </div>
        </>
    )

}
export default CardInfo;