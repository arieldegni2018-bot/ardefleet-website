const shipments = [
  {
    id: 1,
    customer_name: 'Northwind Traders',
    pickup_location: 'Seattle, WA',
    status: 'In transit',
  },
  {
    id: 2,
    customer_name: 'BluePeak Logistics',
    pickup_location: 'Denver, CO',
    status: 'Scheduled',
  },
  {
    id: 3,
    customer_name: 'Summit Retail Group',
    pickup_location: 'Dallas, TX',
    status: 'Delivered',
  },
];

const pool = {
  async query() {
    return { rows: shipments };
  },
};

export default pool;
