import './NavBar.css'
import { useContext, useState, useEffect } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { getCategories } from '../../services/firebase/firestore' 
import { orderCategories } from './helpers'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    const { getQuantity } = useContext(CartContext)

    useEffect(() => {
        getCategories().then(categories => {
            orderCategories(categories)
            setCategories(categories)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <nav className="NavBar" >
          <Link to='/'>
              <h3>Ecommerce</h3>
          </Link>
          <div className="Categories">
              {
                  categories.map(cat => 
                      <NavLink 
                          key={cat.id} 
                          to={`/category/${cat.id}`} 
                          className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}
                      >
                          {cat.description}
                      </NavLink>)
              }
          </div>
          <div>
            { getQuantity() > 0 && <CartWidget /> }
          </div>
        
        </nav>
    )
}

export default NavBar