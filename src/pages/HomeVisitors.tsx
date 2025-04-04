import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Paper, Typography, Button, Card, CardMedia, Divider, Chip, CardContent, Collapse } from '@mui/material';
import { LocationOn, Add as AddIcon, ShoppingCart, Timer, Remove as RemoveIcon } from '@mui/icons-material';
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
    price: 0.0331,
    lastSale: 0.02,
  },
  {
    id: 4041,
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    price: 0.0331,
    lastSale: 0.02,
  },
  {
    id: 8346,
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    price: 0.0332,
    lastSale: 0.02,
  },
];

const popularMansions: Mansion[] = [
  // ... existing mansion data ...
];

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    // Generate 200 stars with random positions and sizes
    const newStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1,
      opacity: 0.1
    }));
    setStars(newStars);

    // Twinkle effect
    const interval = setInterval(() => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          opacity: Math.random() * 0.1
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'rgba(0,0,0,0.95)'
      }}
    >
      {stars.map(star => (
        <Box
          key={star.id}
          sx={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            opacity: star.opacity,
            transition: 'opacity 2s ease-in-out'
          }}
        />
      ))}
    </Box>
  );
};

const HomeVisitors: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);
  const [selectedMansion, setSelectedMansion] = useState<Mansion | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

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
      position: 'relative', 
      minHeight: '100vh', 
      background: 'transparent',
      zIndex: 1
    }}>
      <StarBackground />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        {/* Video Carousel Section */}
        <Box sx={{ mb: 4 }}>
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
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,215,0,0.2)'
            }}
          >
            {carouselItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  height: '500px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.7)'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                  }}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                    color: '#fff',
                    p: 4,
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
                    variant="h2"
                    sx={{
                      color: '#FDEB91',
                      fontWeight: 800,
                      fontSize: '3.5rem',
                      mb: 2,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      letterSpacing: '1px',
                      textAlign: 'center',
                      width: '100%'
                    }}
                  >
                    Welcome to Meta Mansions
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#FFFFFF',
                      maxWidth: '600px',
                      fontWeight: 500,
                      fontSize: '1.5rem',
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
                      fontSize: '1rem',
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
        <Box sx={{ mt: 6, mb: 4 }}>
          <Typography variant="h4" sx={{ color: '#FFD700', mb: 3, fontWeight: 600 }}>
            Trending Meta Mansions
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 3,
            width: '100%',
          }}>
            {trendingMansions.map((mansion) => (
              <Box
                key={mansion.id}
                sx={{
                  background: '#242424',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  }
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    width: '100%',
                    height: '300px',
                    position: 'relative',
                    background: '#2a2a2a',
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
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                      Meta Mansion #{mansion.id}
                    </Typography>
                    <Box sx={{ 
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: '8px',
                      px: 1.5,
                      py: 0.5,
                    }}>
                      <Typography variant="body2" sx={{ color: '#FFD700' }}>
                        #{mansion.id.toString().padStart(4, '0')}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Price Information */}
                  <Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>
                    {mansion.price} ETH
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                    Last sale: {mansion.lastSale} WETH
                  </Typography>

                  {/* Buttons Container */}
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      sx={{
                        flex: 1,
                        background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                        color: '#000',
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '1rem',
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
                        background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                        color: '#000',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                        }
                      }}
                    >
                      <ShoppingCart sx={{ fontSize: '1.2rem' }} />
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Featured Games Section */}
        <Paper sx={{ 
          p: 3, 
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 215, 0, 0.2)',
          mt: 4
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
              Featured Games
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
                    image={game.image}
                    alt={game.name}
                    sx={{
                      objectFit: 'cover',
                      borderBottom: '1px solid rgba(255,215,0,0.1)'
                    }}
                  />
                  <CardContent sx={{ 
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
                      {game.name}
                    </Typography>

                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'rgba(255,255,255,0.7)',
                      mb: 2
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography variant="body2">
                          {game.players} players
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography variant="body2" sx={{ color: '#FFD700' }}>
                          {game.rating}
                        </Typography>
                        <Typography variant="body2">
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
        <Box sx={{ mt: 8, mb: 6, width: '100%' }}>
          <Typography
            variant="h4"
            sx={{
              color: '#FDEB91',
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center'
            }}
          >
            Frequently asked questions
          </Typography>
          <Box sx={{ width: '100%' }}>
            {[
              {
                question: 'How can I get access to Meta Mansions on mobile or desktop?',
                answer: 'You can access Meta Mansions through our web app on any device with a modern browser. For the best experience, we recommend using Chrome or Firefox.'
              },
              {
                question: 'Why can\'t I find the mansion that I\'m looking for?',
                answer: 'Make sure you\'re using the correct search filters and check the spelling of the mansion name. If you still can\'t find it, it might be temporarily unavailable or sold.'
              },
              {
                question: 'Can I visit Meta Mansions on web or mobile?',
                answer: 'Yes, you can visit Meta Mansions on both web and mobile browsers. Our platform is fully responsive and optimized for all devices.'
              },
              {
                question: 'What Internet speed is required?',
                answer: 'We recommend a minimum internet speed of 10 Mbps for the best experience. However, the platform can work with slower connections with reduced graphics quality.'
              },
              {
                question: 'How do I get help?',
                answer: 'You can reach our support team through the Help Center, send us an email at support@metamansions.com, or use the live chat feature in the bottom right corner.'
              }
            ].map((faq, index) => (
              <React.Fragment key={index}>
                <Box
                  onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                  sx={{
                    py: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    width: '100%',
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
                      fontSize: '0.9rem',
                      flex: 1,
                      textAlign: 'left'
                    }}
                  >
                    {faq.question}
                  </Typography>
                  {expandedQuestion === index ? (
                    <RemoveIcon sx={{ color: '#FFD700', fontSize: '1.2rem' }} />
                  ) : (
                    <AddIcon sx={{ color: '#FFD700', fontSize: '1.2rem' }} />
                  )}
                </Box>
                <Collapse in={expandedQuestion === index}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      mt: 2,
                      mb: 3,
                      pl: 2,
                      fontSize: '0.8rem',
                      lineHeight: 1.4
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </Collapse>
                <Divider sx={{ borderColor: 'rgba(255, 215, 0, 0.1)' }} />
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box 
        sx={{ 
          mt: 4,
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
          px: 2
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
            alignItems: 'center'
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              '&:hover': {
                color: '#FFD700'
              }
            }}
          >
            Terms of Use
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.5)',
              textAlign: 'center'
            }}
          >
            © 2025 Meta Mansions. All rights reserved.
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              '&:hover': {
                color: '#FFD700'
              }
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