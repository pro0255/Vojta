import { Header } from '@/components/DesignSystem'
import { Paragraph } from '@/components/DesignSystem/Blocks/Paragraph'
import { PickAvatar } from '@/Three/components/PickAvatar'
import { EmojiList } from '@/components/DesignSystem/Blocks/EmojiList'
import { summary } from '@/constants/summary'

const About = () => {
  return (
    <main>
      <Header.One>About Vojtech Prokop</Header.One>

      <PickAvatar />

      <section>
        <Header.Two>What I offer</Header.Two>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed elit
          dui, pellentesque a, faucibus vel, interdum nec, diam. Maecenas lorem.
          Nullam eget nisl. Mauris suscipit, ligula sit amet pharetra semper,
          nibh ante cursus purus, vel sagittis velit mauris vel metus. Sed ac
          dolor sit amet purus malesuada congue. Nunc auctor. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Aliquam ornare wisi eu metus. Mauris dolor felis,
          sagittis at, luctus sed, aliquam non, tellus. In dapibus augue non
          sapien. Nunc tincidunt ante vitae massa. Proin mattis lacinia justo.
          Aenean vel massa quis mauris vehicula lacinia. Aliquam erat volutpat.
          Duis pulvinar. Nunc auctor. Praesent dapibus. Nulla non lectus sed
          nisl molestie malesuada. Curabitur sagittis hendrerit ante. Aliquam in
          lorem sit amet leo accumsan lacinia. Mauris dictum facilisis augue.
          Praesent in mauris eu tortor porttitor accumsan. Nam quis nulla.
          Integer imperdiet lectus quis justo. Nullam sit amet magna in magna
          gravida vehicula. Donec quis nibh at felis congue commodo. Etiam
          posuere lacus quis dolor. Curabitur ligula sapien, pulvinar a
          vestibulum quis, facilisis vel sapien. Nulla pulvinar eleifend sem.
          Maecenas libero. Donec quis nibh at felis congue commodo. Etiam
          commodo dui eget wisi. Morbi scelerisque luctus velit. Etiam dictum
          tincidunt diam. Integer malesuada. Cras elementum. Fusce nibh. Aliquam
          erat volutpat. Maecenas lorem. Nullam eget nisl. Aliquam in lorem sit
          amet leo accumsan lacinia. In sem justo, commodo ut, suscipit at,
          pharetra vitae, orci. Nunc tincidunt ante vitae massa. Aenean id metus
          id velit ullamcorper pulvinar. Praesent id justo in neque elementum
          ultrices. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus
          quam ultricies odio, vitae placerat pede sem sit amet enim. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Etiam
          commodo dui eget wisi. In laoreet, magna id viverra tincidunt, sem
          odio bibendum justo, vel imperdiet sapien wisi sed libero. Duis sapien
          nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Nullam
          faucibus mi quis velit. Mauris dictum facilisis augue. Vestibulum
          fermentum tortor id mi. Mauris dolor felis, sagittis at, luctus sed,
          aliquam non, tellus. Morbi leo mi, nonummy eget tristique non, rhoncus
          non leo. Mauris elementum mauris vitae tortor. Maecenas sollicitudin.
          Nullam sit amet magna in magna gravida vehicula. Curabitur bibendum
          justo non orci. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Proin mattis
          lacinia justo. Aliquam in lorem sit amet leo accumsan lacinia. Aliquam
          erat volutpat. Nullam dapibus fermentum ipsum. Sed elit dui,
          pellentesque a, faucibus vel, interdum nec, diam. Praesent vitae arcu
          tempor neque lacinia pretium. Nullam faucibus mi quis velit. Etiam
          bibendum elit eget erat. Nulla quis diam. Fusce suscipit libero eget
          elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas
          nulla, et sollicitudin sem purus in lacus. Aliquam erat volutpat. In
          enim a arcu imperdiet malesuada. Integer vulputate sem a nibh rutrum
          consequat. Nullam rhoncus aliquam metus. Mauris elementum mauris vitae
          tortor. Fusce aliquam vestibulum ipsum. Maecenas lorem.
        </Paragraph>
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
