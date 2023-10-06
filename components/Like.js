"use client"
import React, { useState, useEffect } from "react";

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const storedLikeCount = localStorage.getItem('likeCount');
    if (storedLikeCount) {
      setLikeCount(parseInt(storedLikeCount));
    }
  }, []);


  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
    if (!isLiked) {
    const updatedLikeCount = likeCount + 1;
      setLikeCount(updatedLikeCount);
         localStorage.setItem('likeCount', updatedLikeCount.toString());
    }
  };

  return (
    <div className="flex justify-center p-5">
      <button onClick={toggleLike}>
        <svg
          className={`w-6 h-6 ${isLiked ? "text-blue-800" : "text-gray-800"}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path
            d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"
          />
        </svg>
      </button>
      <span style={{ marginLeft: '0.5rem' }}>{likeCount}</span>
    </div>
  );
};

export default Like;
