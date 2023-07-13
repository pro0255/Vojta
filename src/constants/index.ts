import { Ataccama } from '@/constants/entities/Ataccama'
import { Atlas } from '@/constants/entities/Atlas'
import { Czechitas } from '@/constants/entities/Czechitas'
import { VSB } from '@/constants/entities/VSB'
import { NextJS } from '@/constants/entities/NextJS'
import { Langchain } from '@/constants/entities/Langchain'
import { R3F } from '@/constants/entities/R3F'

export const c = {
  ataccama: new Ataccama(),
  atlas: new Atlas(),
  czechitas: new Czechitas(),
  master: new VSB(),
  nextjs: new NextJS(),
  langchain: new Langchain(),
  r3f: new R3F(),
}
