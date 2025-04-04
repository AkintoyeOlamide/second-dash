import React from 'react';
import { Box, Container, Grid, Card, CardMedia, Typography, Button, Divider } from '@mui/material';
import { LocationOn, Add as AddIcon } from '@mui/icons-material';

const Landing: React.FC = () => {
  return (
    <Box>
      {/* Trending Items Section */}
      <Box sx={{ py: 8, background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ color: '#fff', mb: 2, fontWeight: 700 }}>
              Trending Items
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Discover the most popular items in our marketplace
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item}>
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
                    image={`/WhatsApp Image 2025-03-14 at 13.58.${12 + item}.jpeg`}
                    alt="Trending Item"
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
                      Trending Item {item}
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
                        View
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ color: '#FDEB91', mb: 2, fontWeight: 700 }}>
              Frequently asked questions
            </Typography>
          </Box>
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            {[
              'How can I get access to Meta Mansions on mobile or desktop?',
              'Why can\'t I find the mansion that I\'m looking for?',
              'Can I visit Meta Mansions on web or mobile?',
              'What Internet speed is required?',
              'How do I get help?'
            ].map((question, index) => (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    py: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      '& .question': {
                        color: '#FFD700',
                      },
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    className="question"
                    sx={{
                      color: '#fff',
                      transition: 'color 0.2s',
                      fontSize: '1.25rem',
                    }}
                  >
                    {question}
                  </Typography>
                  <AddIcon sx={{ color: '#FFD700', fontSize: '1.5rem' }} />
                </Box>
                <Divider sx={{ borderColor: 'rgba(255, 215, 0, 0.1)' }} />
              </React.Fragment>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Landing; 