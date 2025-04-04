import React from 'react';
import { Box, Container, Typography, Grid, Card, Button, IconButton, Avatar, Chip, Paper } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Add as AddIcon, LocationOn, DateRange } from '@mui/icons-material';

export default function Profile() {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: '#000000',
      pt: 4,
      pb: 8
    }}>
      <Container maxWidth="xl">
        {/* Profile Header */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                border: '2px solid #FFD700',
                background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)'
              }}
            >
              <Typography variant="h3" sx={{ color: '#000' }}>JD</Typography>
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{ color: '#fff', mb: 1 }}>
                John Doe
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip
                  label="Meta Mansion Owner"
                  size="small"
                  sx={{
                    background: 'rgba(255,215,0,0.1)',
                    color: '#FFD700',
                    border: '1px solid rgba(255,215,0,0.2)',
                    '& .MuiChip-label': {
                      px: 1,
                      fontSize: '0.75rem'
                    }
                  }}
                />
              </Box>
              <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Joined January 2024
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* Stats Section */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '24px',
              p: 4,
              border: '1px solid rgba(255,215,0,0.2)',
              backdropFilter: 'blur(10px)',
              height: '100%'
            }}>
              <Typography variant="h6" sx={{ color: '#fff', mb: 3, fontWeight: 600 }}>
                Your Stats
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Mansions Owned</Typography>
                  <Typography sx={{ color: '#FFD700', fontWeight: 600 }}>3</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Items Listed</Typography>
                  <Typography sx={{ color: '#FFD700', fontWeight: 600 }}>12</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>Total Sales</Typography>
                  <Typography sx={{ color: '#FFD700', fontWeight: 600 }}>25 ETH</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Items Section */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ 
              p: 3, 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                  Items for Sale
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  sx={{
                    color: '#FFD700',
                    borderColor: 'rgba(255,215,0,0.2)',
                    '&:hover': {
                      borderColor: '#FFD700',
                      background: 'rgba(255,215,0,0.1)'
                    }
                  }}
                >
                  List New Item
                </Button>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ 
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,215,0,0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: 'rgba(255,215,0,0.3)',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/WhatsApp Image 2025-03-14 at 13.58.13.jpeg"
                      alt="Mansion Item"
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255,215,0,0.1)'
                      }}
                    />
                    <Box sx={{ 
                      p: 2, 
                      display: 'flex', 
                      flexDirection: 'column',
                      flex: 1,
                      gap: 1
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#fff', 
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        Luxury Item 1
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        color: 'rgba(255,255,255,0.7)'
                      }}>
                        <LocationOn sx={{ fontSize: '1rem' }} />
                        <Typography variant="body2">
                          Beachfront Villa
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        mt: 'auto',
                        pt: 2,
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255,215,0,0.1)'
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#FFD700',
                            fontWeight: 600
                          }}
                        >
                          0.5 ETH
                        </Typography>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                            color: '#000',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                            }
                          }}
                        >
                          Edit
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ 
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,215,0,0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: 'rgba(255,215,0,0.3)',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/WhatsApp Image 2025-03-14 at 13.58.13.jpeg"
                      alt="Mansion Item"
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255,215,0,0.1)'
                      }}
                    />
                    <Box sx={{ 
                      p: 2, 
                      display: 'flex', 
                      flexDirection: 'column',
                      flex: 1,
                      gap: 1
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#fff', 
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        Luxury Item 2
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        color: 'rgba(255,255,255,0.7)'
                      }}>
                        <LocationOn sx={{ fontSize: '1rem' }} />
                        <Typography variant="body2">
                          Beachfront Villa
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        mt: 'auto',
                        pt: 2,
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255,215,0,0.1)'
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#FFD700',
                            fontWeight: 600
                          }}
                        >
                          0.5 ETH
                        </Typography>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                            color: '#000',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                            }
                          }}
                        >
                          Edit
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ 
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,215,0,0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: 'rgba(255,215,0,0.3)',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/WhatsApp Image 2025-03-14 at 13.58.13.jpeg"
                      alt="Mansion Item"
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255,215,0,0.1)'
                      }}
                    />
                    <Box sx={{ 
                      p: 2, 
                      display: 'flex', 
                      flexDirection: 'column',
                      flex: 1,
                      gap: 1
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#fff', 
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        Luxury Item 3
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        color: 'rgba(255,255,255,0.7)'
                      }}>
                        <LocationOn sx={{ fontSize: '1rem' }} />
                        <Typography variant="body2">
                          Beachfront Villa
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        mt: 'auto',
                        pt: 2,
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255,215,0,0.1)'
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#FFD700',
                            fontWeight: 600
                          }}
                        >
                          0.5 ETH
                        </Typography>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                            color: '#000',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                            }
                          }}
                        >
                          Edit
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Game Events Section */}
          <Grid item xs={12}>
            <Paper sx={{ 
              p: 3, 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              mt: 4
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                  Game Events
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  sx={{
                    color: '#FFD700',
                    borderColor: 'rgba(255,215,0,0.2)',
                    '&:hover': {
                      borderColor: '#FFD700',
                      background: 'rgba(255,215,0,0.1)'
                    }
                  }}
                >
                  Create Game Event
                </Button>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ 
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,215,0,0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: 'rgba(255,215,0,0.3)',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/WhatsApp Image 2025-03-14 at 13.58.14.jpeg"
                      alt="Game Event"
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255,215,0,0.1)'
                      }}
                    />
                    <Box sx={{ 
                      p: 2, 
                      display: 'flex', 
                      flexDirection: 'column',
                      flex: 1,
                      gap: 1
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#fff', 
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        Meta Racing Championship
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        color: 'rgba(255,255,255,0.7)'
                      }}>
                        <DateRange sx={{ fontSize: '1rem' }} />
                        <Typography variant="body2">
                          March 30, 2024
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        mt: 'auto',
                        pt: 2,
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255,215,0,0.1)'
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#FFD700',
                            fontWeight: 600
                          }}
                        >
                          Prize: 5 ETH
                        </Typography>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                            color: '#000',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                            }
                          }}
                        >
                          Join Event
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ 
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,215,0,0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: 'rgba(255,215,0,0.3)',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/WhatsApp Image 2025-03-14 at 13.58.15.jpeg"
                      alt="Game Event"
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255,215,0,0.1)'
                      }}
                    />
                    <Box sx={{ 
                      p: 2, 
                      display: 'flex', 
                      flexDirection: 'column',
                      flex: 1,
                      gap: 1
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#fff', 
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        Virtual Fashion Show
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        color: 'rgba(255,255,255,0.7)'
                      }}>
                        <DateRange sx={{ fontSize: '1rem' }} />
                        <Typography variant="body2">
                          April 5, 2024
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        mt: 'auto',
                        pt: 2,
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255,215,0,0.1)'
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#FFD700',
                            fontWeight: 600
                          }}
                        >
                          Prize: 3 ETH
                        </Typography>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                            color: '#000',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                            }
                          }}
                        >
                          Join Event
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ 
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,215,0,0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      borderColor: 'rgba(255,215,0,0.3)',
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/WhatsApp Image 2025-03-14 at 13.58.16.jpeg"
                      alt="Game Event"
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255,215,0,0.1)'
                      }}
                    />
                    <Box sx={{ 
                      p: 2, 
                      display: 'flex', 
                      flexDirection: 'column',
                      flex: 1,
                      gap: 1
                    }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#fff', 
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        Art Gallery Opening
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        color: 'rgba(255,255,255,0.7)'
                      }}>
                        <DateRange sx={{ fontSize: '1rem' }} />
                        <Typography variant="body2">
                          April 15, 2024
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        mt: 'auto',
                        pt: 2,
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255,215,0,0.1)'
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: '#FFD700',
                            fontWeight: 600
                          }}
                        >
                          Free Entry
                        </Typography>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                            color: '#000',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                            }
                          }}
                        >
                          RSVP
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 