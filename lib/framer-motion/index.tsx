import { AnimatePresence, LazyMotion } from 'framer-motion'

import { useIsMobile } from 'app/hooks/useIsMobile'

const loadFeatures = () => import('./features').then((res) => res.default)

export const MotionProvider: FCC = ({ children }) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <>{children}</>
  }

  return (
    <LazyMotion features={loadFeatures} strict>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </LazyMotion>
  )
}

export default MotionProvider
