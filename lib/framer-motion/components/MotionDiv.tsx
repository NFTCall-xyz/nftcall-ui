import type { HTMLMotionProps } from 'framer-motion'
import { m } from 'framer-motion'

import { useIsMobile } from 'app/hooks/useIsMobile'

type MobileComponentProps = HTMLMotionProps<'div'>
const MotionDiv: FCC<MobileComponentProps> = ({ children, ...props }) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <>{children}</>
  }

  return <m.div {...props}>{children}</m.div>
}

export default MotionDiv
