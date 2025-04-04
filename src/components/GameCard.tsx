import React from 'react';
import { Box, Paper, Typography, Button, IconButton } from '@mui/material';
import { PlayArrow, Star, EmojiEvents, Timer } from '@mui/icons-material';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  rating: number;
  players: number;
  timeLimit: string;
  prize: string;
}

export const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  image,
  rating,
  players,
  timeLimit,
  prize
}) => {
  return (
    <Paper
      sx={{
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 215, 0, 0.2)',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(255, 215, 0, 0.4)',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)',
        },
      }}
    >
      {/* Game Image */}
      <Box sx={{ position: 'relative', width: '100%', paddingTop: '100%' }}>
        <img
          src={image}
          alt={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
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
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))',
          }}
        />
        {/* Play Button Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <IconButton
            sx={{
              width: 80,
              height: 80,
              backgroundColor: 'rgba(255, 215, 0, 0.9)',
              '&:hover': {
                backgroundColor: '#FFD700',
                transform: 'scale(1.1)',
              },
            }}
          >
            <PlayArrow sx={{ fontSize: 40, color: '#000000' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Game Info */}
      <Box sx={{ p: 3 }}>
        <Typography
          variant="h5"
          sx={{
            color: '#FFFFFF',
            fontWeight: 600,
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 2,
          }}
        >
          {description}
        </Typography>

        {/* Game Stats */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Star sx={{ color: '#FFD700', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {rating}/5
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <EmojiEvents sx={{ color: '#FFD700', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {players} Players
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Timer sx={{ color: '#FFD700', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {timeLimit}
            </Typography>
          </Box>
        </Box>

        {/* Prize and Play Button */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#FFD700',
              fontWeight: 500,
            }}
          >
            Prize: {prize}
          </Typography>
          <Button
            variant="contained"
            startIcon={<PlayArrow />}
            sx={{
              backgroundColor: '#FFD700',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#FFE55C',
              },
            }}
          >
            Play Now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}; 