import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import RegisterPage from "../pages/Registration";
import ViewEvent from "../pages/ViewEvent/ViewEvent";

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