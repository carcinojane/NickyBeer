import React from 'react';
import ProductCard from './productCard.view';

export const ProductCardContainer:React.FC=()=>{
    const product={
        id:1,
        name:"Beer Box",
        price:29.9,
        desc:"Nicky's favorites. Please beer with Nicky."
    }
    return(
        <ProductCard product={product}/>
    )
}