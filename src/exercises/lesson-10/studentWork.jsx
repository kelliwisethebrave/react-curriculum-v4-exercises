import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Account from './pages/Account.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Checkout from './pages/Checkout.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { products as inventoryData } from './data/products.js';

export default function StudentWork() {
  const [user, setUser] = useState({
    isLoggedIn: true,
    firstName: 'Avery',
  });

  const [products] = useState(inventoryData);

  function toggleLogin() {
    setUser((u) => ({ ...u, isLoggedIn: !u.isLoggedIn }));
  }

  return (
    <div
      style={{
        fontFamily: 'system-ui, Arial',
        maxWidth: 900,
        margin: '0 auto',
      }}
    >
      <aside
        style={{
          padding: 12,
          marginTop: 8,
          background: '#fafafa',
          border: '1px solid #eee',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Debug Panel</h3>
        <p>
          Toggle login to test protected routing behavior. When logged out,
          typing <code>/account</code> should NOT show Account.
        </p>
        <button onClick={toggleLogin}>Toggle Logged In</button>
      </aside>

      <Header user={user} />

      <main style={{ padding: 12 }}>
        <Routes>
          <Route path="/" element={<Home user={user} products={products} />} />
          {user.isLoggedIn && (
            <Route path="account" element={<Account user={user} />} />
          )}
          <Route
            path="products/:id"
            element={<ProductDetails user={user} products={products} />}
          />
          <Route path="checkout" element={<Checkout user={user} />} />
          <Route path="*" element={<NotFound user={user} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
