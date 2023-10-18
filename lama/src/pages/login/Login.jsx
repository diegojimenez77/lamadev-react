import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='login'>
			<div className='card'>
				<div className='left'>
					<h1>Hello World</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
						eligendi corporis explicabo voluptas quisquam. Libero ipsum esse,
						aspernatur nisi velit voluptatem iste alias sit, ducimus fugiat ad
						est quidem odio!
					</p>
					<span>Create an accout</span>
					<Link to='/register'>
						<button>Register</button>
					</Link>
				</div>
				<div className='right'>
					<h1>Login</h1>
					<form>
						<input type='text' placeholder='Username' />
						<input type='text' placeholder='Password' />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
