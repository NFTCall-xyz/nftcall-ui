import { safeGet } from 'app/utils/get'
import { NumberInput } from 'lib/math/components/NumberInput'

type FormNumberFieldFieldProps = {
  formik: any
  fieldKey: string
}
const FormNumberFieldField: FCC<FormNumberFieldFieldProps> = ({
  formik: { values, errors, handleBlur, handleChange, touched },
  fieldKey,
  children,
}) => {
  return (
    <NumberInput
      name={fieldKey}
      onBlur={handleBlur}
      onChange={handleChange}
      value={values[fieldKey]}
      helperText={safeGet(() => touched[fieldKey] && errors[fieldKey])}
      error={!!safeGet(() => touched[fieldKey] && errors[fieldKey])}
    >
      {children}
    </NumberInput>
  )
}
export default FormNumberFieldField
