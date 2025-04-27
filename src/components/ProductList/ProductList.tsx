import React from 'react'
import { Product } from '../../types'


type Props={
    products:Product[];
    addToCart: (product:Product) =>void;
}

const ProductList: React.FC<Props> = ({products, addToCart}) => {
  return (
    <div>
        <h2>Products</h2>
        <div style={{display: 'flex', gap: '1rem'}}>
        {products.map((product)=> (
            <div key={product.id}  style={{border:' 1px solid #ccc', padding:'1rem'}}>
                <img src={product.image} alt={product.name} width={100}/>
                <h4>{product.name}</h4>
                <p>$ {product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        ))}
        </div>
        </div>
  )
}

export default ProductList