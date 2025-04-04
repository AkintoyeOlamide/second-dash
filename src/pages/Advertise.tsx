import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Visibility,
  LocationOn,
  ShoppingCart,
} from '@mui/icons-material';

interface Mansion {
  id: number;
  name: string;
  image: string;
  visitors: string;
  location: string;
  rating: number;
  price: string;
  advertisingSpaces: string[];
  description: string;
}

// Sample data for Meta Mansions with high traffic
const popularMansions = [
  {
    id: 1,
    name: 'Meta Mansion #4721',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    visitors: '2.5M',
    location: 'Beachfront District',
    rating: 4.8,
    price: '0.5 ETH',
    advertisingSpaces: ['Billboard', 'Digital Display', 'Interactive Zone'],
    description: 'Modern luxury villa collection with premium amenities and high foot traffic',
  },
  {
    id: 2,
    name: 'Meta Mansion #8392',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    visitors: '1.8M',
    location: 'Downtown Core',
    rating: 4.6,
    price: '0.4 ETH',
    advertisingSpaces: ['Digital Display', 'Interactive Zone', 'Virtual Storefront'],
    description: 'Exclusive penthouse collection with city views and premium visitor engagement',
  },
  {
    id: 3,
    name: 'Meta Mansion #5147',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    visitors: '1.2M',
    location: 'Alpine Heights',
    rating: 4.7,
    price: '0.3 ETH',
    advertisingSpaces: ['Billboard', 'Digital Display', 'Virtual Storefront'],
    description: 'Secluded mountain estate collection with panoramic views and unique visitor experience',
  },
  {
    id: 4,
    name: 'Meta Mansion #6234',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    visitors: '1.9M',
    location: 'Riverside District',
    rating: 4.5,
    price: '0.45 ETH',
    advertisingSpaces: ['Billboard', 'Digital Display', 'Interactive Zone'],
    description: 'Waterfront luxury estate with stunning river views and high visitor engagement',
  },
  {
    id: 5,
    name: 'Meta Mansion #7351',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    visitors: '1.5M',
    location: 'Historic Quarter',
    rating: 4.9,
    price: '0.55 ETH',
    advertisingSpaces: ['Digital Display', 'Interactive Zone', 'Virtual Storefront'],
    description: 'Classic architecture with modern amenities in a historic setting with premium foot traffic',
  },
  {
    id: 6,
    name: 'Meta Mansion #8462',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    visitors: '1.3M',
    location: 'Tech Hub',
    rating: 4.4,
    price: '0.35 ETH',
    advertisingSpaces: ['Billboard', 'Digital Display', 'Virtual Storefront'],
    description: 'Innovative design in the heart of the tech district with high engagement from tech enthusiasts',
  },
  {
    id: 7,
    name: 'Meta Mansion #9573',
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    visitors: '2.1M',
    location: 'Entertainment District',
    rating: 4.7,
    price: '0.6 ETH',
    advertisingSpaces: ['Billboard', 'Digital Display', 'Interactive Zone'],
    description: 'Vibrant location in the entertainment district with high foot traffic and engagement',
  },
  {
    id: 8,
    name: 'Meta Mansion #0684',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    visitors: '1.7M',
    location: 'Shopping District',
    rating: 4.6,
    price: '0.5 ETH',
    advertisingSpaces: ['Digital Display', 'Interactive Zone', 'Virtual Storefront'],
    description: 'Prime location in the shopping district with high consumer engagement and visibility',
  },
  {
    id: 9,
    name: 'Meta Mansion #1795',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    visitors: '1.4M',
    location: 'Residential Zone',
    rating: 4.8,
    price: '0.4 ETH',
    advertisingSpaces: ['Billboard', 'Digital Display', 'Virtual Storefront'],
    description: 'Family-friendly environment in a residential area with consistent visitor engagement',
  }
];

const advertisingOptions = [
  { value: 'billboard', label: 'Billboard', price: '0.1 ETH' },
  { value: 'digital', label: 'Digital Display', price: '0.15 ETH' },
  { value: 'interactive', label: 'Interactive Zone', price: '0.2 ETH' },
  { value: 'storefront', label: 'Virtual Storefront', price: '0.25 ETH' },
];

