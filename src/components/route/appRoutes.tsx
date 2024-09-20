import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import RegisterPage from "../pages/Registration";
import ViewEvent from "../pages/ViewEvent/ViewEvent";
import RegistrationOnEventPage from "../pages/RegistrationOnEventPage";
import {ReactElement, useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import ProfilePage from "../pages/ProfilePage";
import {observer} from "mobx-react-lite";

interface PrivateRouteProps {
    element: ReactElement;
    isAuthenticated: boolean;
    loading: boolean;
}

const PrivateRoute = ({ element, isAuthenticated, loading }: PrivateRouteProps) => {
    if (loading) {
        return <div>Loading...</div>;  // Показать лоадер во время загрузки
    }
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
    const {store} = useContext(Context);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const checkAuth = async () => {
            if (localStorage.getItem("accessToken")) {
                await store.checkAuth();
            }
            setLoading(false);  // Загрузка завершена
        };
        checkAuth();
    }, [store]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}> </Route>
                <Route path='/login' element={<LoginPage/>}> </Route>
                <Route path='/register' element={<RegisterPage/>}> </Route>
                <Route path='/view_event/:id' element={<ViewEvent/>}> </Route>
                <Route
                    path="/registration_on_event/:id"
                    element={<PrivateRoute element={<RegistrationOnEventPage />} isAuthenticated={store.isAuth} loading={loading} />}
                />
                <Route
                    path="/profile"
                    element={<PrivateRoute element={<ProfilePage />} isAuthenticated={store.isAuth} loading={loading} />}
                />
            </Routes>
        </Router>
    );
};

export default observer(AppRoutes);