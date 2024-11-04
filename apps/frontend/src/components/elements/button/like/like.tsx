"use client";

import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const LikeButton = ({ initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
    setIsLiked(prevIsLiked => !prevIsLiked);
  };


  return (
    <div className="flex space-x-4">
      <div className="flex items-center space-x-1">
        <Heart
          className="w-5 h-5 text-red-500 hover:text-red-700 active:text-red-800 cursor-pointer transition-colors"
          onClick={handleLike}
          fill="currentColor"
        />
        <span className="text-red-700">{likes}</span>
      </div>
    </div>
  );
};

export default LikeButton;