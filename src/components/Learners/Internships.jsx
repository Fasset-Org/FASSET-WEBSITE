import { Stack, Typography } from '@mui/material'
import React from 'react'

const Internships = () => {
  return (
    <Stack spacing={2}>
      <Typography
        fontSize={20}
        fontWeight="bolder"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        Internships
      </Typography>
      <Typography>GodFrey To Provide Information</Typography>
    </Stack>
  )
}

export default Internships