import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const HomePage = () => {
  return (
    <div>
    <Navbar/>
      <h1 className="text-3xl font-bold mb-4">Welcome to the Ecommerce Site</h1>
      <Link href="/products">
        <p className="text-blue-500 underline">Go to Products</p>
      </Link>
    </div>
  );
};

export default HomePage;
