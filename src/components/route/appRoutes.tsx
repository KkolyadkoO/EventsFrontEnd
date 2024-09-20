import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import RegisterPage from "../pages/Registration";
import ViewEvent from "../pages/ViewEvent/ViewEvent";
import RegistrationOnEventPage from "../pages/RegistrationOnEventPage";
import {useContext, useEffect} from "react";
import {Context} from "../../index";


const PrivateRoute = ({ element, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            store.checkAuth();
        }
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}> </Route>
                <Route path='/login' element={<LoginPage/>}> </Route>
                <Route path='/register' element={<RegisterPage/>}> </Route>
                <Route path='/view_event/:id' element={<ViewEvent/>}> </Route>
                <Route
                    path="/registration_on_event/:id"
                    element={<PrivateRoute element={<RegistrationOnEventPage />} isAuthenticated={isAuthenticated} />}
                />
                <Route path='/profile' element={<RegistrationOnEventPage/>}> </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;