import { Outlet } from 'react-router-dom'
import Footer from './../../components/Footer';

const PageLayout = () => {
    return(
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default PageLayout;