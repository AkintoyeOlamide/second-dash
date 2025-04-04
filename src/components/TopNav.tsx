import React, { useState } from 'react';
import { Box, IconButton, Typography, useTheme, Button, Avatar, useMediaQuery, Paper } from '@mui/material';
import {
  Home as HomeIcon,
  ShoppingCart as ShopIcon,
  SportsEsports as PlayIcon,
  AccountBalanceWallet as WalletIcon,
  Link as ConnectIcon,
  Logout as LogoutIcon,
  Login as LoginIcon,
  PersonAdd as SignupIcon,
  Menu as MenuIcon,
  Person as ProfileIcon,
  Groups as FriendsIcon,
  SmartToy as AgentIcon,
  Science as TestIcon,
  Science as TrialIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Science as ScienceIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './AuthModal';
import { useNavigate } from 'react-router-dom';

interface TopNavProps {
  onMenuClick?: () => void;
  isMobile?: boolean;
  isMobileDrawer?: boolean;
}

export const TopNav: React.FC<TopNavProps> = ({ onMenuClick, isMobile, isMobileDrawer }) => {
  const theme = useTheme();
  const isScreenMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, logout } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const navigate = useNavigate();

  const handleOpenSignIn = () => {
    setAuthMode('signin');
    setAuthModalOpen(true);
  };

  const handleOpenSignUp = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setAuthModalOpen(false);
  };

  const renderAuthSection = () => {
    if (!user || user.isVisitor) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: 2 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<LoginIcon />}
            onClick={handleOpenSignIn}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.12)',
              color: 'text.secondary',
              justifyContent: 'flex-start',
              '&:hover': {
                borderColor: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<SignupIcon />}
            onClick={handleOpenSignUp}
            sx={{
              borderColor: 'rgba(255, 255, 255, 0.12)',
              color: 'text.secondary',
              justifyContent: 'flex-start',
              '&:hover': {
                borderColor: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      );
    }

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
          <Avatar 
            sx={{ 
              width: 32, 
              height: 32,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            {user.name.charAt(0)}
          </Avatar>
          <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
            {user.name}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="small"
          onClick={logout}
          startIcon={<LogoutIcon />}
          fullWidth
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.12)',
            color: 'text.secondary',
            justifyContent: 'flex-start',
            '&:hover': {
              borderColor: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
          }}
        >
          Logout
        </Button>
      </Box>
    );
  };

  const sidebarContent = (
    <Paper
      elevation={0}
      sx={{
        width: '240px',
        height: isMobileDrawer ? '100%' : '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        position: isMobileDrawer ? 'relative' : 'fixed',
        left: 0,
        top: 0,
        zIndex: 1200,
      }}
    >
      <Box sx={{ 
        width: '100%',
        height: '100px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        padding: '10px 30px',
      }}>
        <img 
          src="/gold-logo.PNG"
          alt="Gold Logo"
          style={{
            maxWidth: '40%',
            maxHeight: '40px',
            objectFit: 'contain',
            filter: 'drop-shadow(0px 2px 4px rgba(255, 215, 0, 0.3))',
            margin: '0',
            display: 'block'
          }}
        />
      </Box>

      <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 2,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Navigation
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
          {user && !user.isVisitor ? (
            <>
              <Button
                startIcon={<HomeIcon />}
                onClick={() => navigate('/')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Home
              </Button>
              <Button
                startIcon={<ProfileIcon />}
                onClick={() => navigate('/profile')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Profile
              </Button>
              <Button
                startIcon={<HomeIcon />}
                onClick={() => navigate('/build')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Build
              </Button>
              <Button
                startIcon={<ShopIcon />}
                onClick={() => navigate('/shop')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Shop
              </Button>
              <Button
                startIcon={<PlayIcon />}
                onClick={() => navigate('/play')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Play
              </Button>
              <Button
                startIcon={<AgentIcon />}
                onClick={() => navigate('/agent')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                AI-Agent
              </Button>
              <Button
                startIcon={<FriendsIcon />}
                onClick={() => navigate('/friends')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Friends
              </Button>
              <Button
                startIcon={<WalletIcon />}
                onClick={() => navigate('/wallet')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Wallet
              </Button>
              <Button
                startIcon={<TestIcon />}
                onClick={() => navigate('/test')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Test
              </Button>
            </>
          ) : (
            // Visitor navigation
            <>
              <Button
                startIcon={<HomeIcon />}
                onClick={() => navigate('/')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Home
              </Button>
              <Button
                startIcon={<ShopIcon />}
                onClick={() => navigate('/shop')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Shop
              </Button>
              <Button
                startIcon={<PlayIcon />}
                onClick={() => navigate('/play')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Play
              </Button>
              <Button
                startIcon={<ConnectIcon />}
                onClick={() => navigate('/advertise')}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                Advertise
              </Button>
            </>
          )}
        </Box>

        {renderAuthSection()}
      </Box>
    </Paper>
  );

  const menuItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
    { text: 'Profile', path: '/profile', icon: <ProfileIcon /> },
    { text: 'Settings', path: '/settings', icon: <SettingsIcon /> },
    { text: 'Test', path: '/test', icon: <ScienceIcon /> },
  ];

  return (
    <>
      {(!isMobile && !isMobileDrawer) && sidebarContent}
      {(isMobile && !isMobileDrawer) && (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          height: '64px',
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ 
              color: '#FFD700',
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            gap: 2,
            paddingLeft: '30px'
          }}>
            <img 
              src="/gold-logo.PNG"
              alt="Gold Logo"
              style={{
                height: '40px',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 2px 4px rgba(255, 215, 0, 0.3))',
                margin: '0',
                display: 'block'
              }}
            />
          </Box>
        </Box>
      )}
      {isMobileDrawer && sidebarContent}

      <AuthModal
        open={authModalOpen}
        onClose={handleCloseAuthModal}
        initialMode={authMode}
      />
    </>
  );
}; 