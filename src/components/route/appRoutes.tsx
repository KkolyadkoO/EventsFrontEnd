import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import RegisterPage from "../pages/Registration";
import ViewEvent from "../pages/ViewEvent/ViewEvent";
import RegistrationOnEventPage from "../pages/RegistrationOnEventPage";

const AppRoutes = () => {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />}> </Route>
                    <Route path='/login' element={<LoginPage />}> </Route>
                    <Route path='/register' element={<RegisterPage />}> </Route>
                    <Route path='/view_event/:id' element={<ViewEvent />}> </Route>
                    <Route path='/registration_on_event/:id' element={<RegistrationOnEventPage />}> </Route>
                    <Route path='/profile' element={<RegistrationOnEventPage />}> </Route>
				</Routes>
			</Router>
	);
};

export default AppRoutes;