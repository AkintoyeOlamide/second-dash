import React, { useState, useEffect, useRef } from 'react';
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
  Science as TestIcon,
  Science as TrialIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Science as ScienceIcon,
  SmartToy,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';
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
  const { isDarkMode } = useThemeContext();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileDrawer && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onMenuClick?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileDrawer, onMenuClick]);

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
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
              color: 'text.secondary',
              justifyContent: 'flex-start',
              '&:hover': {
                borderColor: isDarkMode ? '#ffffff' : '#000000',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
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
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
              color: 'text.secondary',
              justifyContent: 'flex-start',
              '&:hover': {
                borderColor: isDarkMode ? '#ffffff' : '#000000',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
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
              border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
              bgcolor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)',
              color: isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'
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
            borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
            color: 'text.secondary',
            justifyContent: 'flex-start',
            '&:hover': {
              borderColor: isDarkMode ? '#ffffff' : '#000000',
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
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
      ref={menuRef}
      elevation={0}
      sx={{
        width: '240px',
        height: '100vh',
        backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderRight: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1200,
        transform: isMobileDrawer ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Box sx={{ 
        width: '100%',
        height: '100px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: isDarkMode ? 'black' : 'white',
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
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
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
                onClick={() => {
                  navigate('/');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Home
              </Button>
              <Button
                startIcon={<ProfileIcon />}
                onClick={() => {
                  navigate('/profile');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Profile
              </Button>
              <Button
                startIcon={<HomeIcon />}
                onClick={() => {
                  navigate('/build');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Build
              </Button>
              <Button
                startIcon={<ShopIcon />}
                onClick={() => {
                  navigate('/shop');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Shop
              </Button>
              <Button
                startIcon={<PlayIcon />}
                onClick={() => {
                  navigate('/play');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Play
              </Button>
              <Button
                startIcon={<SmartToy />}
                onClick={() => {
                  navigate('/agent');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                AI-Agent
              </Button>
              <Button
                startIcon={<FriendsIcon />}
                onClick={() => {
                  navigate('/friends');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Friends
              </Button>
              <Button
                startIcon={<WalletIcon />}
                onClick={() => {
                  navigate('/wallet');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Wallet
              </Button>
              <Button
                startIcon={<TestIcon />}
                onClick={() => {
                  navigate('/test');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Test
              </Button>
              <Button
                startIcon={<SettingsIcon />}
                onClick={() => {
                  navigate('/settings');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Settings
              </Button>
            </>
          ) : (
            <>
              <Button
                startIcon={<HomeIcon />}
                onClick={() => {
                  navigate('/');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Home
              </Button>
              <Button
                startIcon={<ShopIcon />}
                onClick={() => {
                  navigate('/shop');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Shop
              </Button>
              <Button
                startIcon={<PlayIcon />}
                onClick={() => {
                  navigate('/play');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Play
              </Button>
              <Button
                startIcon={<SmartToy />}
                onClick={() => {
                  navigate('/agent');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                AI-Agent
              </Button>
              <Button
                startIcon={<ConnectIcon />}
                onClick={() => {
                  navigate('/advertise');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Advertise
              </Button>
              <Button
                startIcon={<SettingsIcon />}
                onClick={() => {
                  navigate('/settings');
                  onMenuClick?.();
                }}
                sx={{
                  color: 'text.secondary',
                  justifyContent: 'flex-start',
                  py: 1,
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                Settings
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
      {(!isMobile && !isMobileDrawer) && (
        <Paper
          elevation={0}
          sx={{
            width: '240px',
            height: '100vh',
            backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
            borderRight: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
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
            backgroundColor: isDarkMode ? 'black' : 'white',
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
                color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
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
                    onClick={() => {
                      navigate('/');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    startIcon={<ProfileIcon />}
                    onClick={() => {
                      navigate('/profile');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Profile
                  </Button>
                  <Button
                    startIcon={<HomeIcon />}
                    onClick={() => {
                      navigate('/build');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Build
                  </Button>
                  <Button
                    startIcon={<ShopIcon />}
                    onClick={() => {
                      navigate('/shop');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Shop
                  </Button>
                  <Button
                    startIcon={<PlayIcon />}
                    onClick={() => {
                      navigate('/play');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Play
                  </Button>
                  <Button
                    startIcon={<SmartToy />}
                    onClick={() => {
                      navigate('/agent');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    AI-Agent
                  </Button>
                  <Button
                    startIcon={<FriendsIcon />}
                    onClick={() => {
                      navigate('/friends');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Friends
                  </Button>
                  <Button
                    startIcon={<WalletIcon />}
                    onClick={() => {
                      navigate('/wallet');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Wallet
                  </Button>
                  <Button
                    startIcon={<TestIcon />}
                    onClick={() => {
                      navigate('/test');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Test
                  </Button>
                  <Button
                    startIcon={<SettingsIcon />}
                    onClick={() => {
                      navigate('/settings');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Settings
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    startIcon={<HomeIcon />}
                    onClick={() => {
                      navigate('/');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    startIcon={<ShopIcon />}
                    onClick={() => {
                      navigate('/shop');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Shop
                  </Button>
                  <Button
                    startIcon={<PlayIcon />}
                    onClick={() => {
                      navigate('/play');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Play
                  </Button>
                  <Button
                    startIcon={<SmartToy />}
                    onClick={() => {
                      navigate('/agent');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    AI-Agent
                  </Button>
                  <Button
                    startIcon={<ConnectIcon />}
                    onClick={() => {
                      navigate('/advertise');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Advertise
                  </Button>
                  <Button
                    startIcon={<SettingsIcon />}
                    onClick={() => {
                      navigate('/settings');
                      onMenuClick?.();
                    }}
                    sx={{
                      color: 'text.secondary',
                      justifyContent: 'flex-start',
                      py: 1,
                      '&:hover': {
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    Settings
                  </Button>
                </>
              )}
            </Box>

            {renderAuthSection()}
          </Box>
        </Paper>
      )}
      {(isMobile && !isMobileDrawer) && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
            display: { xs: 'flex', sm: 'none' },
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            background: theme => theme.palette.mode === 'dark' ? '#000000' : '#f5f5f5',
            borderBottom: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ 
              color: '#FFD700',
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              borderRadius: '50%',
              width: 40,
              height: 40,
              '&:hover': {
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            padding: '8px',
            borderRadius: '8px',
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
      {isMobileDrawer && (
        <>
          {sidebarContent}
          <Box 
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
              zIndex: 1190,
            }}
            onClick={onMenuClick}
          />
        </>
      )}

      <AuthModal
        open={authModalOpen}
        onClose={handleCloseAuthModal}
        initialMode={authMode}
      />
    </>
  );
}; 