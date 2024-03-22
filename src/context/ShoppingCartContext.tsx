// ShoppingCartContext.tsx
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ShoppingCartContextType {
    cartItemCount: number;
    addToCart: () => void;
    removeFromCart: () => void;
    resetCart: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const useShoppingCartContext = (): ShoppingCartContextType => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error('useShoppingCartContext must be used within a ShoppingCartProvider');
    }
    return context;
};

export const ShoppingCartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItemCount, setCartItemCount] = useState<number>(0);

    const addToCart = () => {
        setCartItemCount(prevCount => prevCount + 1);
    };

    const removeFromCart = () => {
        setCartItemCount(prevCount => Math.max(prevCount - 1, 0));
    };

    const resetCart = () => {
        setCartItemCount(0);
    };

    return (
        <ShoppingCartContext.Provider value={{ cartItemCount, addToCart, removeFromCart, resetCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
