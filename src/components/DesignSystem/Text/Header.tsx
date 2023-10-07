import { FC, HTMLAttributes, ReactNode } from 'react'
import { tu } from '@/helpers'
import { AnchoredTitle } from '@/components/DesignSystem/Text/AnchoredTitle'

type Props = {
  children: string
  className?: string
  name?: string
  isAnchored?: boolean
} & HTMLAttributes<HTMLHeadingElement>

export const HeaderOne: FC<Props> = ({
  children,
  name,
  isAnchored,
  ...props
}) => {
  return (
    <h1 {...props} id={name}>
      <AnchorChildren name={name} isAnchored={isAnchored}>
        {children}
      </AnchorChildren>
    </h1>
  )
}

export const HeaderTwo: FC<Props> = ({
  children,
  name,
  isAnchored,
  ...props
}) => {
  return (
    <h2 className="mt-5" {...props} id={name}>
      <AnchorChildren name={name} isAnchored={isAnchored}>
        {children}
      </AnchorChildren>
    </h2>
  )
}

export const HeaderThree: FC<Props> = ({
  children,
  name,
  isAnchored,
  ...props
}) => {
  return (
    <h3 className="mt-4" {...props} id={name}>
      <AnchorChildren name={name} isAnchored={isAnchored}>
        {children}
      </AnchorChildren>
    </h3>
  )
}

type AnchorChildrenProps = {
  children: ReactNode
  name?: string
  isAnchored?: boolean
}

const AnchorChildren: FC<AnchorChildrenProps> = ({
  children,
  name,
  isAnchored,
}) => {
  if (name) {
    return <AnchoredTitle href={`#${name}`}>{children}</AnchoredTitle>
  }

  if (isAnchored && typeof children === 'string') {
    return (
      <AnchoredTitle href={`#${tu.toKebab(children)}`}>
        {children}
      </AnchoredTitle>
    )
  }

  return <>{children}</>
}

export const Header = {
  One: HeaderOne,
  Two: HeaderTwo,
  Three: HeaderThree,
}
