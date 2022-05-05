import { useState, useContext } from 'react' 
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/notification'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const { addItem, isInCart } = useContext(CartContext)
    const { setNotification } = useNotification()

    const handleOnAdd = (count) => {

        addItem({ id, name, price}, count)
        setNotification('success', 'Se agregaron correctamente los productos al carrito')
    }
        

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                { isInCart(id) ? <Link to='/cart' className='Option'>Ir al carrito</Link> :  <ItemCount onAdd={handleOnAdd} stock={stock}/> }
                
            </footer>
        </article>
    )
}

export default ItemDetail