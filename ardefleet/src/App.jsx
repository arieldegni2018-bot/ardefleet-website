import { useState } from 'react';
import './App.css';

  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      backgroundColor: '#f4f6f4', 
      color: '#1b4332', 
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif',
      padding: '40px 20px',
      textAlign: 'center' 
    }}>
      {/* Header / Logo section */}
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', margin: '10px 0', color: '#1b4332' }}>
        ARDE FLEET
      </h1>
      <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#c68b59', marginBottom: '40px' }}>
        Reliable. Efficient. Everywhere.
      </p>

      {/* Main Services Banner Section */}
      <div style={{ 
        backgroundColor: '#1b4332', 
        color: '#ffffff', 
        padding: '30px', 
        borderRadius: '10px', 
        maxWidth: '800px', 
        margin: '0 auto 40px auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#c68b59', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Our Fleet Services
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '15px',
          fontSize: '1.1rem',
          fontWeight: '500'
        }}>
          <div>🚚 Local Delivery</div>
          <div>📦 Furnishings Delivery</div>
          <div>🚬 Vape & Smoke Shop</div>
          <div>🛞 Tire Distribution</div>
          <div>🛣️ Interstate Delivery</div>
        </div>
      </div>
    </div>
  );
export default App