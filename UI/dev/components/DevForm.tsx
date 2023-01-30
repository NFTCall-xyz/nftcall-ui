import type { FC } from 'react'

import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import SubmitBotton from 'components/form/SubmitBotton'

type DevFormProps = {
  formik: any
  form: any
}

export const DevForm: FC<DevFormProps> = ({ form, formik }) => {
  if (!form.fields) return null
  return (
    <form onSubmit={form.onSubmit}>
      <Grid container spacing={2} paddingTop={2}>
        {Object.keys(form.fields).map((key) => (
          <Grid item xs={12} key={key}>
            <TextField
              label={key}
              variant="outlined"
              name={key}
              fullWidth
              value={formik.values[key]}
              onChange={formik.handleChange}
              error={formik.touched[key] && Boolean(formik.errors[key])}
              helperText={formik.touched[key] && formik.errors[key]}
            />
          </Grid>
        ))}
        <Grid item container xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <SubmitBotton size="large" variant="contained" isSubmitting={formik.isSubmitting}>
            Submit
          </SubmitBotton>
        </Grid>
      </Grid>
    </form>
  )
}