export const Advertise = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedMansion, setSelectedMansion] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [advertisingForm, setAdvertisingForm] = useState({
    brandName: '',
    email: '',
    advertisingSpace: '',
    duration: '',
    message: '',
  });

  const handleOpenDialog = (mansion: any) => {
    setSelectedMansion(mansion);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedMansion(null);
    setAdvertisingForm({
      brandName: '',
      email: '',
      advertisingSpace: '',
      duration: '',
      message: '',
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', advertisingForm);
    handleCloseDialog();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, textAlign: 'left' }}>
        <Typography
          variant="h3"
          sx={{
            color: '#FDEB91',
            fontWeight: 'bold',
            mb: 2,
            display: 'block'
          }}
        >
          Advertise in Meta Mansions
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'text.secondary',
            maxWidth: '600px',
          }}
        >
          Reach visitors by advertising in Meta Mansions Spaces.
        </Typography>
      </Box>

      {/* Popular Mansions Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              color: '#FDEB91',
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'left'
            }}
          >
            Featured Mansions
          </Typography>
        </Grid>
        {popularMansions.map((mansion) => (
          <Grid item xs={12} md={4} key={mansion.id}>
            <Card
              sx={{
                height: '100%',
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={mansion.image}
                alt={mansion.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: '#FDEB91', mb: 1 }}>
                  {mansion.name}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip
                    icon={<Visibility />}
                    label={`${mansion.visitors} visitors`}
                    size="small"
                    sx={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                  />
                  <Chip
                    icon={<LocationOn />}
                    label={mansion.location}
                    size="small"
                    sx={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                  />
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  {mansion.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ color: '#FDEB91' }}>
                    {mansion.price}
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<ShoppingCart />}
                    onClick={() => handleOpenDialog(mansion)}
                    sx={{
                      borderColor: '#FDEB91',
                      color: '#FDEB91',
                      '&:hover': {
                        borderColor: '#FDEB91',
                        backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      },
                    }}
                  >
                    Advertise Here
                  </Button>
                </Box>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  {mansion.advertisingSpaces.map((space: string) => (
                    <Chip
                      key={space}
                      label={space}
                      size="small"
                      sx={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Most Visited Mansions List */}
      <Box sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          sx={{
            color: '#FDEB91',
            mb: 4,
            textAlign: 'left',
            fontWeight: 'bold'
          }}
        >
          Most Visited Meta Mansions
        </Typography>
        <Grid container spacing={4}>
          {[...popularMansions]
            .sort((a, b) => {
              const aVisitors = parseInt(a.visitors.replace(/[^0-9]/g, ''));
              const bVisitors = parseInt(b.visitors.replace(/[^0-9]/g, ''));
              return bVisitors - aVisitors;
            })
            .slice(0, 6)
            .map((mansion) => (
              <Grid item xs={12} md={4} key={mansion.id}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={mansion.image}
                    alt={mansion.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: '#FDEB91', mb: 1 }}>
                      {mansion.name}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip
                        icon={<Visibility />}
                        label={`${mansion.visitors} visitors`}
                        size="small"
                        sx={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                      />
                      <Chip
                        icon={<LocationOn />}
                        label={mansion.location}
                        size="small"
                        sx={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                      />
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {mansion.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" sx={{ color: '#FDEB91' }}>
                        {mansion.price}
                      </Typography>
                      <Button
                        variant="outlined"
                        startIcon={<ShoppingCart />}
                        onClick={() => handleOpenDialog(mansion)}
                        sx={{
                          borderColor: '#FDEB91',
                          color: '#FDEB91',
                          '&:hover': {
                            borderColor: '#FDEB91',
                            backgroundColor: 'rgba(255, 215, 0, 0.1)',
                          },
                        }}
                      >
                        Advertise Here
                      </Button>
                    </Box>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {mansion.advertisingSpaces.map((space: string) => (
                        <Chip
                          key={space}
                          label={space}
                          size="small"
                          sx={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>

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
                color: '#FDEB91'
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
                color: '#FDEB91'
              }
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>

      {/* Advertising Form Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'rgba(0, 0, 0, 0.95)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <DialogTitle sx={{ color: '#FDEB91' }}>
          Advertise in {selectedMansion?.name}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Brand Name"
              fullWidth
              value={advertisingForm.brandName}
              onChange={(e) => setAdvertisingForm({ ...advertisingForm, brandName: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={advertisingForm.email}
              onChange={(e) => setAdvertisingForm({ ...advertisingForm, email: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
            <FormControl fullWidth>
              <InputLabel sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Advertising Space
              </InputLabel>
              <Select
                value={advertisingForm.advertisingSpace}
                onChange={(e) => setAdvertisingForm({ ...advertisingForm, advertisingSpace: e.target.value })}
                label="Advertising Space"
                sx={{
                  color: '#fff',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FDEB91',
                  },
                }}
              >
                {advertisingOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label} - {option.price}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Duration (days)"
              type="number"
              fullWidth
              value={advertisingForm.duration}
              onChange={(e) => setAdvertisingForm({ ...advertisingForm, duration: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              value={advertisingForm.message}
              onChange={(e) => setAdvertisingForm({ ...advertisingForm, message: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#FDEB91',
              color: '#000',
              '&:hover': {
                backgroundColor: '#FFE55C',
              },
            }}
          >
            Submit Request
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Advertise; 