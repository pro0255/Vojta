import { Header } from '@/components/DesignSystem'
import { Paragraph } from '@/components/DesignSystem/Blocks/Paragraph'
import { PickAvatar } from '@/Three/components/PickAvatar'
import { EmojiList } from '@/components/DesignSystem/Blocks/EmojiList'
import { summary } from '@/constants/summary'

const About = () => {
  return (
    <main>
      <Header.One>About</Header.One>

      <PickAvatar />

      <section>
        <Header.Two>What I offer</Header.Two>
        <Paragraph>TODO</Paragraph>
      </section>

      <section className="pb-10">
        <Header.Two>Summary</Header.Two>
        <Paragraph>
          <EmojiList items={summary} />
        </Paragraph>
      </section>

      <hr className="pt-10" />

      <section className="w-full flex flex-row items-center justify-between">
        <button className="mr-2 w-full p-3 rounded-b border-solid border-2 border-b-slate-100">
          💼 Looking for a job
        </button>
        <button className="ml-2 w-full p-3 rounded-b border-solid border-2 border-b-slate-100 ">
          🌱 Open to learn something new
        </button>
      </section>
    </main>
  )
}

export default About
