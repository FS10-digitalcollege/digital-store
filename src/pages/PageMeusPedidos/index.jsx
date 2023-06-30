import { useState } from "react";
import styled from "styled-components";

const PageMeusPedidos = () => {

    const [positionActive, setPositionActive] = useState(1);
    const [menuActive, setMenuActive] = useState(false);

    return(
        <>
            <Container>
                <div>
                    <Master className={menuActive ? 'active' : ''}>
                        <li className={positionActive == 1 ? 'active' : ''} onClick={() => {setPositionActive(1);setMenuActive(!menuActive)}}>Meu perfil</li>
                        <li className={positionActive == 2 ? 'active' : ''} onClick={() => {setPositionActive(2);setMenuActive(!menuActive)}}>Meus pedidos</li>
                        <li className={positionActive == 3 ? 'active' : ''} onClick={() => {setPositionActive(3);setMenuActive(!menuActive)}}>Minhas informações</li>
                        <li className={positionActive == 4 ? 'active' : ''} onClick={() => {setPositionActive(4);setMenuActive(!menuActive)}}>Métodos de pagamento</li>
                    </Master>
                </div>
                <Slave>
                    {
                        positionActive === 1 &&
                        <li>
                            <h3>Meu perfil</h3>
                        </li>
                    }
                    {
                        positionActive === 2 &&
                        <li>
                            <h3>Meus pedidos <span>Status</span></h3>
                            <ul className="pedidos">
                                <li>
                                    <div className="image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>Pedido nº 2234981932</h6>
                                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>Pedido nº 2234981932</h6>
                                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>Pedido nº 2234981932</h6>
                                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>Pedido nº 2234981932</h6>
                                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>Pedido nº 2234981932</h6>
                                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                                    </div>
                                </li>
                                <li>
                                    <div className="image">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="info">
                                        <h6>Pedido nº 2234981932</h6>
                                        <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    }
                    {
                        positionActive === 3 &&
                        <li>
                            <h3>Minhas informações</h3>
                        </li>
                    }
                    {
                        positionActive === 4 &&
                        <li>
                            <h3>Métodos de pagamento</h3>
                        </li>
                    }
                </Slave>
                <BTN onClick={() => setMenuActive(!menuActive)}/>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 100px;
    display: flex;
    gap: 16px;
    background-color: #00000015;
    
    @media only screen and ( max-width: 600px ) {
        padding: 26px 16px;
        gap: 0;
    }
`;

const Master = styled.ul`
    width: 340px;
    background-color: #FFF;
    border-radius: 5px;
    padding: 30px;
    & li{
        line-height: 60px;
        transition-duration: 200ms;
        cursor: pointer;
        border-bottom: 1px solid #CCC;
    }
    & li:last-child{
        border: 0;
    }
    & li:hover{
        color: #C92071;
    }
    & li.active{
        font-weight: bold;
        color: #C92071;
    }

    @media only screen and ( max-width: 600px ) {
        width: 80%;
        height: 100%;
        position: fixed;
        top: 0;
        left: -100%;
        transition-duration: 200ms;
        &.active{
            left: 0;
        }
    }
`;

const Slave = styled.ul`
    background-color: #FFF;
    border-radius: 5px;
    padding: 30px;
    flex: 1;
    & li h3{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    & .pedidos li{
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px 0;
        border-top: 1px solid #CCC;
    } 
    & .pedidos li .image{
        width: 72px;
        height: 58px;
        background-color: #E2E3FF;
        border-radius: 5px;
    }

`;

const BTN = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
    position: fixed;
    bottom: 30px;
    right: 16px;
    display: none;

    @media only screen and ( max-width: 600px ) {
        display: block;
    }
`;

export default PageMeusPedidos;