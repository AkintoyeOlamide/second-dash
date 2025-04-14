import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Paper, Typography, Button, Card, CardMedia, Divider, Chip, CardContent, Collapse, useMediaQuery, useTheme, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { LocationOn, Add as AddIcon, ShoppingCart, Timer, Remove as RemoveIcon, Menu as MenuIcon } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';

interface Mansion {
  id: number;
  name: string;
  image: string;
  visitors: number;
  location: string;
  rating: number;
  price: number;
  advertisingSpaces: number;
  description: string;
}

interface CarouselItem {
  title: string;
  description: string;
  video: string;
}

interface MetaMansion {
  id: number;
  image: string;
  price: number;
  lastSale: number;
}

const trendingMansions: MetaMansion[] = [
  {
    id: 7605,
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    price: 0.00,
    lastSale: 0.02,
  },
  {
    id: 4041,
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    price: 0.00,
    lastSale: 0.02,
  },
  {
    id: 8346,
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    price: 0.00,
    lastSale: 0.02,
  },
];

const popularMansions: Mansion[] = [
  // ... existing mansion data ...
];

const HomeVisitors: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [selectedMansion, setSelectedMansion] = useState<Mansion | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => clearInterval(carouselInterval);
  }, []);

  const carouselItems: CarouselItem[] = [
    {
      title: "Welcome to Meta Mansions",
      description: "Discover the future of virtual real estate",
      video: "/loop-video.mp4"
    },
    {
      title: "Virtual Luxury Living",
      description: "Experience premium virtual properties",
      video: "/loop-video.mp4"
    },
    {
      title: "Join Our Community",
      description: "Be part of the next generation of virtual homeowners",
      video: "/loop-video.mp4"
    }
  ];

  return (
    <Box sx={{ 
      px: isMobile ? 1 : 2, 
      py: 0,
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      mt: 8
    }}>
      <Container sx={{ 
        position: 'relative', 
        zIndex: 1, 
        pt: isMobile ? 0 : 2,
        px: isMobile ? 0 : 2,
        maxWidth: '100%',
        overflow: 'hidden',
        m: 0,
        width: '100%',
        p: isMobile ? 0 : undefined
      }}>
        {/* Video Carousel Section */}
        <Box sx={{ mb: isMobile ? 1 : 4, width: '100%', p: 0 }}>
          <Carousel
            autoPlay
            interval={5000}
            animation="fade"
            navButtonsAlwaysVisible={false}
            navButtonsProps={{
              style: {
                display: 'none'
              }
            }}
            indicators={false}
            sx={{
              borderRadius: isMobile ? '0' : '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,215,0,0.2)',
              width: '100%',
              m: 0
            }}
          >
            {carouselItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  height: isMobile ? '250px' : '500px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  m: 0
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
                    zIndex: 0
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    color: '#fff',
                    p: isMobile ? 2 : 4,
                    maxWidth: '800px',
                    mx: 'auto',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 1s ease-in',
                    '@keyframes fadeIn': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateY(20px)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                  }}
                >
                  <Typography
                    variant={isMobile ? "h4" : "h2"}
                    sx={{
                      color: '#FDEB91',
                      fontWeight: 800,
                      fontSize: isMobile ? '2rem' : '3.5rem',
                      mb: 2,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      letterSpacing: '1px',
                      textAlign: 'center',
                      width: '100%'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant={isMobile ? "body1" : "h5"}
                    sx={{
                      color: '#FFFFFF',
                      maxWidth: '600px',
                      fontWeight: 500,
                      fontSize: isMobile ? '1rem' : '1.5rem',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      textAlign: 'center',
                      mx: 'auto'
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      px: 3,
                      py: 1,
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontWeight: 500,
                      background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                      color: '#fff',
                      borderRadius: '30px',
                      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Enter Now
                  </Button>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>

        {/* Trending Meta Mansions */}
        <Box sx={{ 
          mt: isMobile ? 2 : 6, 
          mb: isMobile ? 2 : 4,
          width: '100%',
          px: isMobile ? 1 : 0,
          p: isMobile ? 1 : undefined
        }}>
          <Typography variant="h4" sx={{ 
            color: theme.palette.mode === 'dark' ? '#FDEB91' : '#000000',
            mb: isMobile ? 2 : 3, 
            fontWeight: 800, 
            fontSize: isMobile ? '1.5rem' : '2rem',
            px: isMobile ? 1 : 0
          }}>
            Trending Meta Mansions
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? 2 : 3,
            width: '100%',
            px: isMobile ? 1 : 0,
          }}>
            {trendingMansions.map((mansion) => (
              <Box
                key={mansion.id}
                sx={{
                  background: theme.palette.mode === 'dark' ? '#242424' : '#ffffff',
                  borderRadius: isMobile ? '8px' : '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  transition: 'transform 0.2s ease-in-out',
                  width: '100%',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    width: '100%',
                    height: isMobile ? '200px' : '300px',
                    position: 'relative',
                    background: theme.palette.mode === 'dark' ? '#2a2a2a' : '#f5f5f5',
                  }}
                >
                  <Box
                    component="img"
                    src={mansion.image}
                    alt={`Meta Mansion #${mansion.id}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                {/* Content Container */}
                <Box sx={{ p: 2 }}>
                  {/* Title and ID */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000000', fontWeight: 600, fontSize: isMobile ? '1rem' : '1.25rem' }}>
                      Meta Mansion #{mansion.id}
                    </Typography>
                    <Box sx={{ 
                      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(253, 235, 145, 0.3)' : 'rgba(0, 0, 0, 0.3)'}`,
                      borderRadius: '8px',
                      px: 1.5,
                      py: 0.5,
                    }}>
                      <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#FDEB91' : '#000000', fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                        #{mansion.id.toString().padStart(4, '0')}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Price Information */}
                  <Typography variant="h5" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000000', mb: 1, fontSize: isMobile ? '1.25rem' : '1.5rem' }}>
                    {mansion.price} ETH
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#666' : 'rgba(0, 0, 0, 0.6)', mb: 2, fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                    Last sale: {mansion.lastSale} WETH
                  </Typography>

                  {/* Buttons Container */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      sx={{
                        flex: 1,
                        background: 'linear-gradient(45deg, #FDEB91 0%, #FFA500 100%)',
                        color: '#000',
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        fontWeight: 600,
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                        }
                      }}
                    >
                      Buy now
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        minWidth: 'auto',
                        px: 2,
                        background: 'linear-gradient(45deg, #FDEB91 0%, #FFA500 100%)',
                        color: '#000',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                        }
                      }}
                    >
                      <ShoppingCart sx={{ fontSize: isMobile ? '1rem' : '1.2rem' }} />
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Featured Games Section */}
        <Paper sx={{ 
          p: isMobile ? 1 : 3, 
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : '#ffffff',
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
          mt: isMobile ? 2 : 4,
          mx: isMobile ? 0 : 'auto',
          width: '100%',
          borderRadius: isMobile ? '0' : '16px',
          m: isMobile ? 0 : undefined
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: isMobile ? 2 : 3,
            px: isMobile ? 1 : 0
          }}>
            <Typography variant="h6" sx={{ 
              color: theme.palette.mode === 'dark' ? '#fff' : '#000000', 
              fontWeight: 600, 
              fontSize: isMobile ? '1.25rem' : '1.5rem' 
            }}>
              Featured Games
            </Typography>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                color: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                borderColor: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  borderColor: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                  background: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.05)'
                },
                py: isMobile ? 0.5 : 1,
                px: isMobile ? 1 : 2,
                fontSize: isMobile ? '0.75rem' : '0.875rem'
              }}
            >
              View All
            </Button>
          </Box>

          <Grid container spacing={isMobile ? 1.5 : 3}>
            {[
              {
                id: 1,
                name: "Virtual Racing",
                image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
                players: "0",
                rating: 4.8
              },
              {
                id: 2,
                name: "Space Adventure",
                image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop",
                players: "0",
                rating: 4.9
              },
              {
                id: 3,
                name: "Puzzle World",
                image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
                players: "0",
                rating: 4.7
              },
              {
                id: 4,
                name: "Battle Arena",
                image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop",
                players: "0",
                rating: 4.9
              }
            ].map((game) => (
              <Grid item xs={12} sm={6} md={3} key={game.id}>
                <Card sx={{ 
                  background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.3)' : 'rgba(0, 0, 0, 0.3)',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease'
                  }
                }}>
                  <CardMedia
                    component="img"
                    height={isMobile ? "150" : "200"}
                    image={game.image}
                    alt={game.name}
                    sx={{
                      objectFit: 'cover',
                      borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                    }}
                  />
                  <CardContent sx={{ 
                    p: isMobile ? 1.5 : 2, 
                    display: 'flex', 
                    flexDirection: 'column',
                    flex: 1,
                    gap: 1
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000000', 
                        fontWeight: 600,
                        fontSize: isMobile ? '1rem' : '1.1rem'
                      }}
                    >
                      {game.name}
                    </Typography>

                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.7)',
                      mb: 2
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography variant="body2" sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                          {game.players} players
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#FFD700' : '#000000', fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                          {game.rating}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                          / 5.0
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 2,
                        background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                        color: '#000',
                        fontWeight: 600,
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                        }
                      }}
                    >
                      Play Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* FAQ Section */}
        <Box sx={{ 
          mt: isMobile ? 3 : 8, 
          mb: isMobile ? 2 : 6, 
          width: '100%',
          px: isMobile ? 1 : 0,
          p: isMobile ? 1 : undefined
        }}>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.mode === 'dark' ? '#FDEB91' : '#000000',
              fontWeight: 'bold',
              mb: isMobile ? 2 : 4,
              textAlign: 'center',
              fontSize: isMobile ? '1.5rem' : '2rem'
            }}
          >
            Frequently asked questions
          </Typography>
          <Box sx={{ width: '100%' }}>
            {faqs.map((faq, index) => (
              <React.Fragment key={index}>
                <Box
                  onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                  sx={{
                    py: isMobile ? 2 : 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    width: '100%',
                    '&:hover': {
                      '& .question': {
                        color: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                      },
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    className="question"
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#fff' : '#000000',
                      transition: 'color 0.2s',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      flex: 1,
                      textAlign: 'left',
                      pr: isMobile ? 1 : 2
                    }}
                  >
                    {faq.question}
                  </Typography>
                  {expandedQuestion === index ? (
                    <RemoveIcon sx={{ color: theme.palette.mode === 'dark' ? '#FFD700' : '#000000', fontSize: isMobile ? '1rem' : '1.2rem' }} />
                  ) : (
                    <AddIcon sx={{ color: theme.palette.mode === 'dark' ? '#FFD700' : '#000000', fontSize: isMobile ? '1rem' : '1.2rem' }} />
                  )}
                </Box>
                <Collapse in={expandedQuestion === index}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                      mt: 2,
                      mb: 3,
                      pl: isMobile ? 1 : 2,
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      lineHeight: 1.4
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Collapse>
                <Divider sx={{ borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)' }} />
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box 
        sx={{ 
          mt: isMobile ? 1 : 4,
          mb: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          p: isMobile ? 1 : 2
        }}
      >
        <img 
          src="/gold-logo.PNG"
          alt="Meta Mansions Logo"
          style={{
            height: '40px',
            objectFit: 'contain',
            filter: 'drop-shadow(0px 2px 4px rgba(255, 215, 0, 0.3))',
          }}
        />
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%',
            alignItems: 'center',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? 1 : 0
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
              cursor: 'pointer',
              '&:hover': {
                color: '#FFD700'
              },
              fontSize: isMobile ? '0.75rem' : '0.875rem'
            }}
          >
            Terms of Use
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
              fontSize: isMobile ? '0.75rem' : '0.875rem'
            }}
          >
            © 2025 Meta Mansions. All rights reserved.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
              cursor: 'pointer',
              '&:hover': {
                color: '#FFD700'
              },
              fontSize: isMobile ? '0.75rem' : '0.875rem'
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeVisitors; 