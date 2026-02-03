# ⚡ Spectre Analytics (Hackathon 2026)

**Spectre Analytics** is a full-stack facility intelligence platform designed for large-scale enterprise energy management.
It combines real-time telemetry, AI-driven anomaly detection, and geospatial solar estimation to optimize energy consumption.


## 🚀 Key Features

### 1. 🔐 Secure Gateway (`Login Page.html` + `server.js`)
- **Full-Stack Auth:** User registration and login powered by **Node.js** and **MongoDB**.
- **JWT Authentication:** Secure session management using JSON Web Tokens.
- **Domain Logic:** Automatically detects corporate domains (e.g., `@google.com`, `@amazon.com`, `@apple.com`, `@netflix.com`, `@meta.com`, `@nmims.in`) to assign branch locations.
- ❌ Blocked: Public domains like `@gmail.com` or `@yahoo.com`.

### 2. 🏢 Floor Selection Interface (`floor_selection.html`)
- **Real-Time Load Visualization:** Interactive cards displaying power consumption (kW) per floor.
- **Smart Navigation:** Decodes user tokens to personalize the interface based on the user's assigned branch.

### 3. 📊 Command Dashboard (`dashboard.html`)
The core analytics engine featuring:
- **Live Telemetry:** Real-time `Chart.js` visualization of base load vs. total load.
- **Solar Intelligence:** Interactive **Leaflet.js** map with **India-specific Geofencing**.
    - Integrates with **Open-Meteo API** to calculate solar potential based on live weather data.
- **Anomaly Detection:** Simulated diagnostic scans to identify server overloads or HVAC inefficiencies.
- **Financial Projections:** Forecasts cost savings from optimization strategies.

## 🛠️ Tech Stack

- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS, Chart.js, Leaflet.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Local instance)
- **Authentication:** JWT (JSON Web Tokens)
- **External APIs:** Open-Meteo (Weather/Solar data)

## 📂 Project Structure


hackathon_1-2026/
├── Login Page.html       # Frontend: Auth Entry Point
├── floor_selection.html  # Frontend: Floor Navigation
├── dashboard.html        # Frontend: Main Analytics Engine
├── server.js             # Backend: Express Server & Auth Logic
├── package.json          # Dependencies
└── README.md             # Documentation


⚙️ Installation & Setup
Prerequisites
Node.js installed.
MongoDB installed and running locally on port 27017.

Steps
1. Clone the repository
   Bash : git clone https://github.com/aarush2517/hackathon_1-2026.git
   
   then : cd hackathon_1-2026
   
2. Install Backend Dependencies
   Bash : npm install
   
   (Ensure express, mongoose, cors, dotenv, and jsonwebtoken are in your package.json)

3. Start the Server
   Bash : node server.js
   
   Server runs on: http://localhost:3000Database connects to:
   mongodb://127.0.0.1:27017/enterpriseDB

5. Launch the AppOpen Login Page.html in your browser (or use Live Server).

🧪 How to TestSign 
1. Up: Open the login page, switch to "Create Account," and register with a supported email domain (e.g., admin@google.com).
2. Login: Use your new credentials to sign in.
3. Explore: Select a floor to view the real-time analytics dashboard.
