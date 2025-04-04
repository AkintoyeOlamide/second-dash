import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container,
  Typography, 
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { 
  RocketLaunch as RocketIcon,
  ArrowBack as ArrowBackIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

const carouselItems = [
  {
    type: 'video',
    content: '/Loop3.mp4',
    title: 'AI Avatar Creation',
    description: 'Watch how our AI creates unique digital avatars'
  }
];

const Agent: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

  const handlePrevSlide = () => {};
  const handleNextSlide = () => {};

  return (
    <Box sx={{ 
      height: '100vh', 
      background: '#000000',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 70%)',
          animation: 'pulse 8s infinite',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)' },
          },
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(255,215,0,0.3)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s infinite`,
            animationDelay: `${Math.random() * 5}s`,
            '@keyframes float': {
              '0%': { transform: 'translateY(0) rotate(0deg)' },
              '50%': { transform: 'translateY(-20px) rotate(180deg)' },
              '100%': { transform: 'translateY(0) rotate(360deg)' },
            },
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 0 }}>
        <Grid container spacing={0} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box
                sx={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 3,
                  px: 4,
                  py: 1.5,
                  borderRadius: '30px',
                  background: 'rgba(255,215,0,0.15)',
                  border: '2px solid rgba(255,215,0,0.3)',
                  boxShadow: '0 0 20px rgba(255,215,0,0.2)',
                }}
              >
                <RocketIcon sx={{ color: '#FFD700', fontSize: '2.5rem' }} />
                <Typography sx={{ 
                  color: '#FFD700', 
                  fontWeight: 800,
                  fontSize: '2.5rem',
                  letterSpacing: '1px',
                  textShadow: '0 0 10px rgba(255,215,0,0.3)',
                }}>
                  Coming Soon
                </Typography>
              </Box>

              <Typography 
                variant="h2"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  mb: 1.5,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  lineHeight: 1.2,
                }}
              >
                AI-Powered
                <Box component="span" sx={{ color: '#FFD700' }}>
                  {" "}Avatar Builder
                </Box>
              </Typography>

              <Typography 
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  mb: 2,
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                Experience the future of digital identity with our advanced AI avatar generation system.
                Create unique, personalized avatars that perfectly match your vision using cutting-edge artificial intelligence.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    color: '#000',
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: '30px',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FFC700, #FF9500)',
                    },
                  }}
                >
                  Get Notified
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: 'rgba(255,215,0,0.3)',
                    color: '#FFD700',
                    px: 3,
                    py: 1,
                    borderRadius: '30px',
                    '&:hover': {
                      borderColor: '#FFD700',
                      background: 'rgba(255,215,0,0.1)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ pl: { md: 3 } }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '500px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 30px rgba(255,215,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#000000',
                ml: { md: -3 },
              }}
            >
              {/* Carousel Content */}
              {carouselItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      margin: 'auto',
                    }}
                  >
                    <source src={item.content} type="video/mp4" />
                  </video>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ 
                        color: '#FFFFFF',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Agent; 