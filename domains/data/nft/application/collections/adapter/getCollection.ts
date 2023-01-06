export type BaseCollection = {
  name: string
  description: string
  bannerImageUrl: string
  imageUrl: string
}
export const getCollection = ({ banner_image_url, description, name, image_url }: any): BaseCollection => {
  return {
    name,
    description,
    bannerImageUrl: banner_image_url,
    imageUrl: image_url,
  }
}
