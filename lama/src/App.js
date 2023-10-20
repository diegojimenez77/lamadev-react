import { Link, Outlet, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';
import LeftBar from './components/leftBar/leftBar';
import RightBar from './components/rightBar/rightBar.jsx';

function App() {
	const Layout = () => {
		return (
			<div>
				<Navbar />
				<div style={{ display: 'flex' }}>
					<LeftBar />
					<Outlet />
					<RightBar />
				</div>
			</div>
		);
	};

	const currentUser = true;

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to='/login' />;
		}

		return children;
	};

	return (
		<div>
			<h1>
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			</h1>
			<div>
				<Link to='/login'>Login</Link>
			</div>
			<div>
				<Link to='/register'>Register</Link>
			</div>
		</div>
	);
}

export default App;
