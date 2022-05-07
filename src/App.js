import './App.css';
// import { useState, createContext } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/notification'


const App = () => {
    return (
        <div className="App">
            <NotificationProvider>
                <CartContextProvider>          
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<ItemListContainer greeting={'Hola Coder'}/>}/>
                            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Hola Coder'}/>} />
                            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />
                        </Routes>
                    </BrowserRouter>
                </CartContextProvider>
            </NotificationProvider>
        </div>
    );
}


export default App;
