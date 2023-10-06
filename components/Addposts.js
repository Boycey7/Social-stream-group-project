"use client"
import React, { useState, useEffect } from 'react';

const AddPosts = ({ addPostInParent }) => {
  const [postObject, setPostObject] = useState({
    name: "",
    image: "",
    summary: "",
  });

  const [imageFetched, setImageFetched] = useState(false);

  const fetchImage = async () => {
    try {
      const response = await fetch(postObject.image);
      if (response.ok) {
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setPostObject({ ...postObject, image: objectURL });
        setImageFetched(true);  
      } else {
        console.error('Failed to fetch image. Response status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    if (postObject.image && !imageFetched) {
      fetchImage();
    }
  }, [postObject.image, imageFetched]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    if (!postObject.name || !postObject.image || !postObject.summary) {
      alert('Please fill in all the required fields.');
      return;
    }
    fetchImage(); 
    addPostInParent(postObject);
    setPostObject({
      name: "",
      image: "",
      summary: "",
         });
    setImageFetched(false);  
  };

  return (
    <form className='flex flex-col items-center justify-center p-4 bg-gray-200 rounded-md' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Title'
        className='p-2 border-gray-200 rounded-md'
        onChange={(event) => {
          setPostObject({ ...postObject, name: event.target.value });
        }}
        value={postObject.name}
      />
      <input
        type='url'
        placeholder='Image URL'
        className='p-2 border-gray-200 rounded-md'
        onChange={(event) => {
          setPostObject({ ...postObject, image: event.target.value });
          setImageFetched(false);  
        }}
        value={postObject.image}
      />
      {postObject.image && postObject.image.length > 0 && imageFetched && (  
        <img src={postObject.image} alt='Preview' className='mt-2 rounded-md' style={{ width: '100px', height: '100px' }} />
      )}
      <input
        type='text'
        placeholder='Summary'
        className='p-2 border-gray-200 rounded-md'
        onChange={(event) => {
          setPostObject({ ...postObject, summary: event.target.value });
        }}
        value={postObject.summary}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPosts;