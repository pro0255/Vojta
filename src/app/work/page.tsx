import { List } from '@/components/Work'
import { work } from '@/work'

const Work = () => {
  return (
    <main>
      <List work={work} />
    </main>
  )
}

export default Work
