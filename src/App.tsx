import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { UserProfile } from './components/UserProfile';
import { AuthProvider, useAuth } from './contexts/AuthContext';
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

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-contained': {
            backgroundColor: '#000000',
            '&:hover': {
              backgroundColor: '#1a1a1a',
            },
          },
        },
      },
    },
  },
});

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
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};
