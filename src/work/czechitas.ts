import { WorkName, WorkTag, WorkType } from '@/work/types'

export const czechitas: WorkType = {
  title: 'Czechitas',
  description:
    'A product aimed at easing the challenging journey into the IT domain with a guiding hand. Focused on helping individuals gain their initial experiences in conveying technical information, working with people, and motivating them to overcome obstacles',
  name: WorkName.Company,
  work: [],
  tags: [WorkTag.Python, WorkTag.DataScience, WorkTag.Learning],
  thumbnail: 'czechitas.jpg',
  link: 'https://www.seznam.cz/',
  start: new Date('May 1, 2023'),
}
