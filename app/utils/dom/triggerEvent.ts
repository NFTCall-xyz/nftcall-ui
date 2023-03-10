export const triggerEvent = (element: HTMLElement, type: string) => {
  const eventOptions = { bubbles: true }
  const event = new Event(type, eventOptions)
  element.dispatchEvent(event)
}
