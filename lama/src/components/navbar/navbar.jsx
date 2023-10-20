import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

function Navbar() {
	return (
		<div className='navbar'>
			<div className='left'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span>Lamasocial</span>
				</Link>
				<HomeOutlinedIcon />
				<DarkModeOutlinedIcon />
				<GridViewOutlinedIcon />
				<div className='search'>
					<SearchOutlinedIcon />
					<input type='text' placeholder='Search...'></input>
				</div>
			</div>
			<div className='right'>
				<PersonOutlineOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsNoneOutlinedIcon />
				<div className='user'>
					<img
						src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						alt=''
					/>
					<span>John Doe</span>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
