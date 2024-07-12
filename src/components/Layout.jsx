import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl">Ecommerce Site</h1>
        <nav>
          <Link href="/cart">
            <a className="px-4 py-2 bg-blue-700 rounded">Cart</a>
          </Link>
        </nav>
      </header>
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
