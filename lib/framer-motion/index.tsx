import { AnimatePresence, LazyMotion } from 'framer-motion'

const loadFeatures = () => import('./features').then((res) => res.default)

export const MotionProvider: FCC = ({ children }) => {
  return (
    <LazyMotion features={loadFeatures} strict>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </LazyMotion>
  )
}

export default MotionProvider
