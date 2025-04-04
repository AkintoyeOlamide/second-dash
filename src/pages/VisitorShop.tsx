import React, { useState } from 'react';
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  useTheme,
  useMediaQuery,
  Stack,
  Tooltip,
  Container,
  Paper,
  Avatar,
  Divider,
  Tabs,
  Tab,
  CircularProgress,
} from '@mui/material';
import {
  ShoppingCart as CartIcon,
  TrendingUp as TrendingIcon,
  Star as StarIcon,
  LocalOffer as OfferIcon,
  Timer as TimerIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ShoppingBag as BagIcon,
  EmojiEvents as TrophyIcon,
  Category as CategoryIcon,
  Diamond as DiamondIcon,
  Whatshot as FireIcon,
  NewReleases as NewIcon,
  Home as HomeIcon,
  ShoppingBag as ShoppingBagIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  AccountBalanceWallet as WalletIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Sample data for trending items
const trendingItems = [
  {
    id: 1,
    name: 'Luxury Sports Car',
    category: 'Vehicles',
    price: '25.5 ETH',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    sales: 156,
    timeLeft: '2 days',
    discount: '15% OFF',
  },
  {
    id: 2,
    name: 'Designer Suit',
    category: 'Fashion',
    price: '3.2 ETH',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    sales: 89,
    timeLeft: '1 day',
    discount: '20% OFF',
  },
  {
    id: 3,
    name: 'Smart Watch',
    category: 'Gadgets',
    price: '1.8 ETH',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    sales: 234,
    timeLeft: '3 days',
    discount: '10% OFF',
  },
];

// Rare items
const rareItems = [
  {
    id: 1,
    name: 'Ancient Artifact',
    category: 'Collectibles',
    price: '150 ETH',
    image: 'https://images.unsplash.com/photo-1578301978693-0f3dfb1e6c5d?auto=format&fit=crop&w=800&q=80',
    rarity: 'Legendary',
    totalSupply: '1/1',
    owner: 'CryptoKing',
  },
  {
    id: 2,
    name: 'Golden Dragon',
    category: 'Art',
    price: '75 ETH',
    image: 'https://images.unsplash.com/photo-1578301978693-0f3dfb1e6c5d?auto=format&fit=crop&w=800&q=80',
    rarity: 'Epic',
    totalSupply: '1/5',
    owner: 'ArtCollector',
  },
  {
    id: 3,
    name: 'Mystic Crystal',
    category: 'Collectibles',
    price: '45 ETH',
    image: 'https://images.unsplash.com/photo-1578301978693-0f3dfb1e6c5d?auto=format&fit=crop&w=800&q=80',
    rarity: 'Rare',
    totalSupply: '1/10',
    owner: 'CrystalMaster',
  },
];

// Featured collections
const featuredCollections = [
  {
    id: 1,
    name: 'Luxury Vehicles',
    items: 24,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    creator: 'AutoLux',
    floorPrice: '15 ETH',
  },
  {
    id: 2,
    name: 'Designer Fashion',
    items: 48,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
    creator: 'StyleHouse',
    floorPrice: '2.5 ETH',
  },
  {
    id: 3,
    name: 'Tech Gadgets',
    items: 36,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    creator: 'TechPro',
    floorPrice: '1.2 ETH',
  },
];

// Categories with icons
const categories = [
  { name: 'Art', icon: '🎨' },
  { name: 'Furniture', icon: '🪑' },
  { name: 'Vehicles', icon: '🚗' },
  { name: 'Fashion', icon: '👕' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Music', icon: '🎵' },
];

// Top sellers
const topSellers = [
  {
    id: 1,
    name: 'AutoLux',
    sales: '1,234 ETH',
    items: 156,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'StyleHouse',
    sales: '892 ETH',
    items: 98,
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'TechPro',
    sales: '567 ETH',
    items: 75,
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];

// Update ownedMansions array to have 3 items
const ownedMansions = [
  {
    id: 1,
    name: 'Crystal Palace #4721',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    totalValue: '125.5 ETH',
    purchasedItems: 12,
    lastVisited: '2 hours ago',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Sky Villa #8392',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    totalValue: '98.2 ETH',
    purchasedItems: 8,
    lastVisited: '1 day ago',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Ocean View #6153',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    totalValue: '156.8 ETH',
    purchasedItems: 15,
    lastVisited: '3 hours ago',
    rating: 4.9,
  },
];

// Update recentPurchases array to have 3 items
const recentPurchases = [
  {
    id: 1,
    name: 'Luxury Car',
    mansion: 'Crystal Palace #4721',
    price: '25.5 ETH',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Designer Furniture',
    mansion: 'Sky Villa #8392',
    price: '12.8 ETH',
    date: '2024-03-14',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Smart Home System',
    mansion: 'Ocean View #6153',
    price: '18.5 ETH',
    date: '2024-03-13',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
  },
];

interface Mansion {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  sales: number;
  category: string;
  features: string[];
}

// Sample mansions data
const mansions: Mansion[] = [
  {
    id: 1,
    name: 'Meta Mansion #1234',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Premium',
    features: ['Ocean View', 'Private Pool', 'Smart Home']
  },
  {
    id: 2,
    name: 'Meta Mansion #5678',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Luxury',
    features: ['City View', 'Rooftop Garden', 'Home Theater']
  },
  {
    id: 3,
    name: 'Meta Mansion #9012',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Elite',
    features: ['Medieval Architecture', 'Wine Cellar', 'Private Chapel']
  },
  {
    id: 4,
    name: 'Meta Mansion #3456',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Premium',
    features: ['Ocean View', 'Private Pool', 'Smart Home']
  },
  {
    id: 5,
    name: 'Meta Mansion #7890',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Luxury',
    features: ['City View', 'Rooftop Garden', 'Home Theater']
  },
  {
    id: 6,
    name: 'Meta Mansion #2345',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Elite',
    features: ['Medieval Architecture', 'Wine Cellar', 'Private Chapel']
  },
  {
    id: 7,
    name: 'Meta Mansion #6789',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Premium',
    features: ['Ocean View', 'Private Pool', 'Smart Home']
  },
  {
    id: 8,
    name: 'Meta Mansion #0123',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Luxury',
    features: ['City View', 'Rooftop Garden', 'Home Theater']
  },
  {
    id: 9,
    name: 'Meta Mansion #4567',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Elite',
    features: ['Medieval Architecture', 'Wine Cellar', 'Private Chapel']
  },
  {
    id: 10,
    name: 'Meta Mansion #8901',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Premium',
    features: ['Ocean View', 'Private Pool', 'Smart Home']
  },
  {
    id: 11,
    name: 'Meta Mansion #2345',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Luxury',
    features: ['City View', 'Rooftop Garden', 'Home Theater']
  },
  {
    id: 12,
    name: 'Meta Mansion #6789',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Elite',
    features: ['Medieval Architecture', 'Wine Cellar', 'Private Chapel']
  },
  {
    id: 13,
    name: 'Meta Mansion #0123',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Premium',
    features: ['Ocean View', 'Private Pool', 'Smart Home']
  },
  {
    id: 14,
    name: 'Meta Mansion #4567',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Luxury',
    features: ['City View', 'Rooftop Garden', 'Home Theater']
  },
  {
    id: 15,
    name: 'Meta Mansion #8901',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Elite',
    features: ['Medieval Architecture', 'Wine Cellar', 'Private Chapel']
  },
  {
    id: 16,
    name: 'Meta Mansion #2345',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Premium',
    features: ['Ocean View', 'Private Pool', 'Smart Home']
  },
  {
    id: 17,
    name: 'Meta Mansion #6789',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Luxury',
    features: ['City View', 'Rooftop Garden', 'Home Theater']
  },
  {
    id: 18,
    name: 'Meta Mansion #0123',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Elite',
    features: ['Medieval Architecture', 'Wine Cellar', 'Private Chapel']
  },
  {
    id: 19,
    name: 'Meta Mansion #4567',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Premium',
    features: ['Ocean View', 'Private Pool', 'Smart Home']
  },
  {
    id: 20,
    name: 'Meta Mansion #8901',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Luxury',
    features: ['City View', 'Rooftop Garden', 'Home Theater']
  },
  {
    id: 21,
    name: 'Meta Mansion #2345',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Elite',
    features: ['Medieval Architecture', 'Wine Cellar', 'Private Chapel']
  },
  {
    id: 22,
    name: 'Meta Mansion #6789',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Premium',
    features: ['Ocean View', 'Private Pool', 'Smart Home']
  },
  {
    id: 23,
    name: 'Meta Mansion #0123',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Luxury',
    features: ['City View', 'Rooftop Garden', 'Home Theater']
  },
  {
    id: 24,
    name: 'Meta Mansion #4567',
    price: '0.00 ETH',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    rating: 0.00,
    sales: 0,
    category: 'Elite',
    features: ['Medieval Architecture', 'Wine Cellar', 'Private Chapel']
  }
];

export default function Shop() {
  const [buyMansionOpen, setBuyMansionOpen] = useState(false);
  const [itemDialogOpen, setItemDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    image: null as File | null,
    description: '',
    price: '',
    category: ''
  });
  const [viewTab, setViewTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [selectedMansion, setSelectedMansion] = useState<Mansion | null>(null);
  const [loadingDialogOpen, setLoadingDialogOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setViewTab(newValue);
  };

  const handleBuyMansionOpen = () => {
    setBuyMansionOpen(true);
  };

  const handleBuyMansionClose = () => {
    setBuyMansionOpen(false);
  };

  const handleItemClick = () => {
    setItemDialogOpen(true);
  };

  const handleItemDialogClose = () => {
    setItemDialogOpen(false);
  };

  const handleItemChange = (field: keyof typeof newItem) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(prev => ({ ...prev, [field]: event.target.value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setNewItem(prev => ({ ...prev, image: file }));
    }
  };

  const handleSaveItem = () => {
    // Handle saving the new item
    console.log('Saving item:', newItem);
    handleItemDialogClose();
  };

  const handleOpenDialog = (mansion: Mansion) => {
    setSelectedMansion(mansion);
    setLoadingDialogOpen(true);
    // Simulate loading time
    setTimeout(() => {
      setLoadingDialogOpen(false);
    }, 2000);
  };

  const handleCloseDialog = () => {
    setLoadingDialogOpen(false);
    setSelectedMansion(null);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: '#000000',
      pt: 4,
      pb: 8
    }}>
      <Container maxWidth="xl">
        {/* Header with Buy Button */}
        <Box sx={{ mb: 6, position: 'relative' }}>
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 1
          }}>
            <Button
              variant="outlined"
              startIcon={<ShoppingBagIcon />}
              onClick={() => {
                setViewTab(0);
                document.getElementById('listed-items-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              sx={{
                color: '#FFD700',
                borderColor: 'rgba(255,215,0,0.2)',
                '&:hover': {
                  borderColor: '#FFD700',
                  background: 'rgba(255,215,0,0.1)'
                }
              }}
            >
              View Listed Items
            </Button>
          </Box>
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
              textAlign: 'left',
              maxWidth: '600px'
            }}
          >
            Shopping
          </Typography>
          <Typography 
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              textAlign: 'left'
            }}
          >
            Discover exclusive items inside Meta Mansion
          </Typography>
        </Box>

        {/* Mansions Grid */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {mansions.map((mansion) => (
            <Grid item xs={12} sm={6} md={4} key={mansion.id}>
              <Card sx={{ 
                height: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(255, 215, 0, 0.2)',
                },
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={mansion.image}
                  alt={mansion.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {mansion.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Rating value={mansion.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      ({mansion.sales} sales)
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: '#FFD700' }}>
                      {mansion.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price
                    </Typography>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleOpenDialog(mansion)}
                    sx={{
                      background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                      color: '#000',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
                      },
                    }}
                  >
                    Enter Mansion
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Loading Dialog */}
        <Dialog
          open={loadingDialogOpen}
          onClose={handleCloseDialog}
          PaperProps={{
            sx: {
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              borderRadius: 2,
              minWidth: '300px',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              margin: 0,
              maxWidth: '90vw',
              width: 'auto',
            }
          }}
        >
          <Box sx={{ 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 2,
            justifyContent: 'center',
            minHeight: '200px'
          }}>
            <CircularProgress 
              size={60}
              sx={{ 
                color: '#FFD700',
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                }
              }}
            />
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#FFD700',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              Loading Meta Mansions
            </Typography>
          </Box>
        </Dialog>

        {/* Mansion Details Dialog */}
        <Dialog
          open={!!selectedMansion && !loadingDialogOpen}
          onClose={() => setSelectedMansion(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              background: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              borderRadius: 2,
            }
          }}
        >
          {selectedMansion && (
            <>
              <DialogTitle sx={{ color: '#FFD700', borderBottom: '1px solid rgba(255,215,0,0.1)' }}>
                {selectedMansion.name}
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      image={selectedMansion.image}
                      alt={selectedMansion.name}
                      sx={{ 
                        width: '100%',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,215,0,0.1)'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ color: '#FFD700', mb: 2 }}>
                      {selectedMansion.price}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" sx={{ color: '#fff', mb: 1 }}>
                        Features:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedMansion.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            sx={{ 
                              backgroundColor: 'rgba(255,215,0,0.1)',
                              color: '#FFD700'
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Ensure you are connected to OpenSea to enter mansion
                    </Typography>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 3, borderTop: '1px solid rgba(255,215,0,0.1)' }}>
                <Button
                  onClick={handleCloseDialog}
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    '&:hover': {
                      color: '#FFD700'
                    }
                  }}
                >
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Buy Mansion Dialog */}
        <Dialog
          open={buyMansionOpen}
          onClose={handleBuyMansionClose}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              background: 'rgba(0,0,0,0.95)',
              border: '1px solid rgba(255,215,0,0.2)',
              backdropFilter: 'blur(10px)',
              color: '#fff'
            }
          }}
        >
          <DialogTitle>Buy a Meta Mansion</DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                label="Mansion Name"
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Location"
                fullWidth
                variant="outlined"
              />
              <TextField
                label="Price (ETH)"
                fullWidth
                variant="outlined"
                type="number"
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleBuyMansionClose}>Cancel</Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                color: '#000',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
                },
              }}
            >
              Purchase
            </Button>
          </DialogActions>
        </Dialog>

        {/* Listed Items Section */}
        <Paper 
          id="listed-items-section"
          sx={{ 
            p: 3, 
            mb: 4, 
            mt: 6,
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            border: '1px solid rgba(255, 215, 0, 0.1)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                color: '#FFD700',
                fontWeight: 'bold',
              }}
            >
              <ShoppingBagIcon sx={{ color: '#FFD700' }} /> Listed Items
            </Typography>
          </Box>

          <Tabs
            value={viewTab}
            onChange={handleTabChange}
            sx={{
              mb: 3,
              '& .MuiTab-root': {
                color: 'rgba(255,255,255,0.7)',
                '&.Mui-selected': {
                  color: '#FFD700',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#FFD700',
              },
            }}
          >
            <Tab label="All Items" />
          </Tabs>

          <Grid container spacing={2}>
            {trendingItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
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
                        <TimerIcon fontSize="small" color="action" />
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
      </Container>
    </Box>
  );
} 