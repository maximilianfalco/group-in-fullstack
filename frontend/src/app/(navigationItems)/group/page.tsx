import React from 'react';
import GroupCard from '@/components/GroupCard';
import { Box, Grid } from '@mui/material';

export default function page() {
  return (
    <>
      <div className='flex'>
        <Box className='w-5/6 right-px p-8'>
          <Box>
            <p
              className='text-4xl my-4'
              style={{ fontFamily: 'MetropolisSemiBold' }}
            >
              Groups
            </p>
          </Box>

          <Box>
            <Grid container direction='row' spacing={2}>
              <Grid item xs={4} className='max-w-54'>
                <GroupCard />
              </Grid>
              <Grid item xs={4} className='max-w-54'>
                <GroupCard />
              </Grid>
              <Grid item xs={4} className='max-w-54'>
                <GroupCard />
              </Grid>
              <Grid item xs={4} className='max-w-54'>
                <GroupCard />
              </Grid>
              <Grid item xs={4} className='max-w-54'>
                <GroupCard />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
