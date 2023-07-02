export interface CollectionResponse {
  collection: {
    href: string
    items: searchItem[]
  }
}

export interface CollectionType {
  url: string
  cards: Card[]
}

export interface searchItem {
  data: searchPhotoInfo[]
  links: { href: string }[]
}

export interface searchPhotoInfo {
  date_created: string
  description: string
  location: string
  nasa_id: string
  photographer: string
  title: string
}

export interface Card {
  id: string
  date: string
  title: string
  location: string
  description: string
  photographer: string
  image: string
}
