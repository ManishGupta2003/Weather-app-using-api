# 🌤️ Weather Monitoring Application

A full-stack real-time weather monitoring system that displays weather data for multiple cities using the OpenWeatherMap API. Built with **React + Vite** (frontend) and **Express.js** (backend), with beautiful responsive UI powered by **Tailwind CSS**.

## ✨ Features

- 🌍 **Multi-City Weather Display** - View weather data for multiple cities simultaneously
- 🌡️ **Temperature Unit Toggle** - Switch between Celsius (°C) and Fahrenheit (°F)
- 📊 **Comprehensive Data** - Display average, maximum, and minimum temperatures
- ⛅ **Weather Conditions** - Shows dominant weather conditions for each location
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🚀 **Real-Time Updates** - Fetches latest weather data from OpenWeatherMap API
- 🎨 **Modern UI** - Clean, intuitive interface with Tailwind CSS styling
- 📅 **Date Information** - Displays weather data with date information
- ⚡ **Fast Development** - Built with Vite for quick development and building

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **Vite 5.4** - Modern bundler and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Axios 1.7** - HTTP client for API requests
- **ESLint** - Code quality and style checking

### Backend
- **Express.js** - Web framework
- **Axios** - HTTP requests to OpenWeatherMap API
- **CORS** - Cross-Origin Resource Sharing middleware
- **Node.js** - JavaScript runtime

### APIs
- **OpenWeatherMap API** - Real-time weather data

## 📋 Prerequisites

- **Node.js** v14 or higher ([Download](https://nodejs.org/))
- **npm** v6 or higher (comes with Node.js)
- **OpenWeatherMap API Key** ([Get free key](https://openweathermap.org/api))
- **Git** for cloning the repository

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ManishGupta2003/Weather-app-using-api.git
cd Weather-app-using-api
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install backend dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory:

```bash
touch .env
```

Add your OpenWeatherMap API key to the `.env` file:

```
OPENWEATHER_API_KEY=your_api_key_here
PORT=5000
```

Start the backend server:

```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend will run on **http://localhost:5000**

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on **http://localhost:5173**

## 📖 Usage

### Running the Application

1. **Start Backend Server** (Terminal 1)
   ```bash
   cd backend
   npm start
   ```

2. **Start Frontend Dev Server** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```

3. **Open in Browser**
   - Visit `http://localhost:5173`
   - Weather data will automatically load from the API

### How to Use

1. The application displays a table with weather data for configured cities
2. Click the **Temperature Unit Selector** dropdown to toggle between **°C** and **°F**
3. All temperatures will convert automatically
4. Scroll through the table to view data for all cities
5. Data refreshes on page reload

### Features in Detail

| Feature | Description |
|---------|-------------|
| **City Selection** | View weather for pre-configured cities |
| **Temperature Conversion** | Real-time conversion between Celsius and Fahrenheit |
| **Date Tracking** | See weather data with date information |
| **Condition Display** | Dominant weather condition for each location |
| **Responsive Table** | Optimized for all screen sizes |

## 📁 Project Structure

```
Weather-app-using-api/
│
├── backend/                      # Express.js backend
│   ├── routes/                   # API routes
│   ├── controllers/              # Request handlers
│   ├── middleware/               # Custom middleware
│   ├── index.js                  # Main server file
│   ├── package.json              # Backend dependencies
│   └── .env                      # Environment variables (create this)
│
├── frontend/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── App.jsx               # Main app component
│   │   ├── App.css               # App styles
│   │   ├── index.css             # Tailwind imports
│   │   └── main.jsx              # React entry point
│   ├── index.html                # HTML template
│   ├── vite.config.js            # Vite configuration
│   ├── tailwind.config.js        # Tailwind configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── package.json              # Frontend dependencies
│   └── eslint.config.js          # ESLint configuration
│
└── README.md                     # This file
```

## 🔧 Available Scripts

### Backend Scripts

```bash
# Start the server
npm start

# Development mode with auto-reload
npm run dev
```

### Frontend Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🔌 API Endpoints

### Get Weather Data

**Endpoint:** `GET /api/weather/update`

**Response:**
```json
[
  {
    "city": "London",
    "date": "2024-10-18",
    "averageTemp": 12.5,
    "maxTemp": 15.2,
    "minTemp": 9.8,
    "dominantCondition": "Cloudy"
  },
  {
    "city": "New York",
    "date": "2024-10-18",
    "averageTemp": 18.3,
    "maxTemp": 22.1,
    "minTemp": 14.5,
    "dominantCondition": "Sunny"
  }
]
```

## 🎨 Styling Details

### Tailwind CSS Classes Used

- **Layout:** `min-h-screen`, `flex`, `flex-col`, `items-center`, `justify-center`
- **Spacing:** `p-8`, `mb-4`, `py-2`, `px-4`
- **Colors:** `bg-gray-100`, `bg-white`, `bg-blue-500`, `text-white`, `text-red-500`
- **Typography:** `text-3xl`, `font-bold`, `text-lg`, `font-semibold`
- **Effects:** `shadow-md`, `rounded-lg`, `hover:bg-gray-100`, `overflow-hidden`

### Customization

To customize styles:

1. Edit `frontend/src/App.jsx` for component styles
2. Modify `frontend/tailwind.config.js` for theme settings
3. Update `frontend/src/App.css` for additional custom styles

## 🔐 Environment Variables

### Backend (.env)

```
OPENWEATHER_API_KEY=your_openweathermap_api_key
PORT=5000
NODE_ENV=development
```

### Frontend (vite.config.js)

```javascript
// API base URL - modify if backend runs on different port
const API_URL = 'http://localhost:5000'
```

## 🚨 Troubleshooting

### Backend Issues

**Port Already in Use**
```bash
# Change PORT in .env or use:
PORT=3001 npm start
```

**API Key Error**
- Verify API key in `.env` file
- Check key is valid on [OpenWeatherMap](https://openweathermap.org/api)
- Ensure key has permission for the used API

**CORS Errors**
- Backend CORS middleware may need adjustment
- Check backend server is running on correct port

### Frontend Issues

**API Connection Failed**
- Ensure backend server is running
- Check API URL in axios calls matches backend URL
- Open browser DevTools → Network tab to inspect requests

**Styling Issues**
- Clear browser cache: `Ctrl+Shift+Delete`
- Rebuild frontend: `npm run build`
- Verify Tailwind CSS is imported in `index.css`

**Port 5173 Already in Use**
```bash
npm run dev -- --port 3000
```

## 📊 Temperature Conversion Formula

```
Fahrenheit = (Celsius × 9/5) + 32
Celsius = (Fahrenheit - 32) × 5/9
```

The frontend automatically converts all temperatures based on user selection.

## 🌐 API Integration

The application fetches weather data from OpenWeatherMap API:

1. **API Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
2. **Requires:** API Key from OpenWeatherMap
3. **Response:** Real-time weather data for specified locations
4. **Rate Limit:** Free tier allows 60 calls/minute

## 📈 Performance Optimization

- **Frontend:** Vite's fast bundling and HMR
- **Caching:** Browser caching for API responses
- **Minification:** Production builds are automatically minified
- **CSS:** Tailwind purges unused CSS in production

## 🚀 Deployment

### Deploy Backend

Options:
- **Heroku:** `git push heroku main`
- **Railway:** Connect GitHub repo
- **Render:** Deploy from GitHub
- **AWS EC2:** Manual deployment

### Deploy Frontend

Options:
- **Vercel:** `npm install -g vercel && vercel`
- **Netlify:** Drag & drop `dist` folder
- **GitHub Pages:** `npm run build && gh-pages -d dist`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

### Contribution Ideas

- [ ] Add weather icons/animations
- [ ] Implement search by city name
- [ ] Add 5-day forecast
- [ ] Persist user preferences (localStorage)
- [ ] Add weather alerts
- [ ] Implement dark mode
- [ ] Add humidity and wind speed data
- [ ] Create interactive weather charts

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📚 Resources

- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Express.js Guide](https://expressjs.com)
- [Axios Documentation](https://axios-http.com)

## 👤 Author

**Manish Gupta**
- GitHub: [@ManishGupta2003](https://github.com/ManishGupta2003)
- Repository: [Weather-app-using-api](https://github.com/ManishGupta2003/Weather-app-using-api)

## 🎯 Roadmap

### v1.1 (Upcoming)
- [ ] City search functionality
- [ ] Weather icons and animations
- [ ] 5-day weather forecast
- [ ] Humidity and wind speed display

### v1.2
- [ ] Dark mode toggle
- [ ] Local storage for preferences
- [ ] Weather alerts and notifications
- [ ] Interactive charts and graphs

### v2.0
- [ ] Mobile app (React Native)
- [ ] Real-time weather streaming
- [ ] User accounts and saved locations
- [ ] Weather comparison between cities

## 💡 Tips & Best Practices

### For Development

- Use VSCode extensions: ES7+ React/Redux/React-Native snippets
- Enable Prettier for code formatting
- Use React DevTools for debugging
- Monitor API usage to stay within free tier limits

### For Production

- Set `NODE_ENV=production` on backend
- Use environment variables for sensitive data
- Enable caching headers on API responses
- Implement rate limiting on API endpoints
- Use HTTPS for secure API calls

## ⚠️ Known Limitations

- Single API key (consider load balancing for production)
- Limited to OpenWeatherMap API free tier
- Static city list (feature to add: dynamic city search)
- No historical weather data (real-time only)
- Limited error handling for network failures

## 🐛 Reporting Issues

Found a bug or have a feature request?

1. Check [existing issues](https://github.com/ManishGupta2003/Weather-app-using-api/issues)
2. Create a [new issue](https://github.com/ManishGupta2003/Weather-app-using-api/issues/new)
3. Include:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots/error logs

## 📞 Support

For questions or help:
- Open an issue on GitHub
- Check existing documentation
- Review API documentation

---

**Made with ❤️ by Manish Gupta**

⭐ **If you find this project helpful, please consider giving it a star!** ⭐
