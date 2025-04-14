import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  TextField,
  Chip,
  IconButton,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  PersonAdd as InviteIcon,
  Share as ShareIcon,
  Message as MessageIcon,
  EmojiEvents as TrophyIcon,
  Groups as CommunityIcon,
  Notifications as NotificationIcon,
  Star as StarIcon,
  Send as SendIcon,
  ContentCopy as CopyIcon,
  Home as HomeIcon,
  AccountBalanceWallet as WalletIcon,
  SportsEsports as GameIcon,
  MoreVert as MoreIcon,
} from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';

export {};

// Sample data for friends and communities
const friendsData = [
  {
    id: 1,
    name: 'Alex Thompson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    earnings: '156.8 ETH',
    mansions: 3,
    lastActive: '2 hours ago',
    status: 'online',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/150?img=2',
    earnings: '98.5 ETH',
    mansions: 2,
    lastActive: '5 hours ago',
    status: 'online',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=3',
    earnings: '234.2 ETH',
    mansions: 4,
    lastActive: '1 day ago',
    status: 'offline',
  },
];

const communities = [
  {
    id: 1,
    name: 'Keycard Community',
    members: 89,
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    description: 'Exclusive community for keycard holders',
    totalEarnings: '8,234 ETH',
  },
  {
    id: 2,
    name: 'OG Community',
    members: 156,
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    description: 'Original members of Meta Mansion',
    totalEarnings: '12,456 ETH',
  },
  {
    id: 3,
    name: 'Elite Mansion Owners',
    members: 156,
    image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg',
    description: 'Private community for luxury mansion owners',
    totalEarnings: '12,456 ETH',
  },
  {
    id: 4,
    name: 'Meta Architects',
    members: 89,
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
    description: 'Design and build amazing virtual properties',
    totalEarnings: '8,234 ETH',
  },
  {
    id: 5,
    name: 'Property Investors',
    members: 234,
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg',
    description: 'Strategic investment discussions and opportunities',
    totalEarnings: '15,789 ETH',
  },
];

