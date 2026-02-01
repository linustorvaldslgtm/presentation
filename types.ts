export enum SlideType {
  COVER = 'COVER',
  CONTENT_LEFT = 'CONTENT_LEFT', // Image Left, Text Right
  CONTENT_RIGHT = 'CONTENT_RIGHT', // Text Left, Image Right
  LIST_GRID = 'LIST_GRID', // Cards grid
  SPLIT_LIST = 'SPLIT_LIST', // Two columns of lists
  FULL_IMAGE = 'FULL_IMAGE' // Text overlay on full image
}

export interface SlideContent {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  body?: string;
  listItems?: { title: string; desc: string }[];
  bulletPoints?: string[];
  imageUrl: string;
  imageCaption?: string;
}
