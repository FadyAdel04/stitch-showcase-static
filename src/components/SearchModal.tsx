import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearch } from '@/contexts/SearchContext';
import { Search, X } from 'lucide-react';

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchTerm, setSearchTerm, searchResults, clearSearch } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        clearSearch();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, clearSearch]);

  const handleClose = () => {
    setIsOpen(false);
    clearSearch();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="hidden sm:flex"
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Modal Content */}
          <div className="relative bg-background rounded-lg shadow-medium w-full max-w-2xl max-h-[80vh] overflow-hidden">
            {/* Search Input */}
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <Search className="h-5 w-5 text-warm-gray" />
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="border-0 bg-transparent text-lg focus:ring-0 focus:outline-none"
                />
                <Button variant="ghost" size="icon" onClick={handleClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Search Results */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {searchTerm && searchResults.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-warm-gray">No products found for "{searchTerm}"</p>
                </div>
              )}

              {searchResults.length > 0 && (
                <div className="space-y-4">
                  <p className="text-sm text-warm-gray">
                    {searchResults.length} product{searchResults.length > 1 ? 's' : ''} found
                  </p>
                  <div className="grid gap-4">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={handleClose}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-sage-light/20 transition-smooth"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-charcoal">{product.name}</h3>
                          <p className="text-sm text-warm-gray capitalize">{product.category}</p>
                          <p className="text-lg font-semibold text-charcoal">${product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {!searchTerm && (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-warm-gray mx-auto mb-4" />
                  <p className="text-warm-gray">Start typing to search products</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;