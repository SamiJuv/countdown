import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled(motion.div)`
  background: white;
  padding: 3rem;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
`

const H2 = styled.h2`
  margin: 0 0 1rem;
`

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  return (
    <Container
      initial={{
        x: -1000,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4
        }
      }}
      exit={{
        x: -1000,
        opacity: 0,
        transition: {
          duration: 0.4
        }
      }}
    >
      <H2>Countdown</H2>
    </Container>
  )
}

export default Countdown