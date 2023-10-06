"use client";

import { useState, useEffect } from "react";

const Post = ({ name, image, summary }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const storedLikeCount = localStorage.getItem("likeCount");
    if (storedLikeCount) {
      setLikeCount(parseInt(storedLikeCount));
    }
  }, []);

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => {
      const newLikeCount = prevIsLiked ? likeCount - 1 : likeCount + 1;
      localStorage.setItem("likeCount", newLikeCount.toString());
      setLikeCount(newLikeCount);
      return !prevIsLiked;
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-white border-b border-gray-200 rounded-md shadow-md w-96">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] mb-2">
          {name}
        </h1>
        <div className="flex items-center space-x-2">
          <button onClick={toggleLike}>
            <svg
              className={`w-6 h-6 ${
                isLiked ? "text-gray-200" : "text-gray-800"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
            </svg>
          </button>
          <span className="text-sm text-gray-800">{likeCount}</span>
        </div>
      </div>
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-48 mb-4 rounded-md"
      />
      <p className="text-gray-800">{summary}</p>
    </div>
  );
};

export default Post;
