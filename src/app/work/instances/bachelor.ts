import { WorkName, WorkType } from '@/app/work/types'

export const bachelorDegree: WorkType = {
  title: 'Bachelor degree',
  description:
    'University education in the Czech Republic, where upon completion, an individual is rewarded with a certificate of expertise in a specific field. In my case, after high school with a focus on general (medically oriented) knowledge, I decided to change my field and learn the basics of IT',
  name: WorkName.Education,
  work: [],
  tags: [],
  thumbnail: 'bachelorDegree.png',
  link: 'https://vojta-prokop.notion.site/Bachelor-s-degree-b1d3a392adfb48728cba91df4665063e',
  start: new Date('Sep 18, 2017'),
  end: new Date('May 31, 2020'),
}
