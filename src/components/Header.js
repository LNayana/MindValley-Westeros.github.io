import React from 'react';
import Search from './Search';
import Profile from './Profile';

const Header = () => {
	return (
		<div>
		   <div className="row header">
			  <div className="col-2 logo">
				 <img src="../assets/src/contents/images/logo.jpg" alt="Logo" className="westeros-logo" />
			  </div>
			  <div className="col-10 searchbar">
				 <div className="row headerbar">
					<div className="col-3 no-padding v-middle">
					   <Search />
					</div>
					<div className="no-width no-padding right">
					   <Profile />
					</div>
				 </div>
			  </div>
		   </div>
		</div>
	);
};

export default Header;