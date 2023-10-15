import { WorkName } from '@/app/work/types'
import { Tag } from '@/components/DesignSystem/Tag'

type Props = {
  type: WorkName
}
export const WorkTypeBadge = ({ type }: Props) => {
  switch (type) {
    case WorkName.Education:
      return <Tag className="bg-blue-100">Education</Tag>
    case WorkName.Learn:
      return <Tag className="bg-green-100">Learn</Tag>
    case WorkName.Company:
      return <Tag className="bg-red-100">Company</Tag>
  }

  throw new Error(`Renderer for work name type ${type} is not specified`)
}
