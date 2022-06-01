import { Box } from '@chakra-ui/layout'
import lottie, { type AnimationConfig } from 'lottie-web'
import React, { useEffect, useRef } from 'react'

export interface LottieProps {
  animation: any
  config?: AnimationConfig
}

export const Lottie: React.FC<LottieProps> = ({ animation, config }) => {
  const element = useRef<HTMLDivElement>(null)
  const lottieInstance = useRef<any>()

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData: animation,
        container: element.current,
        loop: false,
        autoplay: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
        ...config,
      })
    }
  }, [animation])

  return <Box ref={element} />
}
