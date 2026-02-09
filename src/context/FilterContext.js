'use client'

import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
    const [filters, setFilters] = useState({
        type: 'All',
        location: '',
        minPrice: 0,
        maxPrice: 100000000,
        beds: 'Any'
    });

    const updateFilter = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            type: 'All',
            location: '',
            minPrice: 0,
            maxPrice: 100000000,
            beds: 'Any'
        });
    };

    return (
        <FilterContext.Provider value={{ filters, updateFilter, resetFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilters = () => useContext(FilterContext);
