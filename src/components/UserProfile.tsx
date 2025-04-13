import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  Paper,
  Tab,
  Tabs,
  Divider,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
} from '@mui/material';
import {
  Edit as EditIcon,
  LocationOn,
  DateRange,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Language as WebsiteIcon,
  ShoppingCart,
  AccountBalance,
  EmojiEvents,
  Gavel,
  LocalOffer,
  MilitaryTech,
  FilterList,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  Add as AddIcon,
  People as PeopleIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// Add these interfaces after the imports
interface Comment {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

interface Property {
  id: number;
  name: string;
  image: string;
  price: string;
  location: string;
  size: string;
  status: string;
  lastUpdated: string;
  likes: number;
  isLiked: boolean;
  comments: Comment[];
}

interface User {
  name: string;
  role: string;
  avatar?: string;
}

export const UserProfile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user } = useAuth();
  const [tabValue, setTabValue] = useState(0);

  // Mock data - replace with real data from your backend
  const profileData = {
    coverImage: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    bio: 'Passionate about Meta Mansions and virtual real estate. Building the future of digital living spaces.',
    location: 'Metaverse, Block #2456',
    joinedDate: 'Joined March 2024',
    following: 234,
    followers: 567,
    properties: 12,
    socialLinks: {
      twitter: '@metamansion_user',
      instagram: '@metamansion_user',
      website: 'metamansion.io'
    }
  };

  // Update the propertiesData array with proper typing
  const propertiesData: Property[] = [
    {
      id: 1,
      name: 'Meta Mansion #3156',
      image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
      price: '2,500 ETH',
      location: 'Beachfront District',
      size: '4,500 sq ft',
      status: 'Active',
      lastUpdated: '2 days ago',
      likes: 124,
      isLiked: false,
      comments: [
        {
          id: 1,
          user: '@cryptotrader',
          text: 'Beautiful property! The beachfront view is amazing.',
          timestamp: '1 day ago'
        },
        {
          id: 2,
          user: '@metaverse_builder',
          text: 'Great investment opportunity!',
          timestamp: '2 days ago'
        }
      ]
    },
    {
      id: 2,
      name: 'Meta Mansion #7842',
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
      price: '3,500 ETH',
      location: 'Downtown Core',
      size: '3,800 sq ft',
      status: 'For Sale',
      lastUpdated: '1 week ago',
      likes: 89,
      isLiked: true,
      comments: [
        {
          id: 1,
          user: '@property_investor',
          text: 'Interested in this property. DM for details.',
          timestamp: '3 days ago'
        }
      ]
    },
    {
      id: 3,
      name: 'Meta Mansion #4923',
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
      price: '4,200 ETH',
      location: 'Mountain Range',
      size: '5,200 sq ft',
      status: 'Rented',
      lastUpdated: '3 days ago',
      likes: 67,
      isLiked: false,
      comments: []
    },
    {
      id: 4,
      name: 'Meta Mansion #6571',
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (1).jpeg',
      price: '3,800 ETH',
      location: 'Suburban',
      size: '4,800 sq ft',
      status: 'Active',
      lastUpdated: '1 day ago',
      likes: 92,
      isLiked: false,
      comments: []
    },
    {
      id: 5,
      name: 'Meta Mansion #8923',
      image: '/WhatsApp Image 2025-03-14 at 13.58.11.jpeg',
      price: '2,900 ETH',
      location: 'Beachfront District',
      size: '3,900 sq ft',
      status: 'For Sale',
      lastUpdated: '5 days ago',
      likes: 45,
      isLiked: false,
      comments: []
    },
    {
      id: 6,
      name: 'Meta Mansion #1245',
      image: '/WhatsApp Image 2025-03-14 at 13.58.10.jpeg',
      price: '4,500 ETH',
      location: 'Downtown Core',
      size: '5,500 sq ft',
      status: 'Active',
      lastUpdated: '2 weeks ago',
      likes: 78,
      isLiked: false,
      comments: []
    }
  ];

  // Update the state definition
  const [properties, setProperties] = useState<Property[]>(propertiesData);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLike = (propertyId: number) => {
    setProperties(properties.map(property => {
      if (property.id === propertyId) {
        return {
          ...property,
          likes: property.isLiked ? property.likes - 1 : property.likes + 1,
          isLiked: !property.isLiked
        };
      }
      return property;
    }));
  };

  // Update the activitiesData array with more social media-like content
  const activitiesData = [
    {
      id: 1,
      type: 'purchase',
      title: 'Purchased Meta Mansion #4721',
      description: 'Just bought this stunning beachfront property! The views are incredible 🌊',
      image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
      amount: '0.0239 ETH',
      timestamp: '2 hours ago',
      status: 'completed',
      icon: <ShoppingCart sx={{ color: '#FFD700' }} />,
      likes: 45,
      isLiked: false,
      comments: [
        {
          id: 1,
          user: '@cryptotrader',
          text: 'Congratulations! That\'s a great investment! 🎉',
          timestamp: '1 hour ago'
        },
        {
          id: 2,
          user: '@metaverse_builder',
          text: 'The beachfront view is amazing!',
          timestamp: '30 mins ago'
        }
      ]
    },
    {
      id: 2,
      type: 'sale',
      title: 'Sold Meta Mansion #8392',
      description: 'Farewell to this beautiful penthouse! New adventures await 🏙️',
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
      amount: '0.0198 ETH',
      timestamp: '5 hours ago',
      status: 'completed',
      icon: <AccountBalance sx={{ color: '#FFD700' }} />,
      likes: 32,
      isLiked: true,
      comments: [
        {
          id: 1,
          user: '@property_investor',
          text: 'Great deal! Wish I had seen it earlier.',
          timestamp: '4 hours ago'
        }
      ]
    },
    {
      id: 3,
      type: 'reward',
      title: 'Earned Daily Rewards',
      description: 'Another day, another reward! Keep building! 💎',
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
      amount: '0.015 ETH',
      timestamp: '1 day ago',
      status: 'completed',
      icon: <EmojiEvents sx={{ color: '#FFD700' }} />,
      likes: 28,
      isLiked: false,
      comments: []
    },
    {
      id: 4,
      type: 'bid',
      title: 'Placed Bid on Meta Mansion #5147',
      description: 'Fingers crossed for this mountain estate! 🏔️',
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (1).jpeg',
      amount: '0.0285 ETH',
      timestamp: '2 days ago',
      status: 'pending',
      icon: <Gavel sx={{ color: '#FFD700' }} />,
      likes: 15,
      isLiked: false,
      comments: [
        {
          id: 1,
          user: '@mountain_lover',
          text: 'Good luck! The views are spectacular!',
          timestamp: '1 day ago'
        }
      ]
    }
  ];

  // Add this state for managing likes
  const [activities, setActivities] = useState(activitiesData);

  // Add this function for handling likes
  const handleActivityLike = (activityId: number) => {
    setActivities(activities.map(activity => {
      if (activity.id === activityId) {
        return {
          ...activity,
          likes: activity.isLiked ? activity.likes - 1 : activity.likes + 1,
          isLiked: !activity.isLiked
        };
      }
      return activity;
    }));
  };

  return (
    <Box sx={{ backgroundColor: theme => theme.palette.mode === 'dark' ? '#000000' : '#ffffff', minHeight: '100vh' }}>
      {/* Cover Image */}
      <Box
        sx={{
          height: isMobile ? '200px' : '300px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <img
          src={profileData.coverImage}
          alt="Cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: theme => theme.palette.mode === 'dark' 
              ? 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4))'
              : 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.4))',
          }}
        />
      </Box>

      {/* Profile Info Section */}
      <Box sx={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: isMobile ? 2 : 3,
        mt: -8,
        position: 'relative',
        zIndex: 1
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ 
              p: 3, 
              backgroundColor: 'transparent',
              backdropFilter: 'none',
              border: 'none',
            }}>
              {/* Profile Header */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 2,
                p: 3,
                backgroundColor: 'transparent',
                backdropFilter: 'none',
                borderRadius: '12px',
                textAlign: 'center',
                position: 'relative'
              }}>
                <Box
                  component="img"
                  src="/WhatsApp Image 2025-03-14 at 13.58.13.jpeg"
                  alt="Profile"
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: theme => `4px solid ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)'}`
                  }}
                />
                <Box>
                  <Typography variant="h5" sx={{ 
                    mb: 1, 
                    color: theme => theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                    textShadow: theme => theme.palette.mode === 'dark' ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
                  }}>
                    {user?.name || 'Guest User'}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                    textShadow: theme => theme.palette.mode === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none',
                    mb: 1 
                  }}>
                    {user?.isVisitor ? 'Visitor' : 'Meta Mansion Owner'}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      gap: 0.5,
                      backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      borderRadius: '20px',
                      padding: '4px 12px',
                      width: 'fit-content',
                      margin: '0 auto'
                    }}
                  >
                    <PeopleIcon sx={{ 
                      fontSize: '1.2rem', 
                      color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000'
                    }} />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                        textShadow: theme => theme.palette.mode === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}
                    >
                      0 friends
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  sx={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                    borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                    '&:hover': {
                      borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                      backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                    },
                  }}
                >
                  Edit Profile
                </Button>
              </Box>

              {/* Bio */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 2
              }}>
                <Typography variant="body1" sx={{ 
                  color: theme => theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                  maxWidth: '600px',
                  textShadow: theme => theme.palette.mode === 'dark' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none'
                }}>
                  {profileData.bio}
                </Typography>

                {/* Social Links */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 2,
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <Button
                    startIcon={<TwitterIcon />}
                    size="small"
                    sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      '&:hover': {
                        color: theme => theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                        backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    {profileData.socialLinks.twitter}
                  </Button>
                  <Button
                    startIcon={<InstagramIcon />}
                    size="small"
                    sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      '&:hover': {
                        color: theme => theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                        backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    {profileData.socialLinks.instagram}
                  </Button>
                  <Button
                    startIcon={<WebsiteIcon />}
                    size="small"
                    sx={{ 
                      color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                      '&:hover': {
                        color: theme => theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                        backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    {profileData.socialLinks.website}
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Tabs Section */}
          <Grid item xs={12}>
            <Paper sx={{ 
              backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
            }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{
                  borderBottom: 1,
                  borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                  '& .MuiTab-root': {
                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                    '&.Mui-selected': {
                      color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                    },
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                  },
                }}
              >
                <Tab label="Meta Mansions" />
                <Tab label="Activities" />
                <Tab label="Items" />
                <Tab label="Events" />
              </Tabs>

              <TabPanel value={tabValue} index={0}>
                <Grid container spacing={3}>
                  {properties.map((property) => (
                    <Grid item xs={12} sm={6} md={4} key={property.id}>
                      <Paper
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                          border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)'}`,
                          borderRadius: '12px',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                            boxShadow: theme => theme.palette.mode === 'dark' ? '0 0 20px rgba(255, 215, 0, 0.2)' : '0 0 20px rgba(0, 0, 0, 0.2)',
                          },
                        }}
                      >
                        {/* Property Image */}
                        <Box
                          sx={{
                            height: '200px',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src={property.image}
                            alt={property.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: theme => theme.palette.mode === 'dark' 
                                ? 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))'
                                : 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.6))',
                            }}
                          />
                          {/* Status Badge */}
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 12,
                              right: 12,
                              backgroundColor: property.status === 'Active' 
                                ? theme => theme.palette.mode === 'dark' ? 'rgba(76, 175, 80, 0.9)' : 'rgba(76, 175, 80, 0.7)'
                                : property.status === 'For Sale'
                                ? theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.9)' : 'rgba(255, 215, 0, 0.7)'
                                : theme => theme.palette.mode === 'dark' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(33, 150, 243, 0.7)',
                              color: '#FFFFFF',
                              padding: '4px 12px',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              zIndex: 1,
                            }}
                          >
                            {property.status}
                          </Box>
                        </Box>

                        {/* Property Details */}
                        <Box sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: theme => theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
                              mb: 1,
                              fontSize: isMobile ? '1rem' : '1.25rem',
                            }}
                          >
                            {property.name}
                          </Typography>

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                              }}
                            >
                              <LocationOn fontSize="small" />
                              {property.location}
                            </Typography>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                              }}
                            >
                              {property.size}
                            </Typography>
                          </Box>

                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                              mb: 1,
                              fontSize: isMobile ? '1.1rem' : '1.25rem',
                            }}
                          >
                            {property.price}
                          </Typography>

                          {/* Action Buttons */}
                          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                            <Button
                              variant="contained"
                              size="small"
                              fullWidth
                              sx={{
                                backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)'}`,
                                color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                                '&:hover': {
                                  backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                                  borderColor: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                                },
                              }}
                            >
                              View Details
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{
                                borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                                color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                                minWidth: '40px',
                                '&:hover': {
                                  borderColor: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                                  backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                },
                              }}
                            >
                              <EditIcon />
                            </Button>
                          </Box>

                          {/* Social Interactions */}
                          <Box sx={{ 
                            display: 'flex', 
                            gap: 2, 
                            alignItems: 'center',
                            borderTop: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
                            pt: 1,
                            mb: 1
                          }}>
                            <Button
                              size="small"
                              startIcon={property.isLiked ? <Favorite /> : <FavoriteBorder />}
                              onClick={() => handleLike(property.id)}
                              sx={{
                                color: property.isLiked 
                                  ? theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000'
                                  : theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                                '&:hover': {
                                  backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                },
                              }}
                            >
                              {property.likes}
                            </Button>
                            <Button
                              size="small"
                              startIcon={<ChatBubbleOutline />}
                              sx={{
                                color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                                '&:hover': {
                                  backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                },
                              }}
                            >
                              {property.comments.length}
                            </Button>
                            <Button
                              size="small"
                              startIcon={<Share />}
                              sx={{
                                color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                                '&:hover': {
                                  backgroundColor: theme => theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                },
                              }}
                            />
                          </Box>

                          {/* Comments Preview */}
                          {property.comments.length > 0 && (
                            <Box sx={{ mb: 1 }}>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                                  fontSize: '0.875rem',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  overflow: 'hidden',
                                }}
                              >
                                <Typography
                                  component="span"
                                  sx={{
                                    color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                                    fontWeight: 600,
                                    mr: 0.5,
                                  }}
                                >
                                  {property.comments[0].user}
                                </Typography>
                                {property.comments[0].text}
                              </Typography>
                              {property.comments.length > 1 && (
                                <Typography
                                  variant="caption"
                                  sx={{
                                    color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                                    mt: 0.5,
                                    display: 'block',
                                  }}
                                >
                                  +{property.comments.length - 1} more comments
                                </Typography>
                              )}
                            </Box>
                          )}

                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                              display: 'block',
                            }}
                          >
                            Last updated: {property.lastUpdated}
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                    Recent Activities
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  {activities.map((activity) => (
                    <Grid item xs={12} sm={6} md={4} key={activity.id}>
                      <Card sx={{ 
                        background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.95)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover': {
                          borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.3)' : 'rgba(0, 0, 0, 0.3)',
                          transform: 'translateY(-4px)',
                          transition: 'all 0.3s ease'
                        }
                      }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={activity.image}
                          alt={activity.title}
                          sx={{
                            objectFit: 'cover',
                            borderBottom: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                          }}
                        />
                        <Box sx={{ 
                          p: 2, 
                          display: 'flex', 
                          flexDirection: 'column',
                          flex: 1,
                          gap: 1
                        }}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1
                          }}>
                            {activity.icon}
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                                fontWeight: 600,
                                fontSize: '1.1rem'
                              }}
                            >
                              {activity.title}
                            </Typography>
                          </Box>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.7)',
                              flex: 1
                            }}
                          >
                            {activity.description}
                          </Typography>
                          <Box sx={{ 
                            mt: 'auto',
                            pt: 2,
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            borderTop: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                          }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                                fontWeight: 600
                              }}
                            >
                              {activity.amount}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              sx={{ 
                                color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0, 0, 0, 0.5)'
                              }}
                            >
                              {activity.timestamp}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                    Items for Sale
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    sx={{
                      color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                      borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        borderColor: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                        background: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    List New Item
                  </Button>
                </Box>

                <Grid container spacing={3}>
                  {[1, 2, 3].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                      <Card sx={{ 
                        background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.95)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
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
                          image={`/WhatsApp Image 2025-03-14 at 13.58.${12 + item}.jpeg`}
                          alt="Mansion Item"
                          sx={{
                            objectFit: 'cover',
                            borderBottom: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                          }}
                        />
                        <Box sx={{ 
                          p: 2, 
                          display: 'flex', 
                          flexDirection: 'column',
                          flex: 1,
                          gap: 1
                        }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                              fontWeight: 600,
                              fontSize: '1.1rem'
                            }}
                          >
                            Luxury Item {item}
                          </Typography>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1,
                            color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.7)'
                          }}>
                            <LocationOn sx={{ fontSize: '1rem' }} />
                            <Typography variant="body2">
                              Beachfront Villa
                            </Typography>
                          </Box>
                          <Box sx={{ 
                            mt: 'auto',
                            pt: 2,
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            borderTop: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                          }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                                fontWeight: 600
                              }}
                            >
                              0.5 ETH
                            </Typography>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                background: theme => theme.palette.mode === 'dark' 
                                  ? 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)'
                                  : 'linear-gradient(45deg, #000 0%, #333 100%)',
                                color: '#fff !important',
                                fontWeight: 600,
                                '&:hover': {
                                  background: theme => theme.palette.mode === 'dark' 
                                    ? 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)'
                                    : 'linear-gradient(45deg, #333 0%, #666 100%)',
                                }
                              }}
                            >
                              Edit
                            </Button>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel value={tabValue} index={3}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                    Upcoming Events
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    sx={{
                      color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                      borderColor: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        borderColor: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                        background: theme => theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    Create Event
                  </Button>
                </Box>

                <Grid container spacing={3}>
                  {[1, 2, 3].map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event}>
                      <Card sx={{ 
                        background: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.95)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
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
                          image={`/WhatsApp Image 2025-03-14 at 13.58.${12 + event}.jpeg`}
                          alt="Event"
                          sx={{
                            objectFit: 'cover',
                            borderBottom: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                          }}
                        />
                        <Box sx={{ 
                          p: 2, 
                          display: 'flex', 
                          flexDirection: 'column',
                          flex: 1,
                          gap: 1
                        }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: theme => theme.palette.mode === 'dark' ? '#fff' : '#000',
                              fontWeight: 600,
                              fontSize: '1.1rem'
                            }}
                          >
                            Meta Mansion Event {event}
                          </Typography>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1,
                            color: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.7)'
                          }}>
                            <DateRange sx={{ fontSize: '1rem' }} />
                            <Typography variant="body2">
                              March 25, 2024
                            </Typography>
                          </Box>
                          <Box sx={{ 
                            mt: 'auto',
                            pt: 2,
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            borderTop: theme => `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                          }}>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: theme => theme.palette.mode === 'dark' ? '#FFD700' : '#000',
                                fontWeight: 600
                              }}
                            >
                              Free Entry
                            </Typography>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                background: theme => theme.palette.mode === 'dark' 
                                  ? 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)'
                                  : 'linear-gradient(45deg, #000 0%, #333 100%)',
                                color: '#fff !important',
                                fontWeight: 600,
                                '&:hover': {
                                  background: theme => theme.palette.mode === 'dark' 
                                    ? 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)'
                                    : 'linear-gradient(45deg, #333 0%, #666 100%)',
                                }
                              }}
                            >
                              RSVP
                            </Button>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel value={tabValue} index={4}>
                {/* Agent AI content */}
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}; 