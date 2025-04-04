import React from 'react';
import { Box, Typography, LinearProgress, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Sample data for Meta Mansions
const metaMansions = [
  {
    id: 7605,
    image: '/mansion1.jpg',
    price: 0.0331,
    lastSale: 0.02,
  },
  {
    id: 4041,
    image: '/mansion2.jpg',
    price: 0.0331,
    lastSale: 0.02,
  },
  {
    id: 8346,
    image: '/mansion3.jpg',
    price: 0.0332,
    lastSale: 0.02,
  },
];

const Test: React.FC = () => {
  return (
    <Box sx={{ 
      p: 3, 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      alignItems: 'center',
      background: '#1a1a1a',
    }}>
      {/* Stats Bars Container */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        width: '100%',
        maxWidth: '1200px',
        justifyContent: 'space-between'
      }}>
        {/* Trophies Stats */}
        <Box sx={{
          p: 2,
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 215, 0, 0.1)',
          flex: 1
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#FFD700',
                letterSpacing: '0.5px',
                fontWeight: 500
              }}
            >
              Trophies
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <EmojiEventsIcon sx={{ color: '#FFD700', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#FFD700', mt: 0.5, fontSize: '0.75rem' }}>1</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <WorkspacePremiumIcon sx={{ color: '#FFD700', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#FFD700', mt: 0.5, fontSize: '0.75rem' }}>1</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <MilitaryTechIcon sx={{ color: '#FFD700', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#FFD700', mt: 0.5, fontSize: '0.75rem' }}>1</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <EmojiEventsOutlinedIcon sx={{ color: '#FFD700', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#FFD700', mt: 0.5, fontSize: '0.75rem' }}>0</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#FFD700',
                  fontWeight: 600
                }}
              >
                3/20
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#FFD700',
                  fontWeight: 600
                }}
              >
                15%
              </Typography>
            </Box>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={15} 
            sx={{ 
              height: 4, 
              borderRadius: 2,
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              '& .MuiLinearProgress-bar': {
                background: 'linear-gradient(90deg, #FFD700 0%, #DAA520 100%)',
                borderRadius: 2,
              }
            }} 
          />
        </Box>

        {/* Friends Who Play Stats */}
        <Box sx={{
          p: 2,
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 215, 0, 0.1)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <GroupIcon sx={{ color: '#FFD700', fontSize: 20 }} />
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#FFD700',
                letterSpacing: '0.5px',
                fontWeight: 500,
                mb: 1
              }}
            >
              Friends Who Play
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#FFD700',
                opacity: 0.7
              }}
            >
              no friends play this game
            </Typography>
          </Box>
        </Box>

        {/* Next Tournament Stats */}
        <Box sx={{
          p: 2,
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 215, 0, 0.1)',
          flex: 1
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#FFD700',
                letterSpacing: '0.5px',
                fontWeight: 500
              }}
            >
              Next Tournament
            </Typography>
          </Box>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#FFD700',
              opacity: 0.7
            }}
          >
            2h 15m
          </Typography>
        </Box>
      </Box>

      {/* Grid of FIFA Cards */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 2,
        width: '100%',
        maxWidth: '1000px',
        mt: 2
      }}>
        {[...Array(6)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '250px',
              height: '300px',
              background: 'linear-gradient(135deg, #FFDA55 0%, #FFC857 100%)',
              clipPath: 'polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '15px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              overflow: 'hidden'
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.3,
                zIndex: 1
              }}
            >
              <source src="/loop-video" type="video/mp4" />
            </video>
          </Box>
        ))}
      </Box>

      {/* Grid of Meta Mansion Cards */}
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 3,
        width: '100%',
        maxWidth: '1200px',
        mt: 4
      }}>
        {metaMansions.map((mansion) => (
          <Box
            key={mansion.id}
            sx={{
              background: '#242424',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: '100%',
                height: '300px',
                position: 'relative',
                background: '#2a2a2a',
              }}
            >
              <Box
                component="img"
                src={mansion.image}
                alt={`Meta Mansion #${mansion.id}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Content Container */}
            <Box sx={{ p: 2 }}>
              {/* Title and ID */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                  Meta Mansion #{mansion.id}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  #{mansion.id.toString().padStart(4, '0')}
                </Typography>
              </Box>

              {/* Price Information */}
              <Typography variant="h5" sx={{ color: '#fff', mb: 1 }}>
                {mansion.price} ETH
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                Last sale: {mansion.lastSale} WETH
              </Typography>

              {/* Buy Button */}
              <Button
                variant="contained"
                fullWidth
                startIcon={<ShoppingCartIcon />}
                sx={{
                  background: '#0066ff',
                  color: '#fff',
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    background: '#0052cc',
                  }
                }}
              >
                Buy now
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Test; 