import { Header } from '@/components/DesignSystem'
import { Paragraph } from '@/components/DesignSystem/Blocks/Paragraph'
import { EmojiList } from '@/components/DesignSystem/Blocks/EmojiList'
import { summary } from '@/constants/summary'
import { PickAvatar } from '@/Three/components/PickAvatar'

const About = () => {
  return (
    <main>
      <Header.One>About</Header.One>

      <PickAvatar />

      <hr />

      <section>
        <Header.Two>What I offer</Header.Two>
        <Paragraph>
          I possess expertise in various domains based on my current
          experiences. Primarily, my knowledge revolves around frontend
          development. Additionally, I can provide assistance in the realm of
          data-related tasks, owing to my academic background in this field.
        </Paragraph>

        <Header.Three>Frontend development</Header.Three>
        <Paragraph>
          I possess the capability to handle day-to-day frontend tasks, wherein
          my focus lies in delivering solutions derived from thorough analysis.
          I strive to identify the most effective solutions, make informed
          choices, and implement them, while ensuring comprehensive test
          coverage across all levels of the testing pyramid, starting from the
          foundational tests.
        </Paragraph>

        <Paragraph>
          I am proficient in utilizing a range of tools, starting from
          fundamental ones such as JavaScript (JS), HTML, and CSS, to more
          advanced technologies including React, Playwright, Jest, Next.js,
          MobX, Apollo Client, and others.
        </Paragraph>

        <Header.Three>Software architect</Header.Three>
        <Paragraph>
          Although I have limited practical experience in this domain, I have
          invested significant effort in studying common books and gaining a
          deep understanding of core concepts. My goal is to deliver software
          solutions that adhere to mature patterns. I do not want to chase after
          all the new pokemons.
        </Paragraph>

        <Header.Three>Data world</Header.Three>
        <Paragraph>
          I possess the ability to perform basic Exploratory Data Analysis (EDA)
          and subsequently select either a classic or advanced model, including
          neural networks, to address machine learning (ML) problems.
          Additionally, my expertise extends to various models specifically
          designed for text analysis, thanks to my thesis research in this area.
        </Paragraph>
      </section>

      <hr className="mt-10" />

      <section className="pb-10">
        <Header.Two>Summary</Header.Two>
        <Paragraph>
          <EmojiList items={summary} />
        </Paragraph>
      </section>

      <hr className="mb-10" />

      <section className="w-full flex flex-row items-center justify-between">
        <button className="transition-all duration-200 hover:border-black hover:bg-slate-200 mr-2 w-full p-3 rounded-b border-solid border-2 border-slate-100">
          💼 Looking for a job
        </button>
        <button className="transition-all duration-200 hover:border-black hover:bg-slate-200 ml-2 w-full p-3 rounded-b border-solid border-2 border-slate-100 ">
          🌱 Open to learn something new
        </button>
      </section>
    </main>
  )
}

export default About
