import React from 'react';
import Nav from '../components/Nav'; // Import the Nav component

const HomePage = () => {
  return (
    <div>
      <Nav /> {/* Include the Nav component */}
      <header className="p-4 bg-blue-500">
        {/* Header content */}
        <h1 className="text-3xl font-bold text-white">Header</h1>
      </header>
      <main className="container p-4 mx-auto">
        {/* Main content */}
        <section className="p-4 bg-white shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Social Card Here</h2>
          {/* Placeholder for the social card component under here */}
          
          
        </section>
      </main>
      <footer className="p-4 bg-blue-500">
        {/* Footer content */}
        <p className="text-white">&copy; Footer</p>
      </footer>
    </div>
  );
};

export default HomePage;