const recentActivity = [
  {
    id: 1,
    user: 'Alex Thompson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    action: 'purchased',
    item: 'Luxury Sports Car',
    price: '25.5 ETH',
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    user: 'Sarah Chen',
    avatar: 'https://i.pravatar.cc/150?img=2',
    action: 'earned',
    item: 'Community Reward',
    price: '5.2 ETH',
    time: '4 hours ago',
  },
  {
    id: 3,
    user: 'Michael Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=3',
    action: 'listed',
    item: 'Meta Mansion #8392',
    price: '145.8 ETH',
    time: '1 day ago',
    image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg',
  },
];

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
      id={`friends-tabpanel-${index}`}
      aria-labelledby={`friends-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Friends() {
  const [tabValue, setTabValue] = useState(0);
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false);
  const [createCommunityDialogOpen, setCreateCommunityDialogOpen] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState<number | null>(null);
  const [communityForm, setCommunityForm] = useState({
    name: '',
    description: '',
    isPrivate: true,
    shareLink: ''
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleInviteOpen = () => {
    setInviteDialogOpen(true);
  };

  const handleInviteClose = () => {
    setInviteDialogOpen(false);
  };

  const handleCreateCommunityOpen = () => {
    setCreateCommunityDialogOpen(true);
  };

  const handleCreateCommunityClose = () => {
    setCreateCommunityDialogOpen(false);
    setCommunityForm({
      name: '',
      description: '',
      isPrivate: true,
      shareLink: ''
    });
  };

  const handleCreateCommunitySubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Creating community:', communityForm);
    handleCreateCommunityClose();
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: theme => theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
      pt: 10,
      maxWidth: 1400, 
      mx: 'auto', 
      px: 2,
      filter: 'none',
      transition: 'filter 0.3s ease-in-out',
      pointerEvents: createCommunityDialogOpen ? 'none' : 'auto'
    }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
          <Box>
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '1.2rem', md: '2.2rem' },
                fontWeight: 800,
                color: theme => theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                mb: 2,
                background: theme => theme.palette.mode === 'dark' ? 'linear-gradient(90deg, #ffffff 0%, #cccccc 100%)' : 'linear-gradient(90deg, #000000 0%, #333333 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'left'
              }}
            >
              Community
            </Typography>
            <Typography 
              sx={{
                color: theme.palette.mode === 'dark' ? '#FFFFFF' : 'text.secondary',
                fontSize: '1.1rem',
                maxWidth: '600px',
                textAlign: 'left',
                mb: isMobile ? 3 : 0
              }}
            >
              Connect with friends and join communities
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={handleCreateCommunityOpen}
            sx={{
              background: 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)',
              color: '#000000',
              fontWeight: 600,
              px: 1,
              py: 0.5,
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              ml: 4,
              '&:hover': {
                background: 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)',
              }
            }}
          >
            Create Community
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ mb: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              color: theme => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : '#666666',
              '&.Mui-selected': {
                color: theme => theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: theme => theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            },
          }}
        >
          <Tab label="Communities" />
          <Tab label="Friends" />
          <Tab label="Activity" />
        </Tabs>

        {/* Communities Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {communities.map((community) => (
              <Grid item xs={12} md={4} key={community.id}>
                <Card sx={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 215, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    boxShadow: '0 4px 20px rgba(255, 215, 0, 0.2)',
                  },
                }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={community.image}
                    alt={community.name}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: theme => theme.palette.mode === 'dark' ? '#ffffff' : '#000000', fontWeight: 'bold', mb: 1, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                      {community.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666666', mb: 2, fontSize: { xs: '0.65rem', sm: '0.875rem' } }}>
                      {community.description}
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Chip 
                        icon={<CommunityIcon sx={{ color: '#666666' }} />}
                        label={`${community.members} members`}
                        sx={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          color: '#666666',
                        }}
                      />
                      <Typography variant="body2" sx={{ color: '#666666' }}>
                        {community.totalEarnings}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Friends Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            {friendsData.map((friend) => (
              <Grid item xs={12} md={4} key={friend.id}>
                <Paper sx={{ 
                  p: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 215, 0, 0.1)',
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ position: 'relative' }}>
                      <Avatar 
                        src={friend.avatar} 
                        sx={{ width: 60, height: 60 }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: friend.status === 'online' ? '#4CAF50' : '#757575',
                          border: '2px solid #000',
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: theme => theme.palette.mode === 'dark' ? '#ffffff' : '#000000', fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                        {friend.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666666', fontSize: { xs: '0.65rem', sm: '0.875rem' } }}>
                        Last active: {friend.lastActive}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2 }} />
                  <Stack spacing={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ color: '#666666', fontSize: { xs: '0.65rem', sm: '0.875rem' } }}>
                        Total Earnings
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#666666', fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>
                        {friend.earnings}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" sx={{ color: '#666666', fontSize: { xs: '0.65rem', sm: '0.875rem' } }}>
                        Mansions Owned
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#666666', fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>
                        {friend.mansions}
                      </Typography>
                    </Box>
                  </Stack>
                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    <Button
                      startIcon={<MessageIcon />}
                      size="small"
                      sx={{
                        flex: 1,
                        color: '#666666',
                        borderColor: 'rgba(0,0,0,0.3)',
                        '&:hover': {
                          borderColor: '#666666',
                          backgroundColor: 'rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      Message
                    </Button>
                    <Button
                      startIcon={<ShareIcon />}
                      size="small"
                      sx={{
                        flex: 1,
                        color: '#666666',
                        borderColor: 'rgba(0,0,0,0.3)',
                        '&:hover': {
                          borderColor: '#666666',
                          backgroundColor: 'rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      Share
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Activity Tab */}
        <TabPanel value={tabValue} index={2}>
          <Stack spacing={2}>
            {recentActivity.map((activity) => (
              <Paper
                key={activity.id}
                sx={{ 
                  p: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={activity.avatar} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ color: theme => theme.palette.mode === 'dark' ? '#ffffff' : '#000000', fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>
                      <span style={{ fontWeight: 'bold' }}>{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <Box component="span" sx={{ color: theme => theme.palette.mode === 'dark' ? '#ffffff' : '#000000' }}>
                        {activity.item}
                      </Box>
                      {activity.price && ` for ${activity.price}`}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666666', fontSize: { xs: '0.65rem', sm: '0.875rem' } }}>
                      {activity.time}
                    </Typography>
                  </Box>
                  {activity.image && (
                    <Box
                      component="img"
                      src={activity.image}
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 1,
                        objectFit: 'cover',
                      }}
                    />
                  )}
                </Box>
              </Paper>
            ))}
          </Stack>
        </TabPanel>
      </Box>

      {/* Create Community Dialog */}
      <Dialog 
        open={createCommunityDialogOpen} 
        onClose={handleCreateCommunityClose}
        PaperProps={{
          sx: {
            background: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : '#ffffff',
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
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
          color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`
        }}>
          Create New Community
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField
              label="Community Name"
              fullWidth
              value={communityForm.name}
              onChange={(e) => setCommunityForm({ ...communityForm, name: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0, 0, 0, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.4)' : 'rgba(0, 0, 0, 0.3)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.6)',
                  '&.Mui-focused': {
                    color: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                  },
                },
              }}
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={communityForm.description}
              onChange={(e) => setCommunityForm({ ...communityForm, description: e.target.value })}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0, 0, 0, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.4)' : 'rgba(0, 0, 0, 0.3)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.6)',
                  '&.Mui-focused': {
                    color: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
                  },
                },
              }}
            />

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.6)' }}>
                Community Type:
              </Typography>
              <Button
                variant={communityForm.isPrivate ? "contained" : "outlined"}
                onClick={() => setCommunityForm({ ...communityForm, isPrivate: true })}
                sx={{
                  color: communityForm.isPrivate ? '#000' : '#FFD700',
                  borderColor: 'rgba(255,215,0,0.2)',
                  background: communityForm.isPrivate ? 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)' : 'transparent',
                  '&:hover': {
                    borderColor: '#FFD700',
                    background: communityForm.isPrivate ? 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)' : 'rgba(255,215,0,0.1)',
                  },
                }}
              >
                Private
              </Button>
              <Button
                variant={!communityForm.isPrivate ? "contained" : "outlined"}
                onClick={() => setCommunityForm({ ...communityForm, isPrivate: false })}
                sx={{
                  color: !communityForm.isPrivate ? '#000' : '#FFD700',
                  borderColor: 'rgba(255,215,0,0.2)',
                  background: !communityForm.isPrivate ? 'linear-gradient(45deg, #FFD700 0%, #FFA500 100%)' : 'transparent',
                  '&:hover': {
                    borderColor: '#FFD700',
                    background: !communityForm.isPrivate ? 'linear-gradient(45deg, #FFC700 0%, #FF9500 100%)' : 'rgba(255,215,0,0.1)',
                  },
                }}
              >
                Public
              </Button>
            </Box>

            <TextField
              label="Share Link"
              fullWidth
              value={communityForm.shareLink}
              onChange={(e) => setCommunityForm({ ...communityForm, shareLink: e.target.value })}
              InputProps={{
                endAdornment: (
                  <IconButton 
                    size="small" 
                    sx={{ color: '#FFD700' }}
                    onClick={() => {
                      navigator.clipboard.writeText(communityForm.shareLink);
                      // You might want to add a toast notification here
                    }}
                  >
                    <CopyIcon />
                  </IconButton>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                  '& fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.2)' : 'rgba(0, 0, 0, 0.1)',
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,215,0,0.4)' : 'rgba(0, 0, 0, 0.3)',
                  },
                },
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateCommunityClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleCreateCommunitySubmit}
            sx={{
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
              color: '#000',
              '&:hover': {
                background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
              },
            }}
          >
            Create Community
          </Button>
        </DialogActions>
      </Dialog>

      {/* Invite Dialog */}
      <Dialog 
        open={inviteDialogOpen} 
        onClose={handleInviteClose}
        PaperProps={{
          sx: {
            background: 'rgba(0,0,0,0.95)',
            border: '1px solid rgba(255,215,0,0.2)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
          }
        }}
      >
        <DialogTitle>Invite Friends</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            Share your referral link to earn rewards together
          </Typography>
          <TextField
            fullWidth
            value="https://metamansion.com/invite/xyz123"
            InputProps={{
              readOnly: true,
              endAdornment: (
                <IconButton size="small" sx={{ color: '#FFD700' }}>
                  <CopyIcon />
                </IconButton>
              ),
            }}
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
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInviteClose}>Cancel</Button>
          <Button
            variant="contained"
            startIcon={<ShareIcon />}
            sx={{
              background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
              color: '#000',
              '&:hover': {
                background: 'linear-gradient(45deg, #FFA500 30%, #FFD700 90%)',
              },
            }}
          >
            Share Link
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 