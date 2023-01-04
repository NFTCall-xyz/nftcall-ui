import type { FC } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

export type NFT = {
  name: string
  id: string
  src: string
  description?: string
  image?: string
}

export type NFTCardProps = Partial<
  NFT & {
    action: Array<{ name?: string; onClick?: any; disabled?: boolean; tip?: any }>
    onCheckChange: any
    minStrikePrice: number
    maxExpriyTime: number
  }
>

const Root = styled(Card)`
  width: 250px;
  position: relative;
  .checkbox {
    position: absolute;
    right: 0;
    top: 0;
  }
`

const NFTCard: FC<NFTCardProps> = ({ id, name, description, image, action, onCheckChange }) => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState(false)
  const title = useMemo(() => (name ? name : description), [description, name])

  const displayCheckBox = useMemo(() => !!onCheckChange, [onCheckChange])
  const actions = useMemo(() => {
    if (!action) return null
    return (
      <Stack spacing={1} direction="row">
        {action.map(({ disabled, onClick, name }) => {
          return (
            <Button key={name} variant="outlined" disabled={disabled} onClick={() => onClick(id)}>
              {name}
            </Button>
          )
        })}
      </Stack>
    )
  }, [action, id])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    setChecked(value)
    onCheckChange(id, value)
  }
  return (
    <Root>
      {displayCheckBox && <Checkbox className="checkbox" checked={checked} onChange={handleChange} />}
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'center',
          padding: 2,
        }}
      >
        {actions}
      </CardActions>
    </Root>
  )
}

export default NFTCard
