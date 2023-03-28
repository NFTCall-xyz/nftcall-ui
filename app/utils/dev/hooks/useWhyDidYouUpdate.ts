import { noop } from 'lodash'
import { useEffect, useRef } from 'react'

import { log } from '..'

export type IProps = Record<string, any>

export const useWhyDidYouUpdate = __DEV__
  ? (componentName: string, props: IProps) => {
      const prevProps = useRef<IProps>({})

      useEffect(() => {
        if (prevProps.current && !props) {
          log(componentName, 'removed')
        } else if (prevProps.current) {
          const allKeys = Object.keys({ ...prevProps.current, ...props })
          const changedProps: IProps = {}

          allKeys.forEach((key) => {
            if (!Object.is(prevProps.current[key], props[key])) {
              changedProps[key] = {
                from: prevProps.current[key],
                to: props[key],
              }
            }
          })

          if (Object.keys(changedProps).length) {
            log(componentName, changedProps)
          }
        }

        prevProps.current = props
      })
    }
  : (noop as undefined)
