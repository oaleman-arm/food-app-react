import { Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navbar,Footer } from '../../ui';
import {FrutoPage, HomePage, SemillaPage, VegetalPage} from '../pages';
import {CartProvider} from "../context/CartContext";
import { SideCart } from '../components';

export const FoodRoutes = () => {
    const [cartOpen, setCartOpen] = useState(false);

    return(
            <CartProvider>
                <Navbar onOpenCart={() => setCartOpen(true)} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="vegetales" element={<VegetalPage />} />
                    <Route path="frutos" element={<FrutoPage />} />
                    <Route path="semillas" element={<SemillaPage />} />
                    <Route path="/*" element={<Navigate to="/inicio" />} />
                </Routes>
                <SideCart open={cartOpen} onClose={() => setCartOpen(false)}/>
                <Footer />
            </CartProvider>
    );
}