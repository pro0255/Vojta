import { WorkName, WorkTag, WorkType } from '@/app/work/types'

export const masterDegree: WorkType = {
  title: 'Master degree',
  description:
    "Continuing university education in the Czech Republic, pursuing an advanced study following the bachelor's degree. Acquiring fundamental (and in some subjects, advanced) knowledge in the field of data analysis. This includes exploratory analysis, implementation of machine learning models, utilization of pre-existing models, AI, and textual analysis",
  name: WorkName.Education,
  work: [],
  tags: [WorkTag.Python, WorkTag.ML, WorkTag.AI],
  thumbnail: 'masterDegree.png',
  link: 'https://vojta-prokop.notion.site/Master-s-degree-467624eb017c4729854887444902ccc9?pvs=4',
  start: new Date('Sep 18, 2020'),
  end: new Date('May 31, 2022'),
}
