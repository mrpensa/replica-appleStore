import './ItemListContainer.css'
import { useState, 
    useEffect 
} from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'
// import { getProducts } from '../../services/firebase/firestore'
import { Link, useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { useNotification } from '../../notification/notification'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const { setNotification } = useNotification()

    useAsync(
        setLoading, 
        () => getProducts(categoryId), 
        setProducts, 
        () => setNotification('error', 'Hubo un error al cargar los productos'), 
        [categoryId]
    )

    // useEffect(() => {
    //     setLoading(true)
        
    //     getProducts(categoryId).then(items => {
    //         setProducts(items)
    //     }).catch(err  => {
    //         console.log(err)
    //     }).finally(() => {
    //         setLoading(false)
    //     })
        

    //     return (() => {
    //         // setProducts([])
    //     })          
    // }, [categoryId])

    if(loading) {
        return (
            <>
                <h1>Cargando...</h1>
            </>
        )
    }
    
    if(products.length === 0) {
        return <h1>No se encontraron productos!</h1>
    }
    
    return (
        <div className="ItemListContainer">
            <Link to='/cart'>Cart</Link>
            <ItemList products={products}/> 
        </div>
    )    
    
}


export default ItemListContainer