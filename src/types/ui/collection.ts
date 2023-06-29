export interface collectionType {
  href: string;
  items: searchItem[];
}

export interface searchItem {
  data: searchPhotoInfo[]
  links: {href:string}[]
}

export interface searchPhotoInfo {
  date_created: string;
  description: string;
  location: string;
  nasa_id: string;
  photographer: string;
  title: string;
}
