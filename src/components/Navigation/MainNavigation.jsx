import { Stack, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import MobileNavigation from '../Mobile/Navigation/MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

const MainNavigation = () => {

  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'))

  console.log(xs, sm)

  return (
    <Stack>
      {
        xs || sm || md ? <MobileNavigation /> : <DesktopNavigation />
      }
    </Stack>
  )
}

export default MainNavigation