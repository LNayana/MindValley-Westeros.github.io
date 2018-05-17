import React from 'react';

const ProductsList = (props) => {
	const renderImage = (product) => {
    return (
		<div className="responsive" key={product.name}>
		   <div className="gallery">
			  <img src={ product.url } alt={product.name} />
			  <h5 className="title">{product.title}</h5>
			  <p className="subtitle">{product.subtitle}</p>
			  <a href="#"></a>
		   </div>
		</div>
    );
  };
	
	return ( 
		<div className="image-container">
		   {props.products.map(product => renderImage(product))}
		</div>
	);
};

export default ProductsList;