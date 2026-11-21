import React, { useEffect, useState } from 'react';

export default function ShipmentList() {
  const [shipments, setShipments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getShipments() {
      try {
        const response = await fetch('/api/shipments');
        if (!response.ok) {
          const result = await response.json().catch(() => ({}));
          throw new Error(result.error || `Request failed (${response.status})`);
        }
        setShipments(await response.json());
      } catch (err) {
        console.error('Failed to load shipments:', err);
        setError(err.message || 'Unable to load shipments. Check that the backend is running.');
      }
    }
    getShipments();
  }, []);

  return (
    <div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Shipment Log</h1>
        {error && <p role="alert">{error}</p>}
        {!error && shipments.length === 0 && <p>No shipments found yet.</p>}
        {shipments.map((shipment) => (
          <div
            key={shipment.id}
            style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}
          >
            <h3>Customer: {shipment.customer_name}</h3>
            <p>Pickup: {shipment.pickup_location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}