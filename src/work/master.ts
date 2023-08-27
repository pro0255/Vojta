import { WorkName, WorkTag, WorkType } from '@/work/types'

export const masterDegree: WorkType = {
  title: 'Master degree',
  description:
    "Continuing university education in the Czech Republic, pursuing an advanced study following the bachelor's degree. Acquiring fundamental (and in some subjects, advanced) knowledge in the field of data analysis. This includes exploratory analysis, implementation of machine learning models, utilization of pre-existing models, AI, and textual analysis",
  name: WorkName.company,
  work: [],
  tags: [WorkTag.FE, WorkTag.MOBX, WorkTag.React],
  thumbnail: 'masterDegree.png',
  link: 'https://www.seznam.cz/',
}
