import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import s from './Flex.module.css'

type FlexProps = {
  children: ReactNode
  direction?: 'row' | 'column'
  grow?: '0' | '1'
  shrink?: '0' | '1'
}

const Flex: FC<FlexProps> = (props) => {
  const { children, direction = 'row' } = props
  const rootClassName = clsx(s.root, s[direction])
  return <div className={rootClassName}>{children}</div>
}

export default Flex
