# ARDE Fleet

## Run locally

1. Install dependencies with `npm install`.
2. In pgAdmin, create a PostgreSQL database named `ardefleet`.
3. Create a local `.env` file containing `DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/ardefleet`. URL-encode special characters in the password.
4. Initialize the shipments table with `npm run db:init`.
5. In one terminal, start the API with `npm start`.
6. In another terminal, start the frontend with `npm run dev`, then open the local address Vite prints.

Check the API and database connection at `http://localhost:5000/api/health`. Shipment data is available at `http://localhost:5000/api/shipments`.

The `.env` file is local and ignored by Git. Never commit or share its contents. If a password has been exposed, change the PostgreSQL password and update `.env`.
