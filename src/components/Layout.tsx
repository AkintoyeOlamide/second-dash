import React, { useState, useEffect } from 'react';
import { Box, Drawer, useTheme, useMediaQuery, Typography, Grid, Button, CardMedia } from '@mui/material';
import { TopNav } from './TopNav';
import {
  AccountBalance as AccountBalanceIcon,
  Home as HomeIcon,
  ShoppingCart as CartIcon,
  People as PeopleIcon,
  ArrowBack,
  ArrowForward,
  AccountBalanceWallet as WalletIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { Outlet, useLocation } from 'react-router-dom';

// Virtual building data for carousel
const carouselBuildings = [
  {
    name: 'Meta Mansion #4721',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    totalVolume: '2,361 ETH',
    floorPrice: '0.0239 ETH',
    bestOffer: '0.0125 WETH',
    listed: '1% (17 of 1,700)',
    uniqueOwners: '1,466',
    ownershipPercentage: '17%',
    description: 'Modern luxury villa collection with premium amenities',
    location: 'Beachfront District'
  },
  {
    name: 'Meta Mansion #8392',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    totalVolume: '1,890 ETH',
    floorPrice: '0.0198 ETH',
    bestOffer: '0.0115 WETH',
    listed: '2% (34 of 1,700)',
    uniqueOwners: '1,288',
    ownershipPercentage: '15%',
    description: 'Exclusive penthouse collection with city views',
    location: 'Downtown Core'
  },
  {
    name: 'Meta Mansion #5147',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    totalVolume: '3,150 ETH',
    floorPrice: '0.0285 ETH',
    bestOffer: '0.0145 WETH',
    listed: '1.5% (26 of 1,700)',
    uniqueOwners: '1,544',
    ownershipPercentage: '19%',
    description: 'Secluded mountain estate collection with panoramic views',
    location: 'Alpine Heights'
  },
  {
    name: 'Meta Mansion #9634',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (1).jpeg',
    totalVolume: '2,780 ETH',
    floorPrice: '0.0265 ETH',
    bestOffer: '0.0135 WETH',
    listed: '1.8% (31 of 1,700)',
    uniqueOwners: '1,377',
    ownershipPercentage: '16%',
    description: 'Contemporary mansion collection with smart features',
    location: 'Smart City District'
  }
];

// Stats data with different values to cycle through
const statsData = {
  visitors: [
    { value: '0', label: 'Meta Mansion Visitors' },
    { value: '0', label: 'Meta Mansion Visitors' },
    { value: '0', label: 'Meta Mansion Visitors' },
    { value: '0', label: 'Meta Mansion Visitors' },
  ],
  revenue: [
    { value: '$0.00', label: 'Rewards Generated' },
    { value: '$0.00', label: 'Rewards Generated' },
    { value: '$0.00', label: 'Rewards Generated' },
    { value: '$0.00', label: 'Rewards Generated' },
  ],
  players: [
    { value: '0', label: 'Active Game Players' },
    { value: '0', label: 'Active Game Players' },
    { value: '0', label: 'Active Game Players' },
    { value: '0', label: 'Active Game Players' },
  ],
  rewards: [
    { value: '0.00', label: 'Total Rewards Earned' },
    { value: '0.00', label: 'Total Rewards Earned' },
    { value: '0.00', label: 'Total Rewards Earned' },
    { value: '0.00', label: 'Total Rewards Earned' },
  ],
};

const DRAWER_WIDTH = 240;

export const Layout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStatsIndex, setCurrentStatsIndex] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';
  const isPlayPage = location.pathname === '/play';
  const isBuildPage = location.pathname === '/build';
  const isShopPage = location.pathname === '/shop';
  const isLandingPage = location.pathname === '/';

  // Auto-update stats every 3 seconds
  useEffect(() => {
    const statsInterval = setInterval(() => {
      setCurrentStatsIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(statsInterval);
  }, []);

  // Auto-slide carousel every 3 seconds
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselBuildings.length);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleConnectWallet = () => {
    setWalletConnected(!walletConnected);
    // Add your wallet connection logic here
  };

  const StatBox = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 1.5,
      p: 1.5,
      borderRadius: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 215, 0, 0.3)',
      '&:hover': {
        borderColor: 'rgba(255, 215, 0, 0.5)',
        boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)',
        transform: 'translateY(-2px)',
        transition: 'all 0.3s ease',
      },
    }}>
      {icon}
      <Box>
        <Typography 
          variant="caption" 
          sx={{ 
            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000', 
            display: 'block',
            fontFamily: '"Inter", sans-serif',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            fontSize: '0.75rem',
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000', 
            fontWeight: 700,
            fontFamily: '"Inter", sans-serif',
            fontSize: '1.25rem',
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + carouselBuildings.length) % carouselBuildings.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % carouselBuildings.length);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ 
        position: 'fixed',
        width: { sm: `${DRAWER_WIDTH}px` },
        pr: 2,
        borderRight: { sm: '1px solid' },
        borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        height: '100vh',
        zIndex: 1200
      }}>
        <TopNav onMenuClick={handleDrawerToggle} isMobile={isMobile} isMobileDrawer={mobileOpen} />
      </Box>
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          minHeight: '100vh',
          background: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
          pt: { xs: '40px', sm: 0 },
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Show stats and carousel only on the landing page and when authenticated */}
        {isLandingPage && isAuthenticated && (
          <Box sx={{ mt: '64px' }}>
            {/* Stats Section */}
            <Box sx={{ mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                  <StatBox 
                    icon={<PeopleIcon sx={{ color: theme.palette.mode === 'dark' ? '#D7B953' : '#000000', fontSize: '1.5rem' }} />}
                    title={statsData.visitors[currentStatsIndex].label}
                    value={statsData.visitors[currentStatsIndex].value}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatBox 
                    icon={<AccountBalanceIcon sx={{ color: theme.palette.mode === 'dark' ? '#D7B953' : '#000000', fontSize: '1.5rem' }} />}
                    title={statsData.revenue[currentStatsIndex].label}
                    value={statsData.revenue[currentStatsIndex].value}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatBox 
                    icon={<HomeIcon sx={{ color: theme.palette.mode === 'dark' ? '#D7B953' : '#000000', fontSize: '1.5rem' }} />}
                    title={statsData.players[currentStatsIndex].label}
                    value={statsData.players[currentStatsIndex].value}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <StatBox 
                    icon={<CartIcon sx={{ color: theme.palette.mode === 'dark' ? '#D7B953' : '#000000', fontSize: '1.5rem' }} />}
                    title={statsData.rewards[currentStatsIndex].label}
                    value={statsData.rewards[currentStatsIndex].value}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Landscape Carousel */}
            <Box sx={{ mb: 4, position: 'relative', height: '400px' }}>
              {/* Logo in top right corner */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 5,
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/gold-logo.PNG"
                  alt="Gold Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))'
                  }}
                />
              </Box>

              {carouselBuildings.map((building, index) => (
                <Box
                  key={building.name}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: currentSlide === index ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    display: currentSlide === index ? 'block' : 'none',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: '12px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={building.image}
                      alt={building.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '12px',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 3,
                        color: '#FFFFFF',
                        zIndex: 2,
                      }}
                    >
                      {/* Property Name and Description */}
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                          }}
                        >
                          {building.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            mb: 1,
                            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                          }}
                        >
                          {building.description}
                        </Typography>
                      </Box>

                      {/* Removed property stats section */}
                    </Box>
                  </Box>
                </Box>
              ))}
              
              {/* Carousel Navigation Buttons */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  zIndex: 15,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  pointerEvents: 'none',
                  px: isMobile ? 2 : 4,
                }}
              >
                <Button
                  onClick={prevSlide}
                  sx={{
                    pointerEvents: 'auto',
                    minWidth: isMobile ? '32px' : '40px',
                    width: isMobile ? '32px' : '40px',
                    height: isMobile ? '32px' : '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    color: '#FFFFFF',
                    padding: 0,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: isMobile ? '1.2rem' : '1.4rem',
                    },
                  }}
                >
                  <ArrowBack />
                </Button>
                <Button
                  onClick={nextSlide}
                  sx={{
                    pointerEvents: 'auto',
                    minWidth: isMobile ? '32px' : '40px',
                    width: isMobile ? '32px' : '40px',
                    height: isMobile ? '32px' : '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    color: '#FFFFFF',
                    padding: 0,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: isMobile ? '1.2rem' : '1.4rem',
                    },
                  }}
                >
                  <ArrowForward />
                </Button>
              </Box>

              {/* Carousel Indicators */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: isMobile ? 20 : 16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 1,
                  zIndex: 15,
                }}
              >
                {carouselBuildings.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    sx={{
                      width: isMobile ? '6px' : '4px',
                      height: isMobile ? '6px' : '4px',
                      borderRadius: '50%',
                      backgroundColor: currentSlide === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: currentSlide === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        )}

        <Outlet />
      </Box>
    </Box>
  );
}; 