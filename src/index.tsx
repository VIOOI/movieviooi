import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';

import App from './App';
import { MoviesPage } from './Movies'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={ <App /> } />
			<Route path=':id' element={ <MoviesPage /> } />
		</Routes>
	</BrowserRouter>
);
