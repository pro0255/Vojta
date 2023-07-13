export enum WorkName {
  company = 'company',
  school = 'school',
  learn = 'learn',
}

export enum WorkTag {
  FE = 'Frontend',
  React = 'React',
  MOBX = 'MobX',
}

type Link = {
  thumbnail: string
  name: string
  description: string
  link: string
}

type GeneralType = {
  name: WorkName
  thumbnail: string
  title: string
  description: string
  tags: Array<WorkTag>
  work: Array<Link>
  start?: Date
  end?: Date
}

type CompanyType = {
  name: WorkName.company
} & GeneralType

type SchoolType = {
  name: WorkName.school
} & GeneralType

type LearnType = {
  name: WorkName.learn
} & GeneralType

export type WorkType = CompanyType | SchoolType | LearnType
