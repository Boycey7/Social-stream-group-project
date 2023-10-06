"use client";
import React from 'react';
import Nav from '../components/Nav'; // Import the Nav component

const HomePage = () => {
  return (
    <div>
      <Nav /> {/* Include the Nav component */}
     
      <main className="container p-4 mx-auto">
        {/* Main content */}
        <section className="p-4 bg-white shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Social Card Here</h2>
          {/* Placeholder for the social card component under here */}
          
          
        </section>
      </main>
      <footer className="p-4 bg-gray-300">
        {/* Footer content */}
        <p className="text-white">&copy; Footer</p>
      </footer>
    </div>
  );
};

export default HomePage;
