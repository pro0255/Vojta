import { WorkName, WorkTag, WorkType } from '@/work/types'

export const masterDegree: WorkType = {
  title: 'Master degree',
  description: 'this is description',
  name: WorkName.company,
  work: [],
  tags: [WorkTag.FE, WorkTag.MOBX, WorkTag.React],
  thumbnail: 'masterDegree.png',
  link: 'https://www.seznam.cz/',
}
