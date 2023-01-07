export const firstToUpperCase = (str: string) => {
  if (str.startsWith('nft')) return str.replace(/nft/, 'NFT')
  return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2
  })
}
