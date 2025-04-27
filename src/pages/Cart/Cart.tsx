import {useState, useEffect} from 'react'
import { CartItem } from '../../types';
import {toast} from 'react-toastify'

const Cart = () => {
       const [cart, setCart] = useState<CartItem[]>(()=>{
            const stored = localStorage.getItem('cart');
            return stored? JSON.parse(stored): []
        })


    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const increaseQty =(id: number) =>{
        setCart((prev)=>
            prev.map((item)=>
           item.id=== id? {...item, quantity: item.quantity+ 1} : item ))
    }

    const decreaseQty =(id: number) =>{
        setCart((prev)=>
        prev.map((item)=>
        item.id=== id&& item.quantity>1 ? {...item, quantity: item.
        quantity- 1} : item ))
    }

    const removeItem =(id: number) =>{
        const item = cart.find((p) => p.id===id);
        setCart((prev) => prev.filter((item)=> item.id !==id));
        if(item) toast.error(`${item.name} removed from cart`)
    }

const total = cart.reduce((sum, item)=> sum+item.price * item.quantity, 0);

  return (
    <div>
        <h2>Your Cart</h2>
    cart.length === 0? (
    ) : (
        <ul>
            {cart.map((item)=>(
                <li key={item.id} style={{marginBottom:'1rem'}}>
                    <strong> {item.name}</strong> -${item.price.toFixed(2)} x {item.quantity}

                    <div>
                        <button onClick={() => decreaseQty(item.id)}
                            disabled={item.quantity<=1}>-</button>
                            <button onClick={() => increaseQty(item.id)}
                            disabled={item.quantity<=1}>+</button>
                            <button onClick={() => removeItem(item.id)}
                            style={{color:'red', marginLeft:'1rem'}}>Remove</button>
                    </div>
                </li>
            ))}
        </ul>
    )
    <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  )
}

export default Cart