import { triggerEvent } from './triggerEvent'

export const inputSetValue = (input: HTMLInputElement, value: string) => {
  if (!input) return
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set
  if (nativeInputValueSetter) {
    nativeInputValueSetter.call(input, value)
    triggerEvent(input, 'input')
  }
}
