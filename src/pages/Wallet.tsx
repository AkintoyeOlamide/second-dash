import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Button, 
  Tabs, 
  Tab, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Chip,
  IconButton,
  LinearProgress,
  Tooltip
} from '@mui/material';
import {
  AccountBalanceWallet as WalletIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Build as BuildIcon,
  ShoppingCart as ShopIcon,
  History as HistoryIcon,
  MoreVert as MoreVertIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Timer as TimerIcon,
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Star as StarIcon,
  LocationOn as LocationIcon,
  People as PeopleIcon
} from '@mui/icons-material';

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
      id={`wallet-tabpanel-${index}`}
      aria-labelledby={`wallet-tab-${index}`}
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

export default function Wallet() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Sample data for holdings
  const holdings = [
    {
      id: 1,
      name: 'Golden Heights Estate',
      type: 'Mansion',
      value: '0.00 ETH',
      change: '+0.00 ETH',
      changePercent: '+0.00%',
      status: 'Completed',
      location: 'Beachfront District',
      visitors: 0,
      rating: 0.00,
      image: '/WhatsApp Image 2025-03-14 at 13.58.13.jpeg'
    },
    {
      id: 2,
      name: 'Crystal Palace',
      type: 'Mansion',
      value: '0.00 ETH',
      change: '+0.00 ETH',
      changePercent: '+0.00%',
      status: 'In Construction',
      progress: 0,
      location: 'Downtown Core',
      visitors: 0,
      rating: 0.00,
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (3).jpeg'
    },
    {
      id: 3,
      name: 'Mountain View Villa',
      type: 'Mansion',
      value: '0.00 ETH',
      change: '+0.00 ETH',
      changePercent: '+0.00%',
      status: 'Completed',
      location: 'Alpine Heights',
      visitors: 0,
      rating: 0.00,
      image: '/WhatsApp Image 2025-03-14 at 13.58.12 (2).jpeg'
    }
  ];

  // Sample data for transactions
  const transactions = [
    {
      id: 1,
      type: 'Purchase',
      asset: 'Golden Heights Estate',
      amount: '0.00 ETH',
      date: '2024-03-15',
      status: 'Completed',
      txHash: '0x0000...0000'
    },
    {
      id: 2,
      type: 'Sale',
      asset: 'Ocean View Villa',
      amount: '0.00 ETH',
      date: '2024-03-14',
      status: 'Completed',
      txHash: '0x0000...0000'
    },
    {
      id: 3,
      type: 'Construction',
      asset: 'Crystal Palace',
      amount: '0.00 ETH',
      date: '2024-03-13',
      status: 'Pending',
      txHash: '0x0000...0000'
    }
  ];

  // Sample data for building projects
  const buildingProjects = [
    {
      id: 1,
      name: 'Crystal Palace',
      progress: 0,
      estimatedCompletion: '2024-03-20',
      cost: '0.00 ETH',
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Skyline Tower',
      progress: 0,
      estimatedCompletion: '2024-04-01',
      cost: '0.00 ETH',
      status: 'In Progress'
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
        {/* Header */}
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
              startIcon={<WalletIcon />}
              sx={{
                color: '#FFD700',
                borderColor: 'rgba(255,215,0,0.2)',
                '&:hover': {
                  borderColor: '#FFD700',
                  background: 'rgba(255,215,0,0.1)'
                }
              }}
            >
              Connect Wallet
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
            }}
          >
            Your Wallet
          </Typography>
          <Typography 
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.1rem',
              maxWidth: '600px'
            }}
          >
            Manage your assets, track transactions, and monitor building projects
          </Typography>
        </Box>

        {/* Total Balance Card */}
        <Card
          sx={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '24px',
            p: 4,
            border: '1px solid rgba(255,215,0,0.2)',
            backdropFilter: 'blur(10px)',
            mb: 4
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                  Total Portfolio Value
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#fff',
                    fontSize: '2.5rem',
                    fontWeight: 700
                  }}
                >
                  0.00 KEYS
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                  <TrendingUpIcon sx={{ color: '#4CAF50' }} />
                  <Typography sx={{ color: '#4CAF50' }}>
                    +0.00 KEYS (+0.00%)
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  startIcon={<ArrowUpwardIcon />}
                  sx={{
                    background: 'rgba(255,215,0,0.1)',
                    color: '#FFD700',
                    '&:hover': {
                      background: 'rgba(255,215,0,0.2)'
                    }
                  }}
                >
                  Buy More
                </Button>
                <Button
                  startIcon={<ArrowDownwardIcon />}
                  sx={{
                    background: 'rgba(255,215,0,0.1)',
                    color: '#FFD700',
                    '&:hover': {
                      background: 'rgba(255,215,0,0.2)'
                    }
                  }}
                >
                  Claim
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* Tabs */}
        <Card
          sx={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '24px',
            border: '1px solid rgba(255,215,0,0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'rgba(255,215,0,0.2)' }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#FFD700',
                },
                '& .MuiTab-root': {
                  color: 'rgba(255,255,255,0.7)',
                  '&.Mui-selected': {
                    color: '#FFD700',
                  },
                },
              }}
            >
              <Tab label="Holdings" />
              <Tab label="Transactions" />
              <Tab label="Rewards" />
            </Tabs>
          </Box>

          {/* Holdings Tab */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3} sx={{ justifyContent: 'flex-start' }}>
              {holdings.map((holding) => (
                <Grid item xs={12} md={4} key={holding.id}>
                  <Card
                    sx={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255,215,0,0.2)',
                      backdropFilter: 'blur(10px)',
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: 'rgba(255,215,0,0.4)'
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
                      <img
                        src={holding.image}
                        alt={holding.name}
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
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)',
                          display: 'flex',
                          alignItems: 'flex-end',
                          p: 2
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <StarIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                          <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                            {holding.rating}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography
                          sx={{
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '1.1rem'
                          }}
                        >
                          {holding.name}
                        </Typography>
                        <Chip
                          label={holding.status}
                          size="small"
                          sx={{
                            backgroundColor: holding.status === 'Completed' 
                              ? 'rgba(76, 175, 80, 0.2)'
                              : 'rgba(255, 193, 7, 0.2)',
                            color: holding.status === 'Completed' 
                              ? '#4CAF50'
                              : '#FFC107',
                            fontWeight: 500
                          }}
                        />
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <LocationIcon sx={{ color: '#FFD700', fontSize: 16 }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                          {holding.location}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <PeopleIcon sx={{ color: '#FFD700', fontSize: 16 }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                          {holding.visitors.toLocaleString()} visitors
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <Box>
                          <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                            {holding.value}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {holding.change.startsWith('+') ? (
                              <TrendingUpIcon sx={{ color: '#4CAF50', fontSize: 16 }} />
                            ) : (
                              <TrendingDownIcon sx={{ color: '#f44336', fontSize: 16 }} />
                            )}
                            <Typography 
                              sx={{ 
                                color: holding.change.startsWith('+') ? '#4CAF50' : '#f44336',
                                fontSize: '0.9rem'
                              }}
                            >
                              {holding.change} ({holding.changePercent})
                            </Typography>
                          </Box>
                        </Box>
                        <IconButton size="small">
                          <MoreVertIcon sx={{ color: 'rgba(255,255,255,0.7)' }} />
                        </IconButton>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Transactions Tab */}
          <TabPanel value={tabValue} index={1}>
            <TableContainer 
              component={Paper}
              sx={{
                background: 'transparent',
                '& .MuiTableCell-root': {
                  borderColor: 'rgba(255,215,0,0.2)',
                  color: '#fff',
                },
                '& .MuiTableHead-root .MuiTableCell-root': {
                  color: 'rgba(255,255,255,0.7)',
                }
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Asset</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Transaction</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <Chip
                          label={transaction.type}
                          size="small"
                          sx={{
                            backgroundColor: transaction.type === 'Purchase' 
                              ? 'rgba(76, 175, 80, 0.2)'
                              : transaction.type === 'Sale'
                              ? 'rgba(244, 67, 54, 0.2)'
                              : 'rgba(255, 193, 7, 0.2)',
                            color: transaction.type === 'Purchase'
                              ? '#4CAF50'
                              : transaction.type === 'Sale'
                              ? '#f44336'
                              : '#FFC107',
                            fontWeight: 500
                          }}
                        />
                      </TableCell>
                      <TableCell>{transaction.asset}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>
                        <Chip
                          label={transaction.status}
                          size="small"
                          sx={{
                            backgroundColor: transaction.status === 'Completed'
                              ? 'rgba(76, 175, 80, 0.2)'
                              : 'rgba(255, 193, 7, 0.2)',
                            color: transaction.status === 'Completed'
                              ? '#4CAF50'
                              : '#FFC107',
                            fontWeight: 500
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: '#FFD700', fontSize: '0.9rem' }}>
                          {transaction.txHash}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Building Projects Tab */}
          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={3}>
              {buildingProjects.map((project) => (
                <Grid item xs={12} md={6} key={project.id}>
                  <Card
                    sx={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '16px',
                      p: 3,
                      border: '1px solid rgba(255,215,0,0.2)',
                      backdropFilter: 'blur(10px)',
                      height: '100%'
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography
                        sx={{
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '1.2rem'
                        }}
                      >
                        {project.name}
                      </Typography>
                      <Chip
                        label={project.status}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 193, 7, 0.2)',
                          color: '#FFC107',
                          fontWeight: 500
                        }}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                          Progress
                        </Typography>
                        <Typography sx={{ color: '#FFD700', fontSize: '0.9rem' }}>
                          {project.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'rgba(255,215,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: '#FFD700',
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TimerIcon sx={{ color: '#FFD700', fontSize: 16 }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                          Est. Completion
                        </Typography>
                      </Box>
                      <Typography sx={{ color: '#FFD700', fontSize: '0.9rem' }}>
                        {project.estimatedCompletion}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <WalletIcon sx={{ color: '#FFD700', fontSize: 16 }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                          Total Cost
                        </Typography>
                      </Box>
                      <Typography sx={{ color: '#FFD700', fontSize: '1.1rem', fontWeight: 600 }}>
                        {project.cost}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Card>
      </Container>
    </Box>
  );
} 