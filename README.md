# Weather Monitoring Application

This project is a real-time weather monitoring system that uses the OpenWeatherMap API to display weather data for different cities. The frontend is built with **React** and styled using **Tailwind CSS**, while the backend is implemented using **Express** to handle the API requests.

## Features

- Displays weather data (average, max, and min temperature) for multiple cities.
- Allows toggling between Celsius (°C) and Fahrenheit (°F).
- Data is fetched from the OpenWeatherMap API.
- Responsive and user-friendly interface built with Tailwind CSS.

---
## Demo


https://github.com/user-attachments/assets/5bc240d1-16fd-4e8f-8701-9f00cdc13178

---


## Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Project Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-monitoring-app.git
cd weather-monitoring-app
```bash
## 2. Install Dependencies
Backend
Navigate to the server directory:

bash
Copy code
cd server
Install the backend dependencies:

bash
Copy code
npm install
The backend uses these dependencies:

Express: For creating the server.
Cors: For handling cross-origin requests.
Axios: For making HTTP requests to the OpenWeatherMap API.
Install these dependencies:

bash
Copy code
npm install express cors axios
Frontend
Navigate to the client directory (using Vite for React):

bash
Copy code
cd ../client
Install the frontend dependencies:

bash
Copy code
npm install
The frontend uses:

Vite: For fast frontend development.
React: For building the UI.
Tailwind CSS: For styling.
Install these dependencies:

bash
Copy code
npm install react react-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
Configure Tailwind CSS by adding the following to the tailwind.config.js file:

js
Copy code
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
Add the Tailwind CSS imports to the src/index.css file:

css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
Environment Variables
Create an .env file in the server directory and add your OpenWeatherMap API key:

bash
Copy code
OPENWEATHER_API_KEY=your_openweathermap_api_key_here
Running the Application
1. Start the Backend Server
Navigate to the server directory and start the backend server:

bash
Copy code
cd server
npm start
The backend will run on http://localhost:5000.

2. Start the Frontend Development Server
Navigate to the client directory and start the Vite development server:

bash
Copy code
cd client
npm run dev
The frontend will run on http://localhost:5173.

Folder Structure
bash
Copy code
weather-monitoring-app/
│
├── server/               # Backend folder
│   ├── src/              # Backend source code
│   ├── index.js          # Main entry point for Express server
│   └── package.json      # Backend dependencies
│
├── client/               # Frontend folder
│   ├── src/              # Frontend source code
│   ├── App.jsx           # Main React component
│   ├── index.jsx         # React entry point
│   ├── index.css         # Tailwind CSS setup
│   └── package.json      # Frontend dependencies
│
└── README.md             # Project documentation
Additional Scripts
Backend
Start Backend: Run the backend server.
bash
Copy code
npm start
Frontend
Start Frontend: Run the Vite development server.
bash
Copy code
npm run dev
Technologies Used
Frontend:
React
Vite
Tailwind CSS
Backend:
Express.js
Axios
Cors
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contribution
Feel free to open issues or submit pull requests if you want to contribute. Fork the repository and follow best practices for Git workflows.

Author
Manish Gupta







