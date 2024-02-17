import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import s from './Flex.module.css'

type FlexProps = {
  children: ReactNode
  direction?: 'row' | 'column'
  grow?: '0' | '1'
  shrink?: '0' | '1'
} & Margin &
  Padding &
  Gap

type Spacing =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'

type Margin = {
  ma: Spacing
  mt: Spacing
  mr: Spacing
  mb: Spacing
  ml: Spacing
  mx: Spacing
  my: Spacing
}

type Padding = {
  pa: Spacing
  pt: Spacing
  pr: Spacing
  pb: Spacing
  pl: Spacing
  px: Spacing
  py: Spacing
}

type Gap = {
  ga: Spacing
  gx: Spacing
  gy: Spacing
}

const Flex: FC<FlexProps> = (props) => {
  const { children, direction = 'row', ...spacing } = props
  const rootClassName = clsx(s.root, s[direction], 'px-4')
  return <div className={rootClassName}>{children}</div>
}

export default Flex
