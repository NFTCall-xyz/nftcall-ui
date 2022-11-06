import type { ForwardRefRenderFunction } from 'react'
import { useRef, forwardRef } from 'react'
import Paper from '@mui/material/Paper'
import type { InputBaseProps } from '@mui/material/InputBase'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from '@mui/material/CircularProgress'

import { inputSetValue } from 'app/utils/dom/input'
import { safeGet } from 'app/utils/get'

export type SearchInputProps = InputBaseProps & {
  loading?: boolean
}
const SearchInput: ForwardRefRenderFunction<HTMLFormElement, SearchInputProps> = ({ loading, ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>()
  return (
    <Paper
      component="form"
      ref={ref}
      elevation={1}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: { xs: 1, sm: 240 },
        borderRadius: '8px',
      }}
    >
      <IconButton
        sx={{ p: '8px' }}
        aria-label="search"
        onClick={() => {
          const input = safeGet(() => inputRef.current)
          if (input) input.focus()
        }}
      >
        {loading ? <CircularProgress size={24} /> : <SearchIcon sx={{ width: 20, height: 20 }} />}
      </IconButton>
      <InputBase
        inputRef={inputRef}
        sx={{ flex: 1, fontSize: '0.8rem' }}
        {...props}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            e.preventDefault()
          }
        }}
      />
      {props.value && (
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={() => {
            const input = safeGet(() => inputRef.current)
            if (input) inputSetValue(input, '')
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Paper>
  )
}

export default forwardRef(SearchInput)
