import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePage from '../pages/page';

const AppRoutes = () => {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />}>
						
					</Route>
                    <Route path='/login' element={<LoginPage />}>
                    </Route>
				</Routes>
			</Router>
	);
};

export default AppRoutes;