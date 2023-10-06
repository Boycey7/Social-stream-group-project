"use client";
import React from 'react';
import AddPosts from '@/components/Addposts';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <main className="p-6">
        <AddPosts />
      </main>
      <Footer />
    </div>
  );
}
