import './ItemList.css'
import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div>
            <img className='hero' src='https://hablando-de-manzanas.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/portada_actualizacion.jpg' alt='hero'></img>
            <ul className='ListGroup' onClick={() => console.log('Hice click en ItemList')}>
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </ul>
        </div>
    )
}

export default memo(ItemList)