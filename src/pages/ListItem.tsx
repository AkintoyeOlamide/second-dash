import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Stack,
  Container,
  Paper,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ShoppingCart as CartIcon,
  Timer as TimerIcon,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

// Sample random items data
const randomItems = [
  {
    id: 1,
    name: 'Abstract Painting',
    category: 'Art',
    price: '2.5 ETH',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    likes: 156,
    isLiked: false,
    timeLeft: '2 days',
  },
  {
    id: 2,
    name: 'Modern Sofa',
    category: 'Furniture',
    price: '1.8 ETH',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    likes: 89,
    isLiked: true,
    timeLeft: '1 day',
  },
  {
    id: 3,
    name: 'Luxury Car',
    category: 'Vehicles',
    price: '25.5 ETH',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    likes: 234,
    isLiked: false,
    timeLeft: '3 days',
  },
  {
    id: 4,
    name: 'Designer Watch',
    category: 'Fashion',
    price: '3.2 ETH',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    likes: 167,
    isLiked: false,
    timeLeft: '1 week',
  },
  {
    id: 5,
    name: 'Gaming Console',
    category: 'Electronics',
    price: '1.5 ETH',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    likes: 98,
    isLiked: true,
    timeLeft: '4 days',
  },
  {
    id: 6,
    name: 'Sports Equipment',
    category: 'Sports',
    price: '0.8 ETH',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    likes: 76,
    isLiked: false,
    timeLeft: '2 weeks',
  },
];

export default function ListItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const selectedCategory = location.state?.category || 'All Items';

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: '#000000',
      pt: 4,
      pb: 8
    }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/shop')}
            sx={{ 
              color: '#FFD700',
              mb: 2,
              '&:hover': {
                background: 'rgba(255,215,0,0.1)'
              }
            }}
          >
            Back to Shop
          </Button>
          <Typography 
            variant="h1" 
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: '#fff',
              mb: 2,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #FFFFFF 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {selectedCategory}
          </Typography>
        </Box>

        {/* Items Grid */}
        <Grid container spacing={3}>
          {randomItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 4px 20px rgba(255, 215, 0, 0.2)',
                  },
                }}
              >
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
                      label={item.category} 
                      size="small"
                      sx={{ 
                        background: 'rgba(255, 215, 0, 0.1)',
                        color: '#FFD700',
                        fontWeight: 'bold'
                      }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Rating value={item.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      ({item.likes} likes)
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: '#FFD700' }}>
                      {item.price}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TimerIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {item.timeLeft}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<CartIcon />}
                      sx={{
                        background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                        color: '#000',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
                        },
                      }}
                    >
                      List now
                    </Button>
                    <IconButton 
                      sx={{ 
                        color: item.isLiked ? '#FFD700' : 'rgba(255,255,255,0.5)',
                        '&:hover': {
                          color: '#FFD700'
                        }
                      }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton 
                      sx={{ 
                        color: 'rgba(255,255,255,0.5)',
                        '&:hover': {
                          color: '#FFD700'
                        }
                      }}
                    >
                      <ShareIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 