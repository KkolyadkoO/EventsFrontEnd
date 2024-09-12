import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from '../pages/login/LoginPage';
import HomePage from '../pages/home/HomePage';
import RegisterPage from "../pages/registration/RegisterPage";
import ViewEvent from "../pages/viewEvent/ViewEvent";

const AppRoutes = () => {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />}> </Route>
                    <Route path='/login' element={<LoginPage />}> </Route>
                    <Route path='/register' element={<RegisterPage />}> </Route>
                    <Route path='/view_event' element={<ViewEvent />}> </Route>
				</Routes>
			</Router>
	);
};

export default AppRoutes;