import React, { useEffect, useState } from 'react';
import pool from './db.js';

export default function ShipmentList() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    async function getShipments() {
      try {
        const res = await pool.query('SELECT * FROM shipments;');
        setShipments(res.rows);
      } catch (err) {
        console.error(err.message);
      }
    }
    getShipments();
  }, []);

  return (
    <div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Shipment Log</h1>
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