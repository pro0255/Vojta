export enum PostTag {
  Prvni = 'Prvni',
}

export type PostType = {
  thumbnail?: string
  name: string
  description: string
  linkToNotion: string
  tags: Array<PostTag>
  date: number
}
