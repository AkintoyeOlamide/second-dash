import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Switch, 
  FormControlLabel, 
  Divider, 
  Button,
  useTheme,
  useMediaQuery,
  Grid,
  IconButton,
  Tooltip,
  Alert,
  Link
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Language as LanguageIcon,
  Palette as ThemeIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Close as CloseIcon,
  Login as LoginIcon
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useThemeContext } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, isAuthenticated } = useAuth();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: true,
    darkMode: isDarkMode,
    language: 'English',
    twoFactorAuth: false,
    deleteAccount: false
  });

  // Update local settings when theme changes
  useEffect(() => {
    setSettings(prev => ({
      ...prev,
      darkMode: isDarkMode
    }));
  }, [isDarkMode]);

  const handleSettingChange = (setting: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    
    // Special handling for dark mode setting
    if (setting === 'darkMode') {
      toggleTheme();
    }
    
    setSettings({
      ...settings,
      [setting]: newValue
    });
  };

  const handleSave = () => {
    // TODO: Implement settings save functionality
    console.log('Saving settings:', settings);
  };

  const handleSignIn = () => {
    navigate('/');
  };

  const settingSections = [
    {
      title: 'Notifications',
      icon: <NotificationsIcon />,
      settings: [
        { label: 'Push Notifications', key: 'notifications' },
        { label: 'Email Updates', key: 'emailUpdates' }
      ],
      requiresAuth: true
    },
    {
      title: 'Security',
      icon: <SecurityIcon />,
      settings: [
        { label: 'Two-Factor Authentication', key: 'twoFactorAuth' }
      ],
      requiresAuth: true
    },
    {
      title: 'Preferences',
      icon: <ThemeIcon />,
      settings: [
        { label: 'Dark Mode', key: 'darkMode' }
      ],
      requiresAuth: false
    }
  ];

  return (
    <Box sx={{
      minHeight: '100vh',
      background: theme.palette.background.default,
      pt: { xs: 8, sm: 4 },
      pb: { xs: 4, sm: 8 }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, sm: 6 } }}>
          <Typography 
            variant="h1" 
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 800,
              color: theme.palette.text.primary,
              mb: 2,
              letterSpacing: '-0.02em',
              background: isDarkMode 
                ? 'linear-gradient(90deg, #FFFFFF 0%, #FDEB91 100%)'
                : 'linear-gradient(90deg, #000000 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Settings
          </Typography>
          <Typography 
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: '0.8rem', sm: '1rem' }
            }}
          >
            Manage your account settings and preferences
          </Typography>
        </Box>

        {!isAuthenticated && (
          <Alert 
            severity="info" 
            sx={{ 
              mb: 3, 
              backgroundColor: isDarkMode ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              color: isDarkMode ? '#FFD700' : '#000000',
              border: isDarkMode 
                ? '1px solid rgba(255, 215, 0, 0.3)' 
                : '1px solid rgba(0, 0, 0, 0.2)',
              '& .MuiAlert-icon': {
                color: isDarkMode ? '#FFD700' : '#000000'
              }
            }}
            action={
              <Button
                color="inherit"
                size="small"
                startIcon={<LoginIcon />}
                onClick={handleSignIn}
                sx={{
                  color: isDarkMode ? '#FFD700' : '#000000',
                  '&:hover': {
                    backgroundColor: isDarkMode ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                  }
                }}
              >
                Sign In
              </Button>
            }
          >
            Some settings require an account. Sign in to access all features.
          </Alert>
        )}

        <Grid container spacing={3}>
          {settingSections.map((section, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  borderRadius: '16px',
                  border: isDarkMode 
                    ? '1px solid rgba(255,255,255,0.1)' 
                    : '1px solid rgba(0,0,0,0.1)',
                  '&:hover': {
                    borderColor: isDarkMode 
                      ? 'rgba(255,255,255,0.2)' 
                      : 'rgba(0,0,0,0.2)',
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    mb: 3
                  }}>
                    <Box
                      sx={{
                        width: { xs: 32, sm: 40 },
                        height: { xs: 32, sm: 40 },
                        borderRadius: '12px',
                        background: isDarkMode ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isDarkMode ? '#FFD700' : '#000000'
                      }}
                    >
                      {section.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>

                  {section.requiresAuth && !isAuthenticated ? (
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      py: 2,
                      gap: 2
                    }}>
                      <Typography sx={{ color: theme.palette.text.secondary, textAlign: 'center' }}>
                        Sign in to access {section.title.toLowerCase()} settings
                      </Typography>
                      <Button
                        variant="outlined"
                        startIcon={<LoginIcon />}
                        onClick={handleSignIn}
                        sx={{
                          borderColor: isDarkMode ? 'rgba(255,215,0,0.5)' : 'rgba(0,0,0,0.5)',
                          color: isDarkMode ? '#FFD700' : '#000000',
                          '&:hover': {
                            borderColor: isDarkMode ? '#FFD700' : '#000000',
                            backgroundColor: isDarkMode ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)',
                          },
                        }}
                      >
                        Sign In
                      </Button>
                    </Box>
                  ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {section.settings.map((setting, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            py: 1
                          }}
                        >
                          <Typography sx={{ color: theme.palette.text.primary }}>
                            {setting.label}
                          </Typography>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={settings[setting.key as keyof typeof settings] as boolean}
                                onChange={handleSettingChange(setting.key)}
                                sx={{
                                  '& .MuiSwitch-switchBase.Mui-checked': {
                                    color: isDarkMode ? '#FFD700' : '#000000',
                                    '&:hover': {
                                      backgroundColor: isDarkMode ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)',
                                    },
                                  },
                                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                    backgroundColor: isDarkMode ? '#FFD700' : '#000000',
                                  },
                                }}
                              />
                            }
                            label=""
                          />
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}

          {isAuthenticated && (
            <Grid item xs={12}>
              <Card
                sx={{
                  background: isDarkMode ? 'rgba(255,0,0,0.05)' : 'rgba(255,0,0,0.05)',
                  borderRadius: '16px',
                  border: isDarkMode 
                    ? '1px solid rgba(255,0,0,0.1)' 
                    : '1px solid rgba(255,0,0,0.1)',
                  '&:hover': {
                    borderColor: isDarkMode 
                      ? 'rgba(255,0,0,0.2)' 
                      : 'rgba(255,0,0,0.2)',
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    mb: 3
                  }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '12px',
                        background: 'rgba(255,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ff4444'
                      }}
                    >
                      <DeleteIcon />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#ff4444',
                        fontWeight: 600
                      }}
                    >
                      Danger Zone
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        py: 1
                      }}
                    >
                      <Box>
                        <Typography sx={{ color: theme.palette.text.primary, mb: 0.5 }}>
                          Delete Account
                        </Typography>
                        <Typography sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem' }}>
                          Permanently delete your account and all associated data
                        </Typography>
                      </Box>
                      <Button
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                        sx={{
                          borderColor: 'rgba(255,0,0,0.5)',
                          color: '#ff4444',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          py: { xs: 0.25, sm: 0.5 },
                          px: { xs: 1, sm: 1.5 },
                          minWidth: { xs: 'auto', sm: '64px' },
                          '&:hover': {
                            borderColor: '#ff4444',
                            backgroundColor: 'rgba(255,0,0,0.1)',
                          },
                          '& .MuiButton-startIcon': {
                            marginRight: { xs: 0.5, sm: 1 },
                            '& > *:first-of-type': {
                              fontSize: { xs: '1rem', sm: '1.25rem' }
                            }
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: 2,
          mt: 4
        }}>
          <Button
            variant="outlined"
            startIcon={<CloseIcon />}
            onClick={() => navigate(-1)}
            sx={{
              borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              color: theme.palette.text.secondary,
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              py: { xs: 0.5, sm: 1 },
              px: { xs: 1.5, sm: 2 },
              '&:hover': {
                borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon sx={{ color: '#fff !important' }} />}
            onClick={handleSave}
            sx={{
              background: isDarkMode 
                ? 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)'
                : 'linear-gradient(45deg, #000000 0%, #333333 100%)',
              color: '#fff !important',
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              py: { xs: 0.5, sm: 1 },
              px: { xs: 1.5, sm: 2 },
              '& .MuiButton-startIcon': {
                color: '#fff !important'
              },
              '&:hover': {
                background: isDarkMode 
                  ? 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)'
                  : 'linear-gradient(45deg, #333333 0%, #666666 100%)',
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 