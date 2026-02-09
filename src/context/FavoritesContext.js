'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('sahil_estates_favorites');
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, []);

    // Save favorites to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('sahil_estates_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (propertyId) => {
        setFavorites(prev => {
            if (prev.includes(propertyId)) {
                return prev.filter(id => id !== propertyId);
            } else {
                return [...prev, propertyId];
            }
        });
    };

    const isFavorite = (propertyId) => favorites.includes(propertyId);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => useContext(FavoritesContext);
