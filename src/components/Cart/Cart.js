import './Cart.css'
import { useState } from 'react'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { useNotification } from '../../notification/notification'
import { createOrderAndUpdateStock } from '../../services/firebase/firestore'

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)

    const { setNotification } = useNotification()

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'Sebastian',
                phone: '123456789',
                email: 'sebastian@test.com'
            },
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
            <button onClick={() => clearCart()} className="Button">Cancelar compra</button>
            <button onClick={createOrder} className="Button">Confirmar Compra</button>
        </div>
    )
}

export default Cart