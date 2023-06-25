import { NextProps } from '@/app/types/NextProps'
import { FC } from 'react'
import * as fs from 'fs'

type URLProps = {
  workId: string
}

type Props = NextProps<URLProps>

async function getHtml(workId: Props['params']['workId']) {
  const rootPath = 'src/assets/work'
  const directories = fs.readdirSync('src/assets/work')
  const desiredDirectory = directories.find(
    directoryName => directoryName === workId
  )

  const contentOfDirectory = fs.readdirSync(`${rootPath}/${desiredDirectory}`)

  const htmlName = contentOfDirectory.find(item => item.includes('html'))

  const htmlContent = fs.readFileSync(
    `${rootPath}/${desiredDirectory}/${htmlName}`,
    { encoding: 'utf-8' }
  )

  return htmlContent
}

const SpecificWork: FC<Props> = async props => {
  const wantedWork = props.params.workId
  const _html = await getHtml(wantedWork)

  return <div dangerouslySetInnerHTML={{ __html: _html }}></div>
}

export default SpecificWork
