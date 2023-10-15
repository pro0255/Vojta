import { WorkName, WorkTag, WorkType } from '@/app/work/types'

export const atlas: WorkType = {
  title: 'ATLAS GROUP',
  description:
    'Development of a legal system, a client for data boxes, and system design. Transition from an internship position to a junior frontend role. Brief backend development test for the data box client and implementation of an OCR application for extracting text from legal documents',
  name: WorkName.Company,
  work: [],
  tags: [WorkTag.FE, WorkTag.Apollo, WorkTag.React, WorkTag.BE, WorkTag.Python],
  thumbnail: 'atlas.jpeg',
  link: 'https://www.seznam.cz/',
  start: new Date('Jul 1, 2020'),
  end: new Date('Nov 30, 2021'),
}
