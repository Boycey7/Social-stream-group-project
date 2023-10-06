"use client"
import React, { useState, useEffect } from 'react';
import AddPosts from '@/components/Addposts';
import Footer from '@/components/Footer';
import Post from "@/components/cards/Post";

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "hello",
      image: "image",
      summary: "summary",
    },
    {
      id: 2,
      name: "hello1",
      image: "image1",
      summary: "summary1",
    },
    {
      id: 3,
      name: "hello2",
      image: "image2",
      summary: "summary2",
    },
  ]);

  const addPostHandler = (post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
        {posts.map((post) => (
          <Post
            name={post.name}
            image={post.image}
            summary={post.summary}
            key={post.id}
          />
        ))}
      </div>
      <main className="p-6">
        <AddPosts
          addPostInParent={(post) => {
            addPostHandler(post);
          }}
        />
              </main>
      <Footer />
    </div>
  );
}
