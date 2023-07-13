import { EmojiItem } from '@/components/DesignSystem/Blocks/EmojiList'
import { NormalText } from '@/components/DesignSystem'
import { Python } from '@/constants/entities/Python'
import { Factory } from '@/helpers/factories/Factory'
import { InteractiveItem } from '@/components/DesignSystem/Blocks/InteractiveItem'
import { TypeScript } from '@/constants/entities/TypeScript'
import { VSB } from '@/constants/entities/VSB'

const highMedicalSchool: EmojiItem = {
  text: <NormalText>High school with medical focus</NormalText>,
  emoji: '🚑',
}

const programming: EmojiItem = {
  text: (
    <NormalText>
      I like programming in{' '}
      <InteractiveItem {...Factory.interactiveItemsProps(new Python())} /> and
      <InteractiveItem
        {...Factory.interactiveItemsProps(new TypeScript())}
      />{' '}
    </NormalText>
  ),
  emoji: '👨‍💻',
}

const vsb = new VSB()
const university: EmojiItem = {
  text: (
    <NormalText>
      Data Analysis on
      <InteractiveItem
        {...Factory.interactiveItemsProps(vsb)}
        text={vsb.wholeName}
      />{' '}
    </NormalText>
  ),
  emoji: '🎓',
}

const ai: EmojiItem = {
  text: <NormalText>ML/AI enthusiast</NormalText>,
  emoji: '🤖',
}

const dream: EmojiItem = {
  text: (
    <NormalText>
      I would like to try to help with machine learning to save some lives.
    </NormalText>
  ),
  emoji: '🤔',
}

export const summary: Array<EmojiItem> = [
  highMedicalSchool,
  programming,
  ai,
  university,
  dream,
]
