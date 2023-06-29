import { Outlet } from 'react-router-dom'
import Footer from './../../components/Footer';
import Carrinho from '../../components/Carrinho';

const PageLayout = () => {
    return(
        <>
            <span style={{display: 'flex', marginTop: '16px'}}>Aqui fica o componente da parte superior e depois vem o carrinho<Carrinho/></span>
            <Outlet />
            <Footer />
        </>
    )
}

export default PageLayout;