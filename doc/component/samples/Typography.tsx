import * as React from 'react'

import Box from '@mui/material/Box'

import { H1, H2, H3, H4, H5, H6, Paragraph, Small, Span, Tiny } from 'components/Typography'

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <H1>h1. Heading</H1>
      <H2>h2. Heading</H2>
      <H3>h3. Heading</H3>
      <H4>h4. Heading</H4>
      <H5>h5. Heading</H5>
      <H6>h6. Heading</H6>
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Paragraph>
      <Small>Small. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Small>
      <Span>
        Span. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Span>
      <Tiny>
        Tiny. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Tiny>
    </Box>
  )
}
