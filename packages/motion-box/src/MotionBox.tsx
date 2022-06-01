import { chakra, ChakraProps } from '@chakra-ui/system'
import { HTMLMotionProps, isValidMotionProp, motion } from 'framer-motion'
import React from 'react'

export interface MotionBoxProps
  extends Omit<ChakraProps, 'transition'>,
    Omit<HTMLMotionProps<'div'>, 'color'> {}

export const MotionBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
}) as React.FC<MotionBoxProps>
