import styled from "styled-components";


const PageProdutos = () => {
    return(
        <>
            <Container>
                <div className="esquerda">
                    <form>
                        <label>nome</label>
                        <input type="text" />
                        <label>email</label>
                        <input type="text" />
                        <button></button>
                    </form>
                </div>
                <div>
                    <div className="direita">
                        Resumo
                    </div>
                </div>
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
    & .esquerda{
        flex: 1;
        background-color: white;
        border-radius: 5px;
        padding: 30px;
    }
    & .esquerda form label{
        display: block;
        margin-bottom: 6px;
    }
    & .esquerda form input{
        width: 100%;
        height: 50px;
        margin-bottom: 16px;
        border-radius: 5px;
        background-color: #00000010;
    }
    & .direita{
        width: 350px;
        background-color: white;
        border-radius: 5px;
        padding: 30px;
    }
    
    @media only screen and ( max-width: 600px ) {
        padding: 26px 16px;
        gap: 0;
    }
`;

export default PageProdutos