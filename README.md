# WeatherApp 🌤️

A weather forecast web application built with React and TypeScript that displays current conditions, 7-day forecasts, hourly breakdowns, and key weather highlights for any city worldwide.

## 🔗 Live Demo
[cirrus.vercel.app](https://cirrus.vercel.app)

## 📸 Preview
![Cirrus Preview](./src/Assets/preview.png)

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Toggle between °C and °F
- 📅 7-day weekly forecast
- 🕐 24-hour hourly forecast (Today tab)
- 💧 Humidity, UV Index, Wind Speed, Visibility
- 🌅 Sunrise & Sunset times
- 🌫️ Air Quality Index (PM2.5)
- 📍 Location detection via Geolocation API
- 🎨 Glassmorphism UI with dynamic weather icons

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS |
| HTTP Client | Axios |
| Weather Data | WeatherAPI.com |
| Build Tool | Vite |
| Deployment | Vercel |

---

## 📁 Project Structure
```
src/
├── Assets/                 
├── Components/
│   ├── MainData/
│   │   ├── HighlightedRow.tsx   
│   │   ├── TodayRow.tsx        
│   │   ├── TopRow.tsx          
│   │   └── WeekRow.tsx      
│   ├── SideBar/
│   │   ├── Lowerhalf.tsx     
│   │   └── Upperhalf.tsx   
│   ├── HighlightCard.tsx
│   ├── HourCard.tsx         
│   └── TempCard.tsx    
├── Config/
│   └── AxiosInstance.ts   
├── Hooks/
│   ├── useAppDispatch.ts
│   └── useAppSelector.ts        
├── Interfaces/
│   ├── CurrentDayForecast.ts  
│   ├── DayForecast.ts       
│   ├── ForecastData.ts   
│   ├── ForecastDataState.ts 
│   └── HourForecast.ts       
├── Pages/
│   └── Home.tsx             
└── Redux/
    ├── Slices/
    │   └── ForecastSlice.ts   
    └── store.ts             
```
---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- WeatherAPI.com API key (free at [weatherapi.com](https://www.weatherapi.com))

### Installation

1. **Clone the repository**
```bash
git clone git@github.com:Tanish866/Weather_App.git
cd Weather_App
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file in the root directory**
```env
VITE_API_URL=your_weatherapi_key_here
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:5173
```


