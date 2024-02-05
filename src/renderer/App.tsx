import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SplashScreen from './pages/splash/SplashScreen';

import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

import '../../css/custom.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/index.html" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
