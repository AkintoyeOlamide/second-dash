import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { PlayArrow, Star, ArrowForward, Favorite, Share, EmojiEvents, Timer, Group, TrendingUp } from '@mui/icons-material';

export default function Play() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const carouselData = [
    {
      title: "Meta Mansion Championship",
      image: "/images/gaming/games/gaming3.png"
    },
    {
      title: "Mansion Masters League",
      image: "/images/gaming/games/gaming4.png"
    },
    {
      title: "Property Wars",
      image: "/images/gaming/games/gaming5.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const games = [
    {
      id: 1,
      title: "Meta Mansion Royale",
      image: "/images/gaming/games/gaming1.jpg",
      players: "0.00 playing",
      rating: 0.00,
      category: "Battle Royale"
    },
    {
      id: 2,
      title: "Mansion Tycoon",
      image: "/images/gaming/games/gaming2.avif",
      players: "0.00 playing",
      rating: 0.00,
      category: "Strategy"
    },
    {
      id: 3,
      title: "Property Masters",
      image: "/images/gaming/games/gaming4.png",
      players: "0.00 playing",
      rating: 0.00,
      category: "Simulation"
    }
  ];

  const categories = [
    {
      id: 1,
      title: "Action Games",
      count: "0.00 Games",
      image: "/images/gaming/games/gaming1.jpg",
      color: "#FF4757"
    },
    {
      id: 2,
      title: "Strategy",
      count: "0.00 Games",
      image: "/images/gaming/games/gaming2.avif",
      color: "#2E86DE"
    },
    {
      id: 3,
      title: "Adventure",
      count: "0.00 Games",
      image: "/images/gaming/games/gaming3.png",
      color: "#FF6B6B"
    },
    {
      id: 4,
      title: "Simulation",
      count: "0.00 Games",
      image: "/images/gaming/games/gaming4.png",
      color: "#A8E6CF"
    }
  ];

  const aiAgents = [
    {
      id: 1,
      name: "CryptoKing",
      image: "/images/gaming/agents/agent1.jpg",
      rating: 0.00,
      players: "0.00 playing",
      category: "AI-Agent"
    },
    {
      id: 2,
      name: "MetaMaster",
      image: "/images/gaming/agents/agent2.jpg",
      rating: 0.00,
      players: "0.00 playing",
      category: "AI-Agent"
    },
    {
      id: 3,
      name: "GamePro",
      image: "/images/gaming/agents/agent3.jpg",
      rating: 0.00,
      players: "0.00 playing",
      category: "AI-Agent"
    },
    {
      id: 4,
      name: "MansionLord",
      image: "/images/gaming/agents/agent4.jpg",
      rating: 0.00,
      players: "0.00 playing",
      category: "AI-Agent"
    },
    {
      id: 5,
      name: "PropertyQueen",
      image: "/images/gaming/agents/agent5.jpg",
      rating: 0.00,
      players: "0.00 playing",
      category: "AI-Agent"
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
      mt: 6
    }}>
      <Container 
        maxWidth="xl" 
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          '& .MuiCard-root': {
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            border: `1px solid ${theme.palette.divider}`,
            '&:hover': {
              borderColor: theme.palette.primary.main,
            }
          },
          '& .MuiTypography-root': {
            color: theme.palette.text.primary
          }
        }}
      >
        {/* Stats Section */}
        <Box sx={{ 
          mb: { xs: 4, sm: 8 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: { xs: 3, sm: 4 },
          flexWrap: 'wrap',
          width: '100%',
          overflow: 'hidden'
        }}>
          {/* Hero Section */}
          <Box sx={{ flex: 1, width: '100%', overflow: 'hidden' }}>
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                fontWeight: 800,
                color: theme.palette.mode === 'dark' ? '#fff' : '#000000',
                mb: 2,
                letterSpacing: '-0.02em',
                whiteSpace: 'normal',
                overflow: 'visible',
                textOverflow: 'clip',
                width: '100%',
                maxWidth: 'none',
                wordBreak: 'normal'
              }}
            >
              Play & Earn with Meta Mansion
            </Typography>
            <Typography 
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                maxWidth: '100%',
                mb: 0
              }}
            >
              Compete for rewards with your friends 
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Box sx={{ 
            display: 'flex', 
            gap: { xs: 1, sm: 2 }, 
            flex: { xs: '0 0 100%', sm: 1 }, 
            justifyContent: { xs: 'space-between', sm: 'flex-end' },
            width: '100%',
            overflow: 'hidden'
          }}>
            {/* ETH Earned */}
            <Card
              sx={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                p: 1,
                minWidth: { xs: '48%', sm: 160 },
                height: 60,
                border: '1px solid rgba(255,215,0,0.2)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease'
                }
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                height: '100%'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      background: 'rgba(255,215,0,0.1)',
                      borderRadius: '6px',
                      p: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <EmojiEvents sx={{ color: '#FFD700', fontSize: 16 }} />
                  </Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>
                    Rewards
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                    fontSize: '1rem',
                    fontWeight: 700,
                    ml: 2
                  }}
                >
                  0.00 ETH
                </Typography>
              </Box>
            </Card>

            {/* Total Gamers */}
            <Card
              sx={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                p: 1,
                minWidth: { xs: '48%', sm: 160 },
                height: 60,
                border: '1px solid rgba(255,215,0,0.2)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s ease'
                }
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                height: '100%'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      background: 'rgba(255,215,0,0.1)',
                      borderRadius: '6px',
                      p: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Group sx={{ color: '#FFD700', fontSize: 16 }} />
                  </Box>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>
                    Players
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                    fontSize: '1rem',
                    fontWeight: 700
                  }}
                >
                  0.00
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>

        {/* Featured Games */}
        <Box sx={{ mb: { xs: 4, sm: 6 }, width: '100%', overflow: 'hidden' }}>
          {/* Carousel Section */}
          <Box sx={{ mb: { xs: 4, sm: 6 }, width: '100%', overflow: 'hidden' }}>
            <Card
              sx={{
                background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                borderRadius: { xs: '16px', sm: '24px' },
                overflow: 'hidden',
                position: 'relative',
                height: { xs: '250px', sm: '350px', md: '400px' },
                width: '100%',
                '&:hover': {
                  '& .carousel-image': {
                    transform: 'scale(1.1)'
                  }
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  border: '2px solid transparent',
                  borderRadius: { xs: '16px', sm: '24px' },
                  background: theme.palette.mode === 'dark' ? 'linear-gradient(90deg, #fff, transparent) border-box' : 'linear-gradient(90deg, #000, transparent) border-box',
                  WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'destination-out',
                  maskComposite: 'exclude',
                  animation: 'borderRotate 3s linear infinite',
                  zIndex: 2
                },
                '@keyframes borderRotate': {
                  '0%': {
                    background: 'linear-gradient(0deg, #fff, transparent) border-box',
                  },
                  '12.5%': {
                    background: 'linear-gradient(45deg, #fff, transparent) border-box',
                  },
                  '25%': {
                    background: 'linear-gradient(90deg, #fff, transparent) border-box',
                  },
                  '37.5%': {
                    background: 'linear-gradient(135deg, #fff, transparent) border-box',
                  },
                  '50%': {
                    background: 'linear-gradient(180deg, #fff, transparent) border-box',
                  },
                  '62.5%': {
                    background: 'linear-gradient(225deg, #fff, transparent) border-box',
                  },
                  '75%': {
                    background: 'linear-gradient(270deg, #fff, transparent) border-box',
                  },
                  '87.5%': {
                    background: 'linear-gradient(315deg, #fff, transparent) border-box',
                  },
                  '100%': {
                    background: 'linear-gradient(360deg, #fff, transparent) border-box',
                  }
                }
              }}
            >
              <Box
                component="img"
                src={carouselData[currentSlide].image}
                alt={carouselData[currentSlide].title}
                className="carousel-image"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: theme.palette.mode === 'dark' 
                    ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)'
                    : 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: { xs: 1, sm: 2 },
                  padding: { xs: 2, sm: 4 }
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#fff !important',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    fontFamily: 'STEELAR, sans-serif',
                    textAlign: 'center',
                    fontWeight: 400,
                    mb: { xs: 1, sm: 2 },
                    maxWidth: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {carouselData[currentSlide].title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 3 },
                    opacity: 0.9,
                    flexWrap: { xs: 'wrap', sm: 'nowrap' },
                    justifyContent: 'center',
                    width: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Group sx={{ color: '#FFD700', fontSize: { xs: 16, sm: 20 } }} />
                    <Typography sx={{ color: '#fff !important', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                      0.00 Players
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Star sx={{ color: '#FFD700', fontSize: { xs: 16, sm: 20 } }} />
                    <Typography sx={{ color: '#fff !important', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                      0.00 Rating
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmojiEvents sx={{ color: '#FFD700', fontSize: { xs: 16, sm: 20 } }} />
                    <Typography sx={{ color: '#fff !important', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                      0.00 META
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>

          {/* Game Cards Grid */}
          <Grid container spacing={{ xs: 2, sm: 4, md: 6 }} sx={{ width: '100%', margin: 0 }}>
            {games.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id} sx={{ padding: { xs: '0 0 16px 0', sm: '0 16px 16px 0' } }}>
                <Card
                  sx={{
                    width: '100%',
                    background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    borderRadius: { xs: '16px', sm: '24px' },
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 140, sm: 160, md: 180 },
                      overflow: 'hidden'
                    }}
                  >
                    <Box
                      component="img"
                      src={game.image}
                      alt={game.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                  <Box sx={{ p: { xs: 1.5, sm: 2 } }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#fff',
                        mb: 1,
                        fontWeight: 600,
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {game.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Star sx={{ color: '#FFD700', fontSize: { xs: 16, sm: 20 } }} />
                      <Typography sx={{ color: '#fff', fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        {game.rating}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.75rem', sm: '0.875rem' }, ml: 'auto' }}>
                        {game.players}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.75rem', sm: '0.875rem' }, mb: 2 }}>
                      {game.category}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="contained"
                        startIcon={<PlayArrow />}
                        sx={{
                          background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                          borderRadius: '8px',
                          textTransform: 'none',
                          py: { xs: 0.5, sm: 0.75 },
                          px: { xs: 1.5, sm: 2 },
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          '&:hover': {
                            background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                          }
                        }}
                      >
                        Play Now
                      </Button>
                      <IconButton
                        size="small"
                        sx={{
                          color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.5)',
                          background: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)',
                          '&:hover': { 
                            background: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)',
                            color: theme.palette.mode === 'dark' ? '#fff' : '#000'
                          }
                        }}
                      >
                        <Favorite fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{
                          color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.5)',
                          background: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)',
                          '&:hover': { 
                            background: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)',
                            color: theme.palette.mode === 'dark' ? '#fff' : '#000'
                          }
                        }}
                      >
                        <Share fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Categories */}
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            mb: { xs: 3, sm: 6 },
            position: 'relative',
            width: '100%'
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                fontWeight: 700,
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              Categories
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ width: '100%', margin: 0 }}>
            {categories.map((category, index) => (
              <Grid item xs={6} sm={6} md={3} key={category.id} sx={{ padding: { xs: '0 0 16px 0', sm: '0 16px 16px 0' } }}>
                <Card
                  sx={{
                    background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    borderRadius: { xs: '16px', sm: '24px' },
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    height: { xs: 140, sm: 160, md: 200 },
                    width: '100%',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .category-image': {
                        transform: 'scale(1.1)'
                      },
                      '& .category-overlay': {
                        background: theme.palette.mode === 'dark' ? 'linear-gradient(to top, #FFD700CC, transparent)' : 'linear-gradient(to top, #000000CC, transparent)'
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: theme.palette.mode === 'dark' ? '1px solid rgba(255,215,0,0.2)' : '1px solid rgba(0,0,0,0.2)',
                      borderRadius: { xs: '16px', sm: '24px' },
                      zIndex: 1
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={category.image}
                    alt={category.title}
                    className="category-image"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  />
                  <Box
                    className="category-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: theme.palette.mode === 'dark' ? 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.98) 100%)' : 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.98) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      zIndex: 2,
                      textAlign: 'center',
                      padding: { xs: 1.5, sm: 3 },
                      opacity: 0.95
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#fff !important',
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', sm: '1.5rem' },
                        lineHeight: 1.2,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        mb: 1,
                        maxWidth: '100%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Box
                      sx={{
                        background: 'rgba(255,215,0,0.2)',
                        borderRadius: '12px',
                        px: { xs: 1, sm: 1.5 },
                        py: 0.5,
                        whiteSpace: 'nowrap',
                        border: '1px solid rgba(255,215,0,0.3)',
                        mb: 1
                      }}
                    >
                      <Typography 
                        sx={{ 
                          color: '#FFD700 !important',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          fontWeight: 600,
                          textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                        }}
                      >
                        {category.count}
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      justifyContent: 'center'
                    }}>
                      <TrendingUp sx={{ color: '#FFD700', fontSize: { xs: 14, sm: 16 } }} />
                      <Typography 
                        sx={{ 
                          color: 'rgba(255,255,255,0.9) !important',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' },
                          fontWeight: 500
                        }}
                      >
                        Trending
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Leaderboard Section */}
        <Box sx={{ mt: { xs: 3, sm: 4 }, width: '100%', overflow: 'hidden' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            mb: { xs: 3, sm: 6 },
            position: 'relative',
            width: '100%'
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                fontWeight: 700,
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              Top Players
            </Typography>
          </Box>

          <Card
            sx={{
              background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              borderRadius: { xs: '16px', sm: '24px' },
              p: { xs: 2, sm: 3 },
              border: theme.palette.mode === 'dark' ? '1px solid rgba(255,215,0,0.2)' : '1px solid rgba(0,0,0,0.2)',
              width: '100%',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 }, width: '100%' }}>
              {[
                { rank: 1, name: "CryptoKing", rewards: "234.56 ETH", games: 156 },
                { rank: 2, name: "MetaMaster", rewards: "198.32 ETH", games: 142 },
                { rank: 3, name: "GamePro", rewards: "167.89 ETH", games: 128 },
                { rank: 4, name: "MansionLord", rewards: "145.67 ETH", games: 115 },
                { rank: 5, name: "PropertyQueen", rewards: "123.45 ETH", games: 98 }
              ].map((player) => (
                <Box
                  key={player.rank}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 2, sm: 3 },
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: { xs: '12px', sm: '16px' },
                    background: player.rank <= 3 ? 'rgba(255,215,0,0.05)' : 'transparent',
                    border: player.rank <= 3 ? '1px solid rgba(255,215,0,0.2)' : 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,215,0,0.05)',
                      transform: 'translateX(8px)'
                    },
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 32, sm: 40 },
                      height: { xs: 32, sm: 40 },
                      borderRadius: { xs: '8px', sm: '12px' },
                      background: player.rank <= 3 ? 'rgba(255,215,0,0.1)' : 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: player.rank <= 3 ? '1px solid rgba(255,215,0,0.3)' : 'none',
                      flexShrink: 0
                    }}
                  >
                    <Typography
                      sx={{
                        color: player.rank <= 3 ? '#FFD700' : '#fff',
                        fontWeight: 700,
                        fontSize: { xs: '0.9rem', sm: '1.1rem' }
                      }}
                    >
                      #{player.rank}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: { xs: '0.9rem', sm: '1.1rem' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {player.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                      }}
                    >
                      {player.games} games played
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: 'rgba(255,215,0,0.1)',
                      borderRadius: { xs: '8px', sm: '12px' },
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 0.5, sm: 1 },
                      border: '1px solid rgba(255,215,0,0.2)',
                      flexShrink: 0
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#FFD700',
                        fontWeight: 700,
                        fontSize: { xs: '0.9rem', sm: '1.1rem' }
                      }}
                    >
                      {player.rewards}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
} 