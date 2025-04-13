import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ShopVisitors: React.FC = () => {
  const theme = useTheme();
  const isMobile = false; // Replace with actual mobile check

  return (
    <Box sx={{ 
      px: isMobile ? 1 : 2, 
      py: 0,
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      mt: 6
    }}>
      {/* Rest of the component content */}
    </Box>
  );
};

export default ShopVisitors; 