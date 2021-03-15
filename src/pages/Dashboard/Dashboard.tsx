import { Box, Card, Divider, Typography } from '@material-ui/core';
import React from 'react';

const Dashboard = () => {
  return (
    <Box p={2}>
      <Typography variant="h5">Dashboard page</Typography>
      <Box py={2}>
        <Divider />
      </Box>
      <Card>
        <Box p={2}>
          <Typography variant="h6">Metrics card</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Dashboard;
