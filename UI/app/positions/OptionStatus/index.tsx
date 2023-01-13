import { Span } from 'components/Typography'
import { useMemo } from 'react'
import { useTheme } from '@mui/material'
import { useTranslation } from 'next-i18next'

type OptionStatusProps = {
  status: string
}

const OptionStatus:FC<OptionStatusProps> = ({
  status,
}) => {
  const theme = useTheme()
  const { t } = useTranslation('app-positions', { keyPrefix: 'status' }) 
  const color = useMemo(() => {
    switch (status) {
      case 'Exercised': 
        return theme.palette.success.main
      case 'Exercisable': 
        return theme.palette.info.main
      case 'Expired': 
        return theme.palette.error.main
      case 'NotExercisable': 
        return theme.palette.warning.main
    }
  }, [theme.palette, status])
  return (
    <Span color={color}>{t(status)}</Span>
  )
}

export default OptionStatus
