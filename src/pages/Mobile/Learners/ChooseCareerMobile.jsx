import { Stack } from '@mui/material'
import React from 'react'
import ChooseACareer from '../../../components/Learners/ChooseACareer'
import ScarceSkills from '../../../components/Learners/ScarceSkills'

const ChooseCareerMobile = () => {
  return (
    <Stack padding={2}>
      <ChooseACareer />
      <ScarceSkills />
    </Stack>
  )
}

export default ChooseCareerMobile