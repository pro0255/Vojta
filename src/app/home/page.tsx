import { Header, NormalText } from '@/components/DesignSystem'
import { Paragraph } from '@/components/DesignSystem/Blocks/Paragraph'
import { InteractiveItem } from '@/components/DesignSystem/Blocks/InteractiveItem'
import { Factory } from '@/helpers/factories/Factory'
import { c } from '@/constants'
import { ContactContainer } from '@/components'

const Home = () => {
  return (
    <main>
      <div className={'flex flex-row'}>
        <Header.One>hey there, stranger</Header.One>{' '}
        <Header.One className={'ml-5 animate-wavingHand'}>👋🏼</Header.One>
      </div>
      <Paragraph>
        <NormalText>
          I am a software engineer specializing in frontend development,
          currently employed at
          <InteractiveItem {...Factory.interactiveItemsProps(c.ataccama)} />.
          Within the company, I am an integral member of a team responsible for
          overseeing the development of core application modules.
        </NormalText>
      </Paragraph>

      <Paragraph>
        <NormalText>
          In addition to my professional endeavors, I actively seek
          opportunities to share information and knowledge. One of my current
          endeavors involves coaching within the wonderful community known as
          <InteractiveItem {...Factory.interactiveItemsProps(c.czechitas)} />.
          As I progress, I aspire to contribute valuable blog posts in the
          future.
        </NormalText>
      </Paragraph>

      <Paragraph>
        <NormalText>
          The foundation of this portfolio was laid by acquiring proficiency in
          <InteractiveItem {...Factory.interactiveItemsProps(c.nextjs)} /> and
          <InteractiveItem {...Factory.interactiveItemsProps(c.langchain)} />,
          <InteractiveItem {...Factory.interactiveItemsProps(c.r3f)} />, as well
          as setting up a platform for disseminating information through blog
          posts.
        </NormalText>
      </Paragraph>

      <Paragraph>
        <NormalText>
          I have a genuine affinity for the concept of artificial intelligence.
          Feel free to engage in a conversation with me through the chat
          section! However, I kindly request that you be considerate in your
          interactions with me. 😬
        </NormalText>
      </Paragraph>

      <Paragraph>
        <ContactContainer />
      </Paragraph>
    </main>
  )
}

export default Home
