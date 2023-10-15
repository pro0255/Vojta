export enum PostTag {}

export type PostType = {
  thumbnail?: string
  name: string
  description: string
  linkToNotion?: string
  tags: Array<PostTag>
  date: number
  disabled: boolean
}
