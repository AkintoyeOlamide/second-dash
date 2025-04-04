import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Button,
  Chip
} from '@mui/material';
import { LocationOn, ShoppingCart, Timer } from '@mui/icons-material';

interface TrendingItem {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  timeLeft: string;
  location: string;
}

const trendingItems: TrendingItem[] = [
  {
    id: 1,
    name: "Rare NFT Art Collection",
    image: "/nft-art.jpg",
    category: "Art",
    price: 2.5,
    timeLeft: "2h 30m",
    location: "Digital Gallery"
  },
  {
    id: 2,
    name: "Limited Edition Sneakers",
    image: "/sneakers.jpg",
    category: "Fashion",
    price: 1.8,
    timeLeft: "1h 45m",
    location: "Virtual Store"
  },
  {
    id: 3,
    name: "Exclusive Game Skin",
    image: "/game-skin.jpg",
    category: "Gaming",
    price: 0.75,
    timeLeft: "3h 15m",
    location: "Game Marketplace"
  },
  {
    id: 4,
    name: "Designer Virtual Wear",
    image: "/virtual-wear.jpg",
    category: "Fashion",
    price: 1.2,
    timeLeft: "4h 20m",
    location: "Fashion Hub"
  },
  {
    id: 5,
    name: "Digital Art Masterpiece",
    image: "/digital-art.jpg",
    category: "Art",
    price: 3.5,
    timeLeft: "5h 10m",
    location: "Art Gallery"
  },
  {
    id: 6,
    name: "Rare In-Game Item",
    image: "/game-item.jpg",
    category: "Gaming",
    price: 0.95,
    timeLeft: "1h 30m",
    location: "Game Store"
  },
  {
    id: 7,
    name: "Virtual Jewelry Set",
    image: "/jewelry.jpg",
    category: "Fashion",
    price: 2.1,
    timeLeft: "6h 45m",
    location: "Jewelry Boutique"
  },
  {
    id: 8,
    name: "Digital Collectible Card",
    image: "/collectible.jpg",
    category: "Gaming",
    price: 0.5,
    timeLeft: "2h 15m",
    location: "Collectibles Market"
  }
];

const TrendingItems: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ 
          color: '#FFD700', 
          fontWeight: 600,
          mb: 2
        }}>
          Trending Items
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '600px'
        }}>
          Discover the most popular items across our virtual marketplace
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {trendingItems.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
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
                image={item.image}
                alt={item.name}
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip
                    label={item.category}
                    size="small"
                    sx={{
                      background: 'rgba(255,215,0,0.1)',
                      color: '#FFD700',
                      fontWeight: 500
                    }}
                  />
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 0.5,
                    color: 'rgba(255,255,255,0.7)'
                  }}>
                    <Timer sx={{ fontSize: '1rem' }} />
                    <Typography variant="body2">
                      {item.timeLeft}
                    </Typography>
                  </Box>
                </Box>

                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#fff', 
                    fontWeight: 600,
                    fontSize: '1.1rem'
                  }}
                >
                  {item.name}
                </Typography>

                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  color: 'rgba(255,255,255,0.7)'
                }}>
                  <LocationOn sx={{ fontSize: '1rem' }} />
                  <Typography variant="body2">
                    {item.location}
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
                    {item.price} ETH
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    sx={{
                      background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
                      color: '#000',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
                      }
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingItems; 