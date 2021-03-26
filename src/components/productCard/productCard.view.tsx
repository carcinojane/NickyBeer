import React from 'react';
import "./productCard.style.css";
import productImg from '../../assets/images/product.jpg';

const ProductCard=(props:{
   product:{ id:number,
    name:string,
    price:number,
    desc:string}
})=>{
    const {product}=props;
    return(
    <div className="card">
        <img src={productImg} alt="Denim Jeans" style={{width:"100%"}}></img>
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p>{product.desc}</p>
        <p><button>Add to Cart</button></p>
    </div>
    );
};

export default ProductCard;