import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	</BrowserRouter>
);
