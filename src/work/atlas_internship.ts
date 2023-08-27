import { WorkName, WorkTag, WorkType } from '@/work/types'

export const atlasInternship: WorkType = {
  title: 'ATLAS GROUP - internship',
  description:
    "Position within a frontend team focused on developing a legal system. The internship's purpose is to teach individuals practical processes and prepare them for a junior position. The reason was to test the theoretical knowledge gained during their bachelor's studies",
  name: WorkName.Company,
  work: [],
  tags: [WorkTag.FE, WorkTag.MOBX, WorkTag.React],
  thumbnail: 'atlas.jpeg',
  link: 'https://www.seznam.cz/',
  start: new Date('Sep 18, 2019'),
  end: new Date('Jun 30, 2020'),
}
