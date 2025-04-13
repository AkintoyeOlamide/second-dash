import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, Button, IconButton, Slider, TextField, Select, MenuItem, FormControl, InputLabel, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Paper } from '@mui/material';
import { 
  Architecture, 
  Build as BuildIcon, 
  Engineering, 
  Home, 
  Palette,
  Save,
  Speed,
  Storage,
  Warning,
  AccountBalanceWallet as WalletIcon,
  People as PeopleIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
  Close as CloseIcon,
  Construction
} from '@mui/icons-material';

export default function Build() {
  const [selectedComponent, setSelectedComponent] = useState('foundation');
  const [mansionSize, setMansionSize] = useState(50);
  const [style, setStyle] = useState('modern');
  const [materials, setMaterials] = useState('luxury');
  const [walletConnected, setWalletConnected] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  useEffect(() => {
    // Show wallet modal when component mounts
    setShowWalletModal(true);
  }, []);

  const components = [
    { id: 'art', name: 'Art', icon: <Palette /> },
    { id: 'furniture', name: 'Furniture', icon: <Home /> },
    { id: 'gaming', name: 'Gaming Items', icon: <BuildIcon /> },
    { id: 'fashion', name: 'Fashion Items', icon: <Engineering /> }
  ];

  const styles = [
    { value: 'modern', label: 'Modern Minimalist' },
    { value: 'classic', label: 'Classic Elegance' },
    { value: 'futuristic', label: 'Futuristic' },
    { value: 'mediterranean', label: 'Mediterranean' },
    { value: 'contemporary', label: 'Contemporary' }
  ];

  const materialOptions = [
    { value: 'luxury', label: 'Luxury Materials' },
    { value: 'sustainable', label: 'Sustainable' },
    { value: 'smart', label: 'Smart Materials' },
    { value: 'traditional', label: 'Traditional' }
  ];

  const handleConnectWallet = () => {
    setWalletConnected(true);
    setShowWalletModal(false);
    // Add your wallet connection logic here
  };

  const handleCloseModal = () => {
    // Don't allow closing without connecting wallet
    if (!walletConnected) {
      return;
    }
    setShowWalletModal(false);
  };

  // Add mansion data
  const builtMansions = [
    {
      id: 1,
      name: 'Golden Heights Estate',
      location: 'Beachfront District',
      visitors: 1245,
      rating: 4.8,
      image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg'
    },
    {
      id: 2,
      name: 'Crystal Palace',
      location: 'Downtown Core',
      visitors: 892,
      rating: 4.9,
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg'
    },
    {
      id: 3,
      name: 'Mountain View Villa',
      location: 'Alpine Heights',
      visitors: 567,
      rating: 4.7,
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      pt: 8,
      background: theme => theme.palette.mode === 'dark' ? '#000' : '#fff'
    }}>
      {/* Wallet Connection Modal */}
      <Dialog 
        open={showWalletModal} 
        onClose={handleCloseModal}
        PaperProps={{
          sx: {
            background: theme => theme.palette.mode === 'dark' ? '#000' : '#fff',
            border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
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
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          pb: 2
        }}>
          <Typography variant="h6" sx={{ 
            color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
            fontWeight: 600 
          }}>
            Connect Your Wallet
          </Typography>
          {walletConnected && (
            <IconButton 
              onClick={handleCloseModal}
              sx={{ 
                position: 'absolute',
                right: 8,
                top: 8,
                color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                '&:hover': { 
                  color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000'
                }
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
        <DialogContent sx={{ py: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <WalletIcon sx={{ 
              fontSize: 48, 
              color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
              mb: 2 
            }} />
            <Typography variant="h6" sx={{ 
              color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
              mb: 1 
            }}>
              Wallet Connection Required
            </Typography>
            <Typography sx={{ 
              color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'
            }}>
              Please connect your wallet to access the Build feature and customize your Meta Mansion.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ 
          p: 3, 
          pt: 0,
          justifyContent: 'center'
        }}>
          <Button
            variant="contained"
            startIcon={<WalletIcon />}
            onClick={handleConnectWallet}
            sx={{
              background: theme => theme.palette.mode === 'dark' 
                ? 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)'
                : 'linear-gradient(45deg, #000000 30%, #333333 90%)',
              color: '#fff !important',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': {
                background: theme => theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)'
                  : 'linear-gradient(45deg, #333333 30%, #000000 90%)',
              },
            }}
          >
            Connect Wallet
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h1" 
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: '#fff',
              mb: 2,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'left',
            }}
          >
            Build my Meta Mansion
          </Typography>
          <Typography 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              mb: 4,
              textAlign: 'left',
            }}
          >
            Construct your interior with our tools
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Sidebar - Component Selection */}
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
                borderRadius: '24px',
                p: 3,
                border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                height: '100%'
              }}
            >
              <Typography
                sx={{
                  color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: '1.1rem'
                }}
              >
                Components
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {components.map((component) => (
                  <Button
                    key={component.id}
                    variant={selectedComponent === component.id ? 'contained' : 'outlined'}
                    onClick={() => setSelectedComponent(component.id)}
                    sx={{
                      justifyContent: 'flex-start',
                      color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                      borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)',
                      '&:hover': {
                        background: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)'
                      }
                    }}
                  >
                    {component.name}
                  </Button>
                ))}
              </Box>
            </Card>
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
                borderRadius: '24px',
                p: 4,
                border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                height: '100%'
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1.2rem'
                  }}
                >
                  {components.find(c => c.id === selectedComponent)?.name} Configuration
                </Typography>
                
                {/* Size Slider */}
                <Box sx={{ mb: 3 }}>
                  <Typography sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)', 
                    mb: 1 
                  }}>
                    Interior Space
                  </Typography>
                  <Slider
                    value={mansionSize}
                    onChange={(_, value) => setMansionSize(value as number)}
                    min={20}
                    max={100}
                    step={5}
                    sx={{
                      color: '#FFD700',
                      '& .MuiSlider-thumb': {
                        backgroundColor: '#FFD700',
                        '&:hover, &.Mui-focusVisible': {
                          boxShadow: '0 0 0 8px rgba(255,215,0,0.16)',
                        },
                      },
                    }}
                  />
                  <Typography sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                    mt: 1 
                  }}>
                    {mansionSize}% of maximum size
                  </Typography>
                </Box>

                {/* Materials Selection */}
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' 
                  }}>
                    Materials
                  </InputLabel>
                  <Select
                    value={materials}
                    onChange={(e) => setMaterials(e.target.value)}
                    label="Materials"
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: theme => theme.palette.mode === 'dark' ? '#000' : '#fff',
                          color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                          border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
                          '& .MuiMenuItem-root': {
                            color: theme => `${theme.palette.mode === 'dark' ? '#fff' : '#000'} !important`,
                            '&:hover': {
                              bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)',
                            },
                            '&.Mui-selected': {
                              bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)',
                              '&:hover': {
                                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.3)' : 'rgba(0,0,0,0.15)',
                              },
                            },
                          },
                        },
                      },
                    }}
                    sx={{
                      color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.4)' : 'rgba(0,0,0,0.2)',
                      },
                      '& .MuiSelect-icon': {
                        color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                      },
                    }}
                  >
                    {materialOptions.map((material) => (
                      <MenuItem 
                        key={material.value} 
                        value={material.value}
                        sx={{
                          color: theme => `${theme.palette.mode === 'dark' ? '#fff' : '#000'} !important`,
                          '&:hover': {
                            backgroundColor: theme => `${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0,0,0,0.05)'} !important`,
                          },
                          '&.Mui-selected': {
                            backgroundColor: theme => `${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'} !important`,
                            '&:hover': {
                              backgroundColor: theme => `${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.3)' : 'rgba(0,0,0,0.15)'} !important`,
                            },
                          },
                        }}
                      >
                        {material.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* AI Builder Section */}
                <Box sx={{ 
                  mt: 4, 
                  pt: 4, 
                  borderTop: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}` 
                }}>
                  <Typography
                    sx={{
                      color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                      fontWeight: 600,
                      mb: 2,
                      fontSize: '1.2rem'
                    }}
                  >
                    AI Builder
                  </Typography>
                  <Typography
                    sx={{
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      mb: 3,
                      fontSize: '0.9rem'
                    }}
                  >
                    Describe your dream Meta Mansion and let our AI create it for you based on our available designs
                  </Typography>

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Describe your dream Meta Mansion... (e.g., 'A modern beachfront mansion with floor-to-ceiling windows, infinity pool, and smart home technology')"
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                        '& fieldset': {
                          borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.4)' : 'rgba(0,0,0,0.2)',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                      },
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      startIcon={<BuildIcon />}
                      disabled={!walletConnected}
                      sx={{
                        background: theme => walletConnected 
                          ? theme.palette.mode === 'dark'
                            ? 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)'
                            : 'linear-gradient(45deg, #000000 0%, #333333 100%)'
                          : theme.palette.mode === 'dark'
                            ? 'rgba(255,215,0,0.1)'
                            : 'rgba(0,0,0,0.1)',
                        color: '#fff !important',
                        px: 4,
                        py: 1.5,
                        '&:hover': {
                          background: theme => walletConnected 
                            ? theme.palette.mode === 'dark'
                              ? 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)'
                              : 'linear-gradient(45deg, #333333 0%, #666666 100%)'
                            : theme.palette.mode === 'dark'
                              ? 'rgba(255,215,0,0.1)'
                              : 'rgba(0,0,0,0.1)',
                        }
                      }}
                    >
                      Build with AI
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>

          {/* Right Sidebar - Preview & Stats */}
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
                borderRadius: '24px',
                p: 3,
                border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                height: '100%'
              }}
            >
              <Typography
                sx={{
                  color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: '1.1rem'
                }}
              >
                Preview
              </Typography>

              {/* Preview Box */}
              <Box
                sx={{
                  height: 200,
                  background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  borderRadius: '16px',
                  mb: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: theme => `1px dashed ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                  p: 3,
                  textAlign: 'center'
                }}
              >
                <Typography 
                  sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  Preview Area
                </Typography>
                <Typography 
                  sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}
                >
                  Your mansion preview will appear here
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Built Mansions Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            sx={{
              color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 600,
              mb: 4,
              fontSize: '1.5rem',
              textAlign: 'center'
            }}
          >
            Recently Built Mansions
          </Typography>

          <Grid container spacing={3}>
            {builtMansions.map((mansion) => (
              <Grid item xs={12} md={4} key={mansion.id}>
                <Card
                  sx={{
                    background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0,0,0,0.1)'}`,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.4)' : 'rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={mansion.image}
                      alt={mansion.name}
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 2
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <StarIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                        <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                          {mansion.rating}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ p: 2 }}>
                    <Typography
                      sx={{
                        color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        mb: 1
                      }}
                    >
                      {mansion.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <LocationIcon sx={{ 
                        color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000', 
                        fontSize: 16 
                      }} />
                      <Typography sx={{ 
                        color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)', 
                        fontSize: '0.9rem' 
                      }}>
                        {mansion.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PeopleIcon sx={{ 
                        color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000', 
                        fontSize: 16 
                      }} />
                      <Typography sx={{ 
                        color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)', 
                        fontSize: '0.9rem' 
                      }}>
                        {mansion.visitors.toLocaleString()} visitors
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 