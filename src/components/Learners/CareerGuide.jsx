import { Stack } from '@mui/material'
import React from 'react'
import ChooseACareer from './ChooseACareer'
import ScarceSkills from './ScarceSkills'

const CareerGuide = () => {
  return (
    <Stack spacing={2}>
      <ChooseACareer />
      <ScarceSkills />
    </Stack>
  )
}

export default CareerGuide