import { Stack } from '@mui/material'
import React from 'react'
import CurrentVacancies from '../../../components/Vacancies/CurrentVacancies'

const AvailableVacanciesMobile = () => {
  return (
    <Stack padding={2}>
      <CurrentVacancies />
    </Stack>
  )
}

export default AvailableVacanciesMobile