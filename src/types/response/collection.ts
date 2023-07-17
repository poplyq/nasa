export interface CollectionResponse {
  collection: {
    href: string
    items: SearchItem[]
  }
}

export interface CollectionType {
  url: string
  cards: Card[]
}

export interface SearchItem {
  data: SearchPhotoInfo[]
  links: { href: string }[]
}

export interface SearchPhotoInfo {
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
