import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useProducts, Product } from '@/data/products';

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: Product[];
  isSearching: boolean;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: products = [], isLoading } = useProducts();

  const searchResults = searchTerm && !isLoading
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.material.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const isSearching = searchTerm.length > 0;

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      searchResults,
      isSearching,
      clearSearch,
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};