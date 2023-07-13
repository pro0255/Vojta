import { EmojiItem } from '@/components/DesignSystem/Blocks/EmojiList'
import { NormalText } from '@/components/DesignSystem'

// <li>
// <NormalText>💼 Looking for a job.</NormalText>
// </li>
// <li>
// <NormalText>🌱 Open to learn something new.</NormalText>
// </li>
// </ul>

const highMedicalSchool: EmojiItem = {
  text: <NormalText>High school with medical focus</NormalText>,
  emoji: '🚑',
}

const programming: EmojiItem = {
  text: (
    <NormalText>
      I like programming in{' '}
      {/*<InteractiveItem {...Factory.interactiveItemsProps(c.python)} /> and*/}
      JavaScript{' '}
      {/*<InteractiveItem {...Factory.interactiveItemsProps(c.typescript)} />.*/}
      ML/AI enthusiast
    </NormalText>
  ),
  emoji: '👨‍💻',
}

const university: EmojiItem = {
  text: (
    <NormalText>
      Studied Computer Science (Data Analysis) on (master).
    </NormalText>
  ),
  emoji: '🎓',
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
  university,
  dream,
]
//
//
// {/*  {...Factory.interactiveItemsProps(c.master)}*/}
// {/*  text={c.master.wholeName}*/}
// {/*/>*/}
