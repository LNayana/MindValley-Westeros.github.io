import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import MainContainer from '../components/MainContainer';


const AppRouter = () => {
	return (
		<BrowserRouter>
			<div className="bodyContainer">
				<Header />
				<div className="row">
					<SideBar />
					<MainContainer />	
				</div>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;