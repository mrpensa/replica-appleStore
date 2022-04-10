import './ItemList.css'
import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <ul className='ListGroup' onClick={() => console.log('Hice click en ItemList')}>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}

export default memo(ItemList)