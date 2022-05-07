import './Cart.css'
// import { useState } from 'react'
// import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { useNotification } from '../../notification/notification'
import { createOrderAndUpdateStock } from '../../services/firebase/firestore'
import React, { useContext, useState } from "react";

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)

    const { setNotification } = useNotification()

    const [values, setValues] = React.useState({
        email: "",
        name: "",
        phone: "",
      });
     
      function handleChange(evt) {
        
        const { target } = evt;
        const { name, value } = target;
        
        const newValues = {
          ...values,
          [name]: value,
        };
        setValues(newValues);
      }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: values,
            items: cart,
            total: getTotal()
        }

        createOrderAndUpdateStock(cart, objOrder).then(id => {
            clearCart()
            setNotification('success', `La orden se genero correctamente, su codigo de orden es: ${id}`)
        }).catch((error) => {
            if(error && error.name === 'outOfStockError' && error.products.length > 0) {
                const stringProducts = error.products.map(prod => prod.dataDoc.name).join(', ')

                setNotification('error', `${error.products.length > 1 ? 'Los productos' : 'El producto'} ${stringProducts} no ${error.products.length > 1 ? 'tienen' : 'tiene'} stock`)
            } else {
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })
    }
    
    if(loading) {
        return <h1>Se esta procesando la orden</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }
    

    return (
        
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <form onSubmit={createOrder}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        type="dirnameeccion"
        value={values.name}
        onChange={handleChange}
      />
       <label htmlFor="phone">Telefono</label>
      <input
        id="phone"
        name="phone"
        type="phone"
        value={values.phone}
        onChange={handleChange}
      />
            <button onClick={() => clearCart()} className="Button">Cancelar compra</button>
            <button type='submit' className="Button">Confirmar Compra</button>
    </form>
        </div>
    )
}

export default Cart