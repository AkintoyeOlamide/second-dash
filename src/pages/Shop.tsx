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
  const [selectedMansion, setSelectedMansion] = useState<string | null>(null);

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
              variant="contained"
              onClick={handleBuyMansionOpen}
              startIcon={<AddIcon />}
              sx={{
                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                color: '#000',
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
                },
              }}
            >
              Buy a Meta Mansion
            </Button>
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
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleItemClick}
              sx={{
                color: '#FFD700',
                borderColor: 'rgba(255,215,0,0.2)',
                '&:hover': {
                  borderColor: '#FFD700',
                  background: 'rgba(255,215,0,0.1)'
                }
              }}
            >
              List New Item
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
              background: 'linear-gradient(90deg, #FFFFFF 0%, #FDEB91 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'left'
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

        {/* Your Mansions Section */}
        <Paper sx={{ p: 2, mb: 4, background: 'rgba(255, 255, 255, 0.05)' }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <HomeIcon /> Your Mansions
          </Typography>
          <Grid container spacing={2}>
            {ownedMansions.map((mansion) => (
              <Grid item xs={12} sm={6} md={4} key={mansion.id}>
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
                        ({mansion.purchasedItems} items)
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Last visited: {mansion.lastVisited}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" sx={{ color: '#FFD700' }}>
                        {mansion.totalValue}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total Value
                      </Typography>
                    </Box>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => setSelectedMansion(mansion.name)}
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
        </Paper>

        {/* Recent Purchases Section */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 4, 
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            border: '1px solid rgba(255, 215, 0, 0.1)',
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 3, 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              color: '#FFD700',
              fontWeight: 'bold',
            }}
          >
            <ShoppingBagIcon sx={{ color: '#FFD700' }} /> Recent Purchases
          </Typography>
          <Grid container spacing={3}>
            {recentPurchases.map((purchase) => (
              <Grid item xs={12} sm={6} md={4} key={purchase.id}>
                <Card 
                  sx={{ 
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 215, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 20px rgba(255, 215, 0, 0.2)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={purchase.image}
                      alt={purchase.name}
                      sx={{ 
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255, 215, 0, 0.1)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                        p: 2,
                        pt: 4,
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
                        {purchase.price}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 2 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        mb: 1,
                        background: 'linear-gradient(90deg, #FFFFFF 0%, #FFD700 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {purchase.name}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <HomeIcon sx={{ fontSize: 16 }} />
                        {purchase.mansion}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <TimerIcon sx={{ fontSize: 16 }} />
                        {purchase.date}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Categories */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 4, 
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            border: '1px solid rgba(255, 215, 0, 0.1)',
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 3, 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              color: '#FFD700',
              fontWeight: 'bold',
            }}
          >
            <CategoryIcon sx={{ color: '#FFD700' }} /> Categories
          </Typography>
          <Grid container spacing={2}>
            {categories.map((category) => (
              <Grid item xs={6} sm={4} md={2} key={category.name}>
                <Card
                  onClick={() => {
                    handleItemDialogClose();
                    navigate('/list-item', { state: { category: category.name } });
                  }}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 215, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      background: 'rgba(255, 215, 0, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 3 }}>
                    <Typography variant="h2" sx={{ mb: 1 }}>{category.icon}</Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#FFD700',
                        fontWeight: 'bold',
                      }}
                    >
                      {category.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Trending Items */}
        <Paper 
          sx={{ 
            p: 3, 
            mb: 4, 
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            border: '1px solid rgba(255, 215, 0, 0.1)',
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 3, 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              color: '#FFD700',
              fontWeight: 'bold',
            }}
          >
            <TrendingIcon sx={{ color: '#FFD700' }} /> Trending Items
          </Typography>
          <Grid container spacing={2}>
            {trendingItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card 
                  onClick={handleItemClick}
                  sx={{ 
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer',
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

        {/* Enter Meta Mansion Section */}
        <Paper sx={{ p: 2, mb: 4, background: 'rgba(255, 255, 255, 0.05)' }}>
          <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <HomeIcon /> Enter Meta Mansion
          </Typography>
          <Grid container spacing={2}>
            {ownedMansions.map((mansion) => (
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
                        ({mansion.purchasedItems} items)
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Last visited: {mansion.lastVisited}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" sx={{ color: '#FFD700' }}>
                        {mansion.totalValue}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total Value
                      </Typography>
                    </Box>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => setSelectedMansion(mansion.name)}
                      sx={{
                        background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                        color: '#000',
                        fontWeight: 'bold',
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
        </Paper>

        {/* Item Dialog */}
        <Dialog
          open={itemDialogOpen}
          onClose={handleItemDialogClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              background: 'rgba(0,0,0,0.95)',
              border: '1px solid rgba(255,215,0,0.2)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              position: 'relative',
              margin: '32px',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }
          }}
          BackdropProps={{
            sx: {
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)'
            }
          }}
        >
          <DialogTitle sx={{ 
            color: '#FFD700', 
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            pb: 2
          }}>
            List Your Item
          </DialogTitle>
          <DialogContent sx={{ width: '100%', maxWidth: '800px' }}>
            <Stack spacing={3} sx={{ mt: 2 }}>
              <Typography variant="h6" sx={{ color: '#FFD700', mb: 2 }}>Item Details</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Item Name"
                    fullWidth
                    value={newItem.name}
                    onChange={handleItemChange('name')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(255,215,0,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,215,0,0.4)',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255,255,255,0.7)',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                      Upload Image
                    </Typography>
                    <Button
                      variant="outlined"
                      component="label"
                      fullWidth
                      sx={{
                        borderColor: 'rgba(255,215,0,0.2)',
                        color: '#FFD700',
                        '&:hover': {
                          borderColor: '#FFD700',
                          background: 'rgba(255,215,0,0.1)'
                        }
                      }}
                    >
                      Choose File
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </Button>
                    {newItem.image && (
                      <Typography variant="body2" sx={{ color: '#FFD700', mt: 1 }}>
                        Selected: {newItem.image.name}
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    value={newItem.description}
                    onChange={handleItemChange('description')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(255,215,0,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,215,0,0.4)',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255,255,255,0.7)',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Price (ETH)"
                    fullWidth
                    type="number"
                    value={newItem.price}
                    onChange={handleItemChange('price')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(255,215,0,0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255,215,0,0.4)',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255,255,255,0.7)',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: '#FFD700', mb: 2 }}>Select Category</Typography>
                  <Grid container spacing={1}>
                    {categories.map((category) => (
                      <Grid item xs={6} sm={4} md={2} key={category.name}>
                        <Card
                          onClick={() => setNewItem(prev => ({ ...prev, category: category.name }))}
                          sx={{
                            background: newItem.category === category.name 
                              ? 'rgba(255, 215, 0, 0.1)' 
                              : 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${newItem.category === category.name 
                              ? 'rgba(255, 215, 0, 0.3)' 
                              : 'rgba(255, 215, 0, 0.1)'}`,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              border: '1px solid rgba(255, 215, 0, 0.3)',
                              background: 'rgba(255, 215, 0, 0.1)',
                            },
                          }}
                        >
                          <CardContent sx={{ textAlign: 'center', py: 1.5 }}>
                            <Typography variant="h4" sx={{ mb: 0.5 }}>{category.icon}</Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: '#FFD700',
                                fontWeight: 'bold',
                              }}
                            >
                              {category.name}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 0 }}>
            <Button 
              onClick={handleItemDialogClose}
              sx={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSaveItem}
              disabled={!newItem.name || !newItem.image || !newItem.description || !newItem.price || !newItem.category}
              sx={{
                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                color: '#000',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
                },
                '&.Mui-disabled': {
                  background: 'rgba(255,215,0,0.1)',
                  color: 'rgba(255,255,255,0.5)',
                },
              }}
            >
              List Item
            </Button>
          </DialogActions>
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
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleItemClick}
              sx={{
                color: '#FFD700',
                borderColor: 'rgba(255,215,0,0.2)',
                '&:hover': {
                  borderColor: '#FFD700',
                  background: 'rgba(255,215,0,0.1)'
                }
              }}
            >
              List New Item
            </Button>
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
            <Tab label="Your Listings" />
          </Tabs>

          <Grid container spacing={2}>
            {viewTab === 0 ? (
              // All Items View
              trendingItems.map((item) => (
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
              ))
            ) : (
              // Your Listings View
              recentPurchases.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      transition: 'transform 0.2s',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        background: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': {
                          background: 'rgba(255, 0, 0, 0.5)',
                        },
                      }}
                      onClick={() => {
                        // Handle delete item
                        console.log('Delete item:', item.id);
                      }}
                    >
                      <DeleteIcon sx={{ color: '#FFD700' }} />
                    </IconButton>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Listed in: {item.mansion}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ color: '#FFD700' }}>
                          {item.price}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TimerIcon fontSize="small" color="action" />
                          <Typography variant="body2" color="text.secondary">
                            Listed on {item.date}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
} 