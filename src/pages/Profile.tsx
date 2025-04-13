import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, Button, IconButton, Avatar, Chip, Paper, useTheme, Divider, Tabs, Tab } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Add as AddIcon, LocationOn, DateRange, Edit as EditIcon, Dashboard as DashboardIcon, History as HistoryIcon, Settings as SettingsIcon } from '@mui/icons-material';

export default function Profile() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      pt: 8,
      background: theme => theme.palette.mode === 'dark' ? '#000' : '#fff',
      overflow: 'auto',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden'
    }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h1" 
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
              fontWeight: 800,
              color: theme => theme.palette.text.primary,
              mb: 2,
              letterSpacing: '-0.02em',
              background: theme => theme.palette.mode === 'dark' 
                ? 'linear-gradient(90deg, #FFFFFF 0%, #FDEB91 100%)'
                : 'linear-gradient(90deg, #000000 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Profile
          </Typography>
          <Typography 
            sx={{
              color: theme => theme.palette.text.secondary,
              fontSize: { xs: '0.65rem', sm: '0.8rem' }
            }}
          >
            Manage your profile and account settings
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {/* Left Sidebar - Profile Info */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
                borderRadius: '24px',
                p: { xs: 2, sm: 3 },
                border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                height: 'auto',
                overflow: 'visible',
                width: '100%'
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Avatar
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mb: 2,
                    border: theme => `3px solid ${theme.palette.mode === 'dark' ? '#FFD700' : '#000'}`,
                  }}
                >
                  <Typography variant="h3" sx={{ color: theme => theme.palette.mode === 'dark' ? '#000' : '#fff' }}>JD</Typography>
                </Avatar>
                <Typography
                  sx={{
                    color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                    fontWeight: 600,
                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
                    mb: 1
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  sx={{
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                    fontSize: { xs: '0.65rem', sm: '0.75rem' }
                  }}
                >
                  john.doe@example.com
                </Typography>
              </Box>

              <Divider sx={{ 
                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)',
                my: 2 
              }} />

              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: '0.75rem', sm: '0.85rem' }
                  }}
                >
                  Account Stats
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      fontSize: { xs: '0.65rem', sm: '0.75rem' }
                    }}>
                      Mansions Built
                    </Typography>
                    <Typography sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                      fontWeight: 600,
                      fontSize: { xs: '0.65rem', sm: '0.75rem' }
                    }}>
                      3
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      fontSize: { xs: '0.65rem', sm: '0.75rem' }
                    }}>
                      Total Visitors
                    </Typography>
                    <Typography sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                      fontWeight: 600,
                      fontSize: { xs: '0.65rem', sm: '0.75rem' }
                    }}>
                      123,456
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      fontSize: { xs: '0.65rem', sm: '0.75rem' }
                    }}>
                      Member Since
                    </Typography>
                    <Typography sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                      fontWeight: 600,
                      fontSize: { xs: '0.65rem', sm: '0.75rem' }
                    }}>
                      January 2024
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                fullWidth
                sx={{
                  color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)',
                  '&:hover': {
                    borderColor: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                    background: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)'
                  }
                }}
              >
                Edit Profile
              </Button>
            </Card>
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
                borderRadius: '24px',
                p: { xs: 2, sm: 4 },
                border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                height: 'auto',
                overflow: 'visible',
                width: '100%'
              }}
            >
              <Typography
                sx={{
                  color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: { xs: '0.75rem', sm: '0.9rem' }
                }}
              >
                Recent Activity
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Add your activity data here */}
                <Card
                  sx={{
                    background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#fff',
                    borderRadius: '16px',
                    p: 2,
                    border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                    '&:hover': {
                      borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.4)' : 'rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{ 
                        width: 40, 
                        height: 40,
                        background: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)'
                      }}
                    >
                      {/* Add your activity icon here */}
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{
                          color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                          fontWeight: 600,
                          fontSize: { xs: '0.65rem', sm: '0.75rem' }
                        }}
                      >
                        {/* Add your activity title here */}
                      </Typography>
                      <Typography
                        sx={{
                          color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                          fontSize: { xs: '0.6rem', sm: '0.7rem' }
                        }}
                      >
                        {/* Add your activity description here */}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                        fontSize: { xs: '0.55rem', sm: '0.65rem' },
                        ml: 'auto'
                      }}
                    >
                      {/* Add your activity time here */}
                    </Typography>
                  </Box>
                </Card>
              </Box>

              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{
                  mb: 3,
                  '& .MuiTab-root': {
                    fontSize: { xs: '0.55rem', sm: '0.6rem', md: '0.7rem' },
                    minHeight: { xs: 28, sm: 32 },
                    py: { xs: 0.25, sm: 0.5 },
                    px: { xs: 0.5, sm: 1 },
                    '&.Mui-selected': {
                      color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                      fontWeight: 600
                    }
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                    height: 2
                  }
                }}
              >
                <Tab 
                  label="Overview" 
                  icon={<DashboardIcon sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' } }} />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Activity" 
                  icon={<HistoryIcon sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' } }} />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Settings" 
                  icon={<SettingsIcon sx={{ fontSize: { xs: '0.75rem', sm: '0.85rem' } }} />} 
                  iconPosition="start"
                />
              </Tabs>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 