import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, Button, IconButton } from '@mui/material';
import { PlayArrow, Star, ArrowForward, Favorite, Share, EmojiEvents, Timer, Group, TrendingUp } from '@mui/icons-material';

export default function Play() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <Box sx={{
      minHeight: '100vh',
      background: '#000000',
      pt: 4,
      pb: 8
    }}>
      <Container maxWidth="xl">
        {/* Stats Section */}
        <Box sx={{ 
          mb: 8,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          flexWrap: 'wrap'
        }}>
          {/* Hero Section */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 800,
                color: '#fff',
                mb: 2,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #FFFFFF 0%, #FDEB91 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                whiteSpace: 'nowrap'
              }}
            >
              Play & Earn with Meta Mansions
            </Typography>
            <Typography 
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '1rem',
                maxWidth: '400px',
                mb: 0
              }}
            >
              Compete for rewards with your friends 
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Box sx={{ display: 'flex', gap: 2, flex: 1, justifyContent: 'flex-end' }}>
            {/* ETH Earned */}
            <Card
              sx={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                p: 1,
                minWidth: 160,
                height: 60,
                border: '1px solid rgba(255,215,0,0.2)',
                backdropFilter: 'blur(10px)',
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
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 700,
                    background: 'linear-gradient(90deg, #FFFFFF 0%, #FFD700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
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
                minWidth: 160,
                height: 60,
                border: '1px solid rgba(255,215,0,0.2)',
                backdropFilter: 'blur(10px)',
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
                    color: '#fff',
                    fontSize: '1rem',
                    fontWeight: 700,
                    background: 'linear-gradient(90deg, #FFFFFF 0%, #FFD700 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  0.00
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>

      

        {/* Featured Games */}
        <Box sx={{ mb: 6 }}>
          {/* Carousel Section */}
          <Box sx={{ mb: 6 }}>
            <Card
              sx={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                height: '400px',
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
                  borderRadius: '24px',
                  background: 'linear-gradient(90deg, #fff, transparent) border-box',
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
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.95) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2,
                  padding: 4
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#fff',
                    fontSize: '2.5rem',
                    fontFamily: 'STEELAR, sans-serif',
                    textAlign: 'center',
                    fontWeight: 400,
                    mb: 2
                  }}
                >
                  {carouselData[currentSlide].title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    opacity: 0.9
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Group sx={{ color: '#FFD700', fontSize: 20 }} />
                    <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                      0.00 Players
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Star sx={{ color: '#FFD700', fontSize: 20 }} />
                    <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                      0.00 Rating
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmojiEvents sx={{ color: '#FFD700', fontSize: 20 }} />
                    <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>
                      0.00 META
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Box>

          {/* Game Cards Grid */}
          <Grid container spacing={6}>
            {games.map((game) => (
              <Grid item xs={12} sm={6} md={4} key={game.id}>
                <Card
                  sx={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '24px',
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
                      height: 180,
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
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#fff',
                        mb: 1,
                        fontWeight: 600
                      }}
                    >
                      {game.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Star sx={{ color: '#FFD700', fontSize: 20 }} />
                      <Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>
                        {game.rating}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', ml: 'auto' }}>
                        {game.players}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', mb: 2 }}>
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
                          py: 0.75,
                          px: 2,
                          fontSize: '0.875rem',
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
                          color: '#fff',
                          background: 'rgba(255,215,0,0.1)',
                          '&:hover': { background: 'rgba(255,215,0,0.2)' }
                        }}
                      >
                        <Favorite fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{
                          color: '#fff',
                          background: 'rgba(255,215,0,0.1)',
                          '&:hover': { background: 'rgba(255,215,0,0.2)' }
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
        <Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            mb: 6,
            position: 'relative'
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#fff',
                fontWeight: 700,
                fontSize: '2rem',
                background: 'linear-gradient(90deg, #FFFFFF 0%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Categories
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={4} key={category.id}>
                <Card
                  sx={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    height: 200,
                    width: '100%',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .category-image': {
                        transform: 'scale(1.1)'
                      },
                      '& .category-overlay': {
                        background: `linear-gradient(to top, #FFD700CC, transparent)`
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: '1px solid rgba(255,215,0,0.2)',
                      borderRadius: '24px',
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
                      background: `linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.98) 100%)`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      zIndex: 2,
                      textAlign: 'center',
                      padding: 3,
                      opacity: 0.95
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        lineHeight: 1.2,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        mb: 1
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Box
                      sx={{
                        background: 'rgba(255,215,0,0.2)',
                        borderRadius: '12px',
                        px: 1.5,
                        py: 0.5,
                        whiteSpace: 'nowrap',
                        border: '1px solid rgba(255,215,0,0.3)',
                        mb: 1
                      }}
                    >
                      <Typography 
                        sx={{ 
                          color: '#FFD700',
                          fontSize: '0.875rem',
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
                      <TrendingUp sx={{ color: '#FFD700', fontSize: 16 }} />
                      <Typography 
                        sx={{ 
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: '0.875rem',
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
        <Box sx={{ mt: 10 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            mb: 6,
            position: 'relative'
          }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#fff',
                fontWeight: 700,
                fontSize: '2rem',
                background: 'linear-gradient(90deg, #FFFFFF 0%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Top Players
            </Typography>
          </Box>

          <Card
            sx={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '24px',
              p: 3,
              border: '1px solid rgba(255,215,0,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                    gap: 3,
                    p: 2,
                    borderRadius: '16px',
                    background: player.rank <= 3 ? 'rgba(255,215,0,0.05)' : 'transparent',
                    border: player.rank <= 3 ? '1px solid rgba(255,215,0,0.2)' : 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,215,0,0.05)',
                      transform: 'translateX(8px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '12px',
                      background: player.rank <= 3 ? 'rgba(255,215,0,0.1)' : 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: player.rank <= 3 ? '1px solid rgba(255,215,0,0.3)' : 'none'
                    }}
                  >
                    <Typography
                      sx={{
                        color: player.rank <= 3 ? '#FFD700' : '#fff',
                        fontWeight: 700,
                        fontSize: '1.1rem'
                      }}
                    >
                      #{player.rank}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '1.1rem'
                      }}
                    >
                      {player.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.875rem'
                      }}
                    >
                      {player.games} games played
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: 'rgba(255,215,0,0.1)',
                      borderRadius: '12px',
                      px: 2,
                      py: 1,
                      border: '1px solid rgba(255,215,0,0.2)'
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#FFD700',
                        fontWeight: 700,
                        fontSize: '1.1rem'
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