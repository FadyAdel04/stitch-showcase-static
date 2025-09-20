import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '@/data/products';

interface WishlistState {
  items: Product[];
}

type WishlistAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_WISHLIST' };

const initialState: WishlistState = {
  items: [],
};

const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        return state; // Product already in wishlist
      }
      
      return { items: [...state.items, product] };
    }

    case 'REMOVE_ITEM': {
      const productId = action.payload;
      return { items: state.items.filter(item => item.id !== productId) };
    }

    case 'CLEAR_WISHLIST':
      return initialState;

    default:
      return state;
  }
};

interface WishlistContextType extends WishlistState {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const isInWishlist = (productId: string) => {
    return state.items.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{
      ...state,
      addItem,
      removeItem,
      clearWishlist,
      isInWishlist,
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};