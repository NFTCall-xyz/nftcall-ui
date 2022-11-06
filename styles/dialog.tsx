import Box from '@mui/material/Box'

export const ROOT: FCC = (props) => {
  return (
    <Box
      sx={[
        {
          position: 'relative',
        },
        (theme) => ({
          width: {
            xs: theme.spacing(32),
            sm: theme.spacing(60),
            md: theme.spacing(60),
            lg: theme.spacing(60),
            xl: theme.spacing(60),
          },
        }),
      ]}
    >
      {props.children}
    </Box>
  )
}
