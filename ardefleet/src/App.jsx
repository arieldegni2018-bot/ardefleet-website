import { useState } from 'react';
import './App.css';
import logo from './assets/ARDE LOGO.jpg';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      backgroundColor: '#f4f4f4',
      color: '#334332',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <div style={{ padding: '20px' }}>
        <img src={logo} alt="ARDE FLEET Logo" style={{ maxWidth: '300px', height: 'auto', marginBottom: '20px' }} />
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', fontWeight: '500' }}>
          Reliable. Efficient. Everywhere.
        </p>
      </div>

      <div style={{
        backgroundColor: '#334332',
        color: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '800px',
        margin: '0 auto 40px auto',
        boxShadow: '4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#ec6859', marginBottom: '20px', textTransform: 'uppercase' }}>
          Our Fleet Services
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '15px',
          fontSize: '1.1rem',
          fontWeight: '500'
        }}>
          <div>Local Delivery</div>
          <div>Furnishings Delivery</div>
          <div>Vape & Smoke Shop</div>
          <div>Tire Distribution</div>
          <div>Interstate Delivery</div>
        </div>
      </div>
    </div>
  );
}