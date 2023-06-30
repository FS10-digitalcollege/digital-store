import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import { useContext } from 'react';
import { AuthContext } from '../App';
import AuthLayout from '../layouts/AuthLayout';
import PageHome from '../pages/PageHome';
import Login from '../pages/Login';
import PageMeusPedidos from '../pages/PageMeusPedidos';
import PageProdutos from '../pages/PageProdutos';

const Ways = () => {

    const { isLoggeg } = useContext(AuthContext);

    return(
        <BrowserRouter>
            <Routes>
                {
                    isLoggeg ? (
                        <Route path='/' element={<PageLayout />}>
                            <Route index element={<PageHome />} />
                            <Route path='/notifications' element={<PageHome />} />
                            <Route path='/meus-pedidos' element={<PageMeusPedidos />} />
                            <Route path='/produtos' element={<PageProdutos />} />
                        </Route>
                    ) : (
                        <Route path='/' element={<AuthLayout />}>
                            <Route index element={<Login />} />
                        </Route>
                    )
                }
            </Routes>
        </BrowserRouter>
    );
}

export default Ways;