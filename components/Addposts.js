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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
    if (!postObject.name || !postObject.image || !postObject.summary) {
      alert('Please fill in all the required fields.');
      return;
    }
    await fetchImage(); 
    addPostInParent(postObject);
    setPostObject({
      name: "",
      image: "",
      summary: "",
    });
    setImageFetched(false);  
  };

  return (
    
            
    <form className='flex flex-col items-center gap-4 p-4 mx-auto bg-white border-b border-gray-200 rounded-md shadow-md w-96' onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-600 bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size]'>Add Social Post</h2>
      <input
        type='text'
        placeholder='Title'
        className='w-full p-2 mt-2 border-0 rounded-md focus:outline-none focus:ring focus:border-gray-300'
        onChange={(event) => {
          setPostObject({ ...postObject, name: event.target.value });
        }}
        value={postObject.name}
      />
      <input
        type='url'
        placeholder='Image URL'
        className='w-full p-2 mt-2 border-0 rounded-md focus:outline-none focus:ring focus:border-gray-300'
        onChange={(event) => {
          setPostObject({ ...postObject, image: event.target.value });
          setImageFetched(false);  
        }}
        value={postObject.image}
      />
      {postObject.image && postObject.image.length > 0 && imageFetched && (  
        <img src={postObject.image} alt='Preview' className='object-cover w-48 h-48 mt-2 mb-4 rounded-md' />
      )}
      <input
        type='text'
        placeholder='Summary'
        className='w-full p-2 mt-2 border-0 rounded-md focus:outline-none focus:ring focus:border-gray-300'
        onChange={(event) => {
          setPostObject({ ...postObject, summary: event.target.value });
        }}
        value={postObject.summary}
      />
      <button type="submit" className='px-4 py-2 mt-2 text-white rounded-md bg-gradient-to-r from-orange-500 to-purple-600 hover:bg-gray-950-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>Add Post</button>
    </form>
    
  );
};

export default AddPosts;
