import { work } from '@/app/work/instances'
import { List } from '@/app/work/components/List'

const useWork = () => {
  let resultWork = work

  // Sort with start date, newest in the beginning
  resultWork = resultWork.sort((a, b) => {
    if (a.start > b.start) {
      return -1
    } else {
      return 1
    }
  })

  return {
    work: resultWork,
  }
}

const Work = () => {
  const { work } = useWork()
  return (
    <main className={'w-full'}>
      <List work={work} />
    </main>
  )
}

export default Work
