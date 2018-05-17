import React from 'react';

const Search = () => {
	return (
		<div>
		   <form id="search-form">
			  <div className="search">
				 <input type="text" name="search" className="round" placeholder="Type to Search...." />
				 <i id="filtersubmit" className="fa fa-search"></i>
			  </div>
		   </form>
		</div>
	);
};

export default Search;