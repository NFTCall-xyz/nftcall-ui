import languages from 'app/i18n/generated/languages'

const countryFlags: Record<string, () => Promise<any>> = {
  ['zh-CN']: async () => (await import('./1x1/cn.svg')).default,
  ['en']: async () => (await import('./1x1/gb.svg')).default,
}

export const getCountryFlag = async () => {
  const returnValue: any = {}
  const promises: any = []
  languages.map(({ code }) => promises.push(countryFlags[code]().then((value) => (returnValue[code] = value))))
  await Promise.all(promises)
  return returnValue
}
