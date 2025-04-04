import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, useTheme, useMediaQuery, Button, IconButton, Chip, Avatar, Card, CardMedia, CardContent, Collapse, Divider } from '@mui/material';
import { Key as KeyIcon, Favorite, FavoriteBorder, Share, LocationOn, SquareFoot, AccessTime, EmojiEvents, Add as AddIcon, TrendingUp, Timer, Remove as RemoveIcon } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { Star, LocationOn as LocationIcon, People } from '@mui/icons-material';

// Sample user data
const users = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Premium Investor',
    avatar: 'https://i.pravatar.cc/150?img=1',
    mansions: 0,
  },
  {
    id: 2,
    name: 'Sarah Smith',
    role: 'Elite Owner',
    avatar: 'https://i.pravatar.cc/150?img=2',
    mansions: 0,
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'Master Investor',
    avatar: 'https://i.pravatar.cc/150?img=3',
    mansions: 0,
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Rising Star',
    avatar: 'https://i.pravatar.cc/150?img=4',
    mansions: 0,
  },
];

// Trending Items Data
const trendingItems = [
  {
    id: 1,
    name: 'Luxury Beachfront Villa',
    category: 'Real Estate',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    timeLeft: '0 days left',
    discount: '0%'
  },
  {
    id: 2,
    name: 'Modern Penthouse Suite',
    category: 'Real Estate',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    timeLeft: '0 days left',
    discount: '0%'
  },
  {
    id: 3,
    name: 'Historic Castle Estate',
    category: 'Real Estate',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    timeLeft: '0 days left',
    discount: '0%'
  }
];

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'How can I get access to Meta Mansions on mobile or desktop?',
      answer: 'Meta Mansions is accessible through any modern web browser on both mobile and desktop devices. Simply visit our website and connect your wallet to start exploring.',
    },
    {
      id: 2,
      question: 'Why can\'t I find the mansion that I\'m looking for?',
      answer: 'If you\'re having trouble finding a specific mansion, make sure to check your search filters and spelling. Some mansions might be temporarily unavailable or already sold.',
    },
    {
      id: 3,
      question: 'Can I visit Meta Mansions on web or mobile?',
      answer: 'Yes! Meta Mansions is fully optimized for both web and mobile browsers. You can explore, buy, and interact with mansions from any device.',
    },
    {
      id: 4,
      question: 'What Internet speed is required?',
      answer: 'We recommend a minimum internet speed of 10 Mbps for the best experience. However, the platform can work with slower connections with reduced graphics quality.',
    },
    {
      id: 5,
      question: 'How do I get help?',
      answer: 'Our support team is available 24/7. You can reach us through the Help Center, send an email to support@metamansions.com, or use the live chat feature.',
    },
  ];

  const handleExpandFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <Box sx={{ 
      px: isMobile ? 1 : 2, 
      py: 0,
      backgroundColor: '#000000',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }}>
      {/* Leaderboard Section */}
      <Box sx={{ 
        mt: 0,
        mb: 0,
        p: 0,
        background: 'rgba(0,0,0,0.8)',
        borderRadius: '0',
        border: 'none'
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          px: 2,
          pt: 2,
          pb: 1
        }}>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.5rem',
            }}
          >
            Top Meta Mansion Owners
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography sx={{ color: '#fff', opacity: 0.7 }}>ALL TIME</Typography>
            <Typography sx={{ color: '#FFD700' }}>THIS MONTH</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: 2 }}>
          {[
            {
              rank: 1,
              name: 'CryptoKing',
              mansions: '0 Mansions',
              eth: '0.00 ETH',
              latest: 'Latest: Meta Mansion #0',
              avatar: '/avatar1.png'
            },
            {
              rank: 2,
              name: 'MetaTrader',
              mansions: '0 Mansions',
              eth: '0.00 ETH',
              latest: 'Latest: Meta Mansion #0',
              avatar: '/avatar2.png'
            },
            {
              rank: 3,
              name: 'NFTMaster',
              mansions: '0 Mansions',
              eth: '0.00 ETH',
              latest: 'Latest: Meta Mansion #0',
              avatar: '/avatar3.png'
            },
            {
              rank: 4,
              name: 'BlockchainPro',
              mansions: '0 Mansions',
              eth: '0.00 ETH',
              latest: 'Latest: Meta Mansion #0',
              avatar: '/avatar4.png'
            },
            {
              rank: 5,
              name: 'Web3Wizard',
              mansions: '0 Mansions',
              eth: '0.00 ETH',
              latest: 'Latest: Meta Mansion #0',
              avatar: '/avatar5.png'
            }
          ].map((user) => (
            <Box
              key={user.rank}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255,215,0,0.1)',
                '&:hover': {
                  borderColor: 'rgba(255,215,0,0.3)',
                  background: 'rgba(255,255,255,0.08)'
                }
              }}
            >
              <Typography
                sx={{
                  color: user.rank <= 3 ? '#FFD700' : '#fff',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  minWidth: '30px'
                }}
              >
                {user.rank}
              </Typography>
              <Avatar
                src={user.avatar}
                sx={{
                  width: 40,
                  height: 40,
                  border: '2px solid rgba(255,215,0,0.3)'
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                  {user.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                    {user.mansions}
                  </Typography>
                  <Typography sx={{ color: '#FFD700', fontSize: '0.9rem' }}>
                    • {user.eth}
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                  {user.latest}
                </Typography>
              </Box>
              {user.rank <= 3 && (
                <Typography sx={{ color: '#FFD700', fontSize: '1.5rem' }}>
                  🏆
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 2
        }}>
          <Button
            sx={{
              color: '#FFD700',
              borderColor: 'rgba(255,215,0,0.3)',
              '&:hover': {
                borderColor: '#FFD700',
                background: 'rgba(255,215,0,0.1)'
              }
            }}
          >
            VIEW ALL OWNERS
          </Button>
        </Box>
      </Box>

      {/* Trending Items Section */}
      <Paper 
        sx={{ 
          p: 1, 
          mb: 4,
          mt: 2,
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 0
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 1, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: '#FFD700',
            fontWeight: 'bold',
          }}
        >
          <TrendingUp sx={{ color: '#FFD700' }} /> Trending Items
        </Typography>
        <Grid container spacing={2}>
          {trendingItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ 
                height: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                    <Chip 
                      label={item.discount} 
                      color="error" 
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.category}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Rating value={item.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      ({item.sales} sales)
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#FFD700' }}>
                      {item.price}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Timer fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {item.timeLeft}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Game Cards Section */}
      <Paper 
        sx={{ 
          p: 1, 
          mb: 4,
          mt: 2,
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 0
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 1, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: '#FFD700',
            fontWeight: 'bold',
          }}
        >
          <EmojiEvents sx={{ color: '#FFD700' }} /> Featured Games
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              id: 1,
              name: 'Meta Racing',
              description: 'Race your virtual cars in the metaverse',
              players: 0,
              rating: 0.00,
              image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
              prize: '0.00 KEYS'
            },
            {
              id: 2,
              name: 'Crypto Arena',
              description: 'Battle with your NFT characters',
              players: 0,
              rating: 0.00,
              image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
              prize: '0.00 KEYS'
            },
            {
              id: 3,
              name: 'Blockchain Quest',
              description: 'Explore the metaverse in this RPG',
              players: 0,
              rating: 0.00,
              image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
              prize: '0.00 KEYS'
            }
          ].map((game) => (
            <Grid item xs={12} sm={6} md={4} key={game.id}>
              <Card sx={{ 
                height: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={game.image}
                  alt={game.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>{game.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {game.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Rating value={game.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      ({game.players} players)
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#FFD700' }}>
                      {game.prize}
                    </Typography>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: '#FFD700',
                        borderColor: 'rgba(255, 215, 0, 0.3)',
                        '&:hover': {
                          borderColor: '#FFD700',
                          backgroundColor: 'rgba(255, 215, 0, 0.1)'
                        }
                      }}
                    >
                      Play Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* FAQ Section */}
      <Paper sx={{ 
        p: 2, 
        mt: 2,
        mb: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: 0
      }}>
        <Typography
          variant="h4"
          sx={{
            color: '#FFD700',
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'left',
            pl: 0
          }}
        >
          Frequently asked questions
        </Typography>
        <Box>
          {faqs.map((faq) => (
            <React.Fragment key={faq.id}>
              <Box
                onClick={() => handleExpandFaq(faq.id)}
                sx={{
                  py: 3,
                  cursor: 'pointer',
                  '&:hover': {
                    '& .question': {
                      color: '#FFD700',
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                  {expandedFaq === faq.id ? (
                    <RemoveIcon sx={{ color: '#FFD700', fontSize: '1.2rem' }} />
                  ) : (
                    <AddIcon sx={{ color: '#FFD700', fontSize: '1.2rem' }} />
                  )}
                </Box>
                <Collapse in={expandedFaq === faq.id}>
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
              </Box>
              <Divider sx={{ borderColor: 'rgba(255, 215, 0, 0.1)' }} />
            </React.Fragment>
          ))}
        </Box>
      </Paper>

      {/* Footer */}
      <Box 
        sx={{ 
          mt: 4,
          mb: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1
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
            maxWidth: '1200px',
            px: 2
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
}; 