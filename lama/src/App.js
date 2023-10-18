import { Link } from 'react-router-dom';

function App() {
	return (
		<div>
			<h1>Home</h1>
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
