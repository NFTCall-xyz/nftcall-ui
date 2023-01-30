import type { FCC } from 'app/types'

import FlexBetween from 'components/flexbox/FlexBetween'
import type { SearchInputProps } from 'components/input-fields/SearchInput'
import SearchInput from 'components/input-fields/SearchInput'

import { useSearchHeader } from './Provider'

const SearchHeader: FCC<SearchInputProps> = ({ children, ...props }) => {
  const { value, onChange } = useSearchHeader()
  return (
    <FlexBetween flexDirection={{ xs: 'column', sm: 'row' }}>
      {children}
      <SearchInput
        {...{
          value,
          onChange,
          ...(props as any),
        }}
      />
    </FlexBetween>
  )
}

export default SearchHeader
