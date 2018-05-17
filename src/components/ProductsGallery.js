import React from 'react';
import ProductsList from './ProductsList';

const productDetails = [
	{
		name:'product01',
		url:'../assets/src/contents/images/products/product01.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product02',
		url:'../assets/src/contents/images/products/product02.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product03',
		url:'../assets/src/contents/images/products/product03.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product04',
		url:'../assets/src/contents/images/products/product04.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product05',
		url:'../assets/src/contents/images/products/product05.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product06',
		url:'../assets/src/contents/images/products/product06.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product07',
		url:'../assets/src/contents/images/products/product07.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product08',
		url:'../assets/src/contents/images/products/product08.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product09',
		url:'../assets/src/contents/images/products/product09.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product10',
		url:'../assets/src/contents/images/products/product10.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product11',
		url:'../assets/src/contents/images/products/product11.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product12',
		url:'../assets/src/contents/images/products/product12.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product13',
		url:'../assets/src/contents/images/products/product13.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product14',
		url:'../assets/src/contents/images/products/product14.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	},
	{
		name:'product15',
		url:'../assets/src/contents/images/products/product15.jpg',
		title:'lorem ipsum',
		subtitle:'by random author'
	}
];

export default class ProductsGallery extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			products : productDetails
		};
	}
	render(){
		return (
			<div>
				<h5 className="heading">Products</h5>
                <hr />
				<ProductsList products={this.state.products} />
			</div>
		);
	}
}