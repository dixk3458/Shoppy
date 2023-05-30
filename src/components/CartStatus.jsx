import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="relative">
      <AiFillHeart className="text-3xl" />
      {products && (
        <p className="absolute -top-6 -right-4 w-6 h-6 text-center">
          {products.length}
        </p>
      )}
    </div>
  );
}
