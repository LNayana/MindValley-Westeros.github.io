import React from 'react';
import {NavLink} from 'react-router-dom';

const SideBar = () => {
	return (
		<div>
		   <div className="col-2 menu">
			  <ul className="menuList">
				 <li>
					<NavLink activeClassName='active' to="/" exact={true}> <i className="fa fa-archive" aria-hidden="true"></i><span className="menu-items">Products</span>
					</NavLink>
				 </li>
				 <li>
					<NavLink activeClassName='active' to="/whiteslists"><i className="icon ion-ios-copy"></i><span className="menu-items">Whiteslists</span></NavLink>
				 </li>
				 <li>
					<NavLink activeClassName='active' to="/apiapplication"><i className="fa fa-random" aria-hidden="true"></i><span className="menu-items">Api Application</span></NavLink>
				 </li>
			  </ul>
		   </div>
		</div>
	);
};

export default SideBar;