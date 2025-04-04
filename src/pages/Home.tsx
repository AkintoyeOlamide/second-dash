import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Typography, Button, Card, CardMedia, Divider } from '@mui/material';
import { LocationOn, Add as AddIcon } from '@mui/icons-material';

const Home: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'How can I get access to Meta Mansions on mobile or desktop?',
      answer: 'You can access Meta Mansions through our web app on any device with a modern browser. For the best experience, we recommend using Chrome or Firefox.',
    },
    {
      id: 2,
      question: 'Why can\'t I find the mansion that I\'m looking for?',
      answer: 'Make sure you\'re using the correct search filters and check the spelling of the mansion name. If you still can\'t find it, it might be temporarily unavailable or sold.',
    },
    {
      id: 3,
      question: 'Can I visit Meta Mansions on web or mobile?',
      answer: 'Yes, you can visit Meta Mansions on both web and mobile browsers. Our platform is fully responsive and optimized for all devices.',
    },
    {
      id: 4,
      question: 'What Internet speed is required?',
      answer: 'We recommend a minimum internet speed of 10 Mbps for the best experience. However, the platform can work with slower connections with reduced graphics quality.',
    },
    {
      id: 5,
      question: 'How do I get help?',
      answer: 'You can reach our support team through the Help Center, send us an email at support@metamansions.com, or use the live chat feature in the bottom right corner.',
    },
  ];

  return (
    <Box>
      <Container>
        {/* Stats Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Paper sx={{ 
              p: 3, 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" sx={{ color: '#FFD700', mb: 1 }}>12</Typography>
              <Typography variant="body1" sx={{ color: '#fff' }}>Total Mansions</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ 
              p: 3, 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" sx={{ color: '#FFD700', mb: 1 }}>45</Typography>
              <Typography variant="body1" sx={{ color: '#fff' }}>Items Listed</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ 
              p: 3, 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" sx={{ color: '#FFD700', mb: 1 }}>8</Typography>
              <Typography variant="body1" sx={{ color: '#fff' }}>Active Events</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper sx={{ 
              p: 3, 
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" sx={{ color: '#FFD700', mb: 1 }}>25</Typography>
              <Typography variant="body1" sx={{ color: '#fff' }}>Friends Online</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Trending Items Section */}
        <Paper sx={{ 
          p: 3, 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          mt: 4
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
              Trending Items
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
              View All
            </Button>
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
        </Paper>

        {/* FAQ Section */}
        <Box sx={{ mt: 8, mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: '#FDEB91',
              fontWeight: 'bold',
              mb: 4,
            }}
          >
            Frequently asked questions
          </Typography>
          <Box sx={{ maxWidth: '800px' }}>
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
                    }}
                  >
                    {question}
                  </Typography>
                  <AddIcon sx={{ color: '#FFD700' }} />
                </Box>
                <Divider sx={{ borderColor: 'rgba(255, 215, 0, 0.1)' }} />
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Home; 