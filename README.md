# National Land Acquisition & Management System (LAMS) - Frontend Dashboard

A React + Next.js (App Router) + Tailwind CSS **Map-First Command Center** for real-time land acquisition monitoring under the RFCTLARR Act, 2013.

## Features
- **Interactive Spatial Map:** Color-coded land parcels (`PROPOSED`, `NOTIFIED_SEC11`, `OBJECTION_PENDING`, `COMPENSATED`, `POSSESSED`) with layer toggles (Forest Buffers, Highway Corridor).
- **Real-Time KPI Strip:** Live metrics for Notified Area (Ha), Compensation Disbursed (₹ Cr), Pending Objections, and Possession %.
- **Parcel Inspector Drawer:** Click any parcel on the map to view owner details, compensation breakdown (Base + 100% Solatium), and advance its statutory stage in real time.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.
