import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, color: '#FDEB91' }}>
        Dashboard
      </Typography>
      {/* Add your dashboard content here */}
    </Box>
  );
};

export default Dashboard; 