const createTextArea = (text: string) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.width = '0'
  textarea.style.position = 'fixed'
  textarea.style.left = '-999px'
  textarea.style.top = '10px'
  textarea.setAttribute('readonly', 'readonly')
  document.body.appendChild(textarea)
  return textarea
}

export const copyToClipboard = async (text: string) => {
  const compatibleFn = () => {
    const textarea = createTextArea(text)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }

  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      compatibleFn()
    }
  } else {
    compatibleFn()
  }
}
