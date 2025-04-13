import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { UserProfile } from './components/UserProfile';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Play from './pages/Play';
import Shop from './pages/Shop';
import Advertise from './pages/Advertise';
import Build from './pages/Build';
import Wallet from './pages/Wallet';
import Friends from './pages/Friends';
import Agent from './pages/Agent';
import Test from './pages/Test';
import VisitorShop from './pages/VisitorShop';
import HomeVisitors from './pages/HomeVisitors';
import TrendingItems from './pages/TrendingItems';
import Settings from './pages/Settings';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={isAuthenticated ? <Home /> : <HomeVisitors />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/play" element={<Play />} />
        <Route 
          path="/shop" 
          element={isAuthenticated ? <Shop /> : <VisitorShop />} 
        />
        <Route path="/trending-items" element={<TrendingItems />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/build" element={<Build />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/test" element={<Test />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};
