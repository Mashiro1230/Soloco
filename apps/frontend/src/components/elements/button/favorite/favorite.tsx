"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const FavoriteButton = ({ initialFavorites = 0 }) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setFavorites(prevFavorites => isFavorited ? prevFavorites - 1 : prevFavorites + 1);
    setIsFavorited(prevIsFavorited => !prevIsFavorited);
  };

  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-1">
        <Star
          className="w-5 h-5 text-yellow-500 hover:text-yellow-600 active:text-yellow-700 cursor-pointer transition-colors"
          onClick={handleFavorite}
          fill="currentColor"
        />
        <span className="text-yellow-600">{favorites}</span>
      </div>
    </div>
  );
};

export default FavoriteButton;