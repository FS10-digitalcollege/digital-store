import React from 'react';
import CardInfo from '../../components/CardInfo';
import '../../components/CardInfo/style.css';


const ConclusaoDeCompra = () =>{
    let card1 = [
        {
            nome: "Informações Pessoais",
            titulo: "Nome",
            texto: "Joao vitor"
        },
        {
            titulo: "CPF",
            texto: "000.000.000-00"
        },
        {
            titulo: "Email",
            texto: "jvitormajdnd@hotamil.com"
        },
        {
            titulo: "Celular",
            texto: "(00) 00000-0000"
        }
    ]
    let card2 = [
        {
            nome: "Informações Pessoais",
            titulo: "Endereço",
            texto: "Rua expedicionarios, 1000"
        },
        {
            titulo: "Bairro",
            texto: "Bairro de Fatima"
        },
        {
            titulo: "Cidade",
            texto: "Fortaleza,CE"
        },
        {
            titulo: "CEP",
            texto: "00000-000"
        }
    ]
    
    let card3 = [
        {
            nome: "Informações Pessoais",
            titulo: "Titular do Cartão",
            texto: "Joao vitor"
        },
        {
            titulo: "Final",
            texto: "00*********"
        }
    ]

    return(
        <>
        <div id="container">
            <div className='cardImg'>
                <img src="src\pages\ConclusaoDeCompra\assets\image.png" alt="compra realizada" />
                <h1>Compra Realizada com sucesso!</h1>
            </div>
            
        <div className='linha'></div>
        <CardInfo itens={card1}></CardInfo>
        <div className='linha'></div>
        <CardInfo itens={card2}></CardInfo>
        <div className='linha'></div>
        <CardInfo itens={card3}></CardInfo>
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