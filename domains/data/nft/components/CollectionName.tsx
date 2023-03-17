import type { BoxProps } from '@mui/material/Box'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

import type { Typography } from 'components/Typography'
import { Paragraph } from 'components/Typography'

type Props = {
  name: string
  component?: Typography
}
export type CollectionNameFC = FCC<Omit<BoxProps, 'component'> & Props>
const CollectionName: CollectionNameFC = ({ name: collectionName, component, ...others }) => {
  const Component = component || Paragraph

  if (!collectionName) {
    return (
      <Box>
        <Component ellipsis {...others}></Component>
      </Box>
    )
  }

  return (
    <Tooltip title={collectionName}>
      <Box>
        <Component ellipsis {...others}>
          {collectionName}
        </Component>
      </Box>
    </Tooltip>
  )
}

export default CollectionName
