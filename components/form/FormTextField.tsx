import type { TextFieldProps } from '@mui/material/TextField'
import AppTextField from 'components/input-fields/AppTextField'

type FormTextFieldProps = {
  formik: any
  fieldKey: string
  label: string
  textFieldProps?: TextFieldProps
}
const FormTextField: FCC<FormTextFieldProps> = ({
  formik: { values, errors, handleBlur, handleChange, touched },
  fieldKey,
  label,
  textFieldProps,
  children,
}) => {
  return (
    <AppTextField
      fullWidth
      variant="outlined"
      name={fieldKey}
      onBlur={handleBlur}
      onChange={handleChange}
      value={values[fieldKey]}
      helperText={touched[fieldKey] && errors[fieldKey]}
      error={Boolean(touched[fieldKey] && errors[fieldKey])}
      label={label}
      {...textFieldProps}
    >
      {children}
    </AppTextField>
  )
}
export default FormTextField
