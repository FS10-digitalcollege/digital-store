import { Outlet } from 'react-router-dom'
import Footer from './../../components/Footer';
import Carrinho from '../../components/Carrinho';

const PageLayout = () => {
    return(
        <>
            <Carrinho/>
            {/* <Outlet />
            <Footer /> */}
        </>
    )
}

export default PageLayout;