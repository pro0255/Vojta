export enum WorkName {
  Company = 'Company',
  Education = 'Education',
  Learn = 'Learn',
}

export enum WorkTag {
  FE = 'Frontend',
  React = 'React',
  MOBX = 'MobX',
  Apollo = 'Apollo',
  Python = 'Python',
  DataScience = 'Data Science',
  BE = 'Backend',
  ML = 'Machine learning',
  AI = 'Artificial intelligence',
  Learning = 'Learning',
}

type Link = {
  thumbnail: string
  name: string
  description: string
  link: string
}

type GeneralType = {
  link: string
  name: WorkName
  thumbnail: string
  title: string
  description: string
  tags: Array<WorkTag>
  work: Array<Link>
  start: Date
  end?: Date
}

type CompanyType = {
  name: WorkName.Company
} & GeneralType

type SchoolType = {
  name: WorkName.Education
} & GeneralType

type LearnType = {
  name: WorkName.Learn
} & GeneralType

export type WorkType = CompanyType | SchoolType | LearnType
