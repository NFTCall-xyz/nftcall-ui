import React from 'react'

import { Button, Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import componentSamples from './samples'

const ROOT = styled(Paper)`
  width: 100%;
  height: 100%;
  .title {
    justify-content: space-between;
  }
  .sample {
    margin-bottom: 20px;
  }
  .sampleItem {
    ${({ theme }) => ({
      marginBottom: theme.spacing(10),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    })}
  }
  .docsButton {
    ${({ theme }) => ({
      marginLeft: theme.spacing(2),
    })}
  }
`

const MuiComponentSamples = () => {
  return (
    <ROOT>
      <Typography variant="h4" gutterBottom>
        Material-UI Components
      </Typography>
      {componentSamples.map(({ id, title, component, docs }) => (
        <div key={id} id={id} className="sample">
          <Grid container className="title" alignItems="center">
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Button variant="outlined" color="secondary" size="small" href={docs} target="_blank" rel="noreferrer">
              Docs
            </Button>
          </Grid>
          <div className="sampleItem">{component}</div>
        </div>
      ))}
    </ROOT>
  )
}

export default MuiComponentSamples
