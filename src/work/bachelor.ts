import { WorkName, WorkTag, WorkType } from '@/work/types'

export const bachelorDegree: WorkType = {
  title: 'Bachelor degree',
  description: 'this is description',
  name: WorkName.school,
  work: [],
  tags: [WorkTag.FE, WorkTag.MOBX, WorkTag.React],
  thumbnail: 'bachelorDegree.png',
  link: 'https://www.seznam.cz/',
}
