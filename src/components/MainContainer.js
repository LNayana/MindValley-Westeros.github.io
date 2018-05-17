import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProductsGallery from './ProductsGallery';
import WhitesLists from './WhitesLists';
import APIAplication from './APIAplication';
import NotFound from './NotFound';


const MainContainer = () => {
	return (
		<div>
		   <div className="col-10">
			  <Switch>
				 <Route path="/" component={ProductsGallery} exact={true} />
				 <Route path="/whiteslists" component={WhitesLists} />
				 <Route path="/apiapplication" component={APIAplication} />
				 <Route component={NotFound} />
			  </Switch>
		   </div>
		</div>
	);
};

export default MainContainer;