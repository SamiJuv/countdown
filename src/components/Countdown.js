import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { getTimeRemaining, timestampToDateString } from '../utils/countdown'

const Container = styled(motion.div)`
  background: white;
  padding: 3rem;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
  margin: 0 2rem;

  @media (max-width: 720px) {
    padding: 1rem;
    margin: 0 1rem;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
`

const ItemVal = styled.div`
  font-weight: 700;
  font-size: 2rem;

  @media (max-width: 720px) {
    font-size: 1.4rem;
  }
`

const ItemLabel = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  padding-top: 0.1rem;
  border-top: 3px solid #e85c68;

  @media (max-width: 720px) {
    font-size: 0.9rem;
  }
`

const EndDate = styled.p`
  margin: 4rem 0 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 720px) {
    margin: 2rem 0 0;
    font-size: 1rem;
  }
`

const Item = ({ value, label }) => (
  <div style={{ textAlign: 'center' }}>
    <ItemVal>{value}</ItemVal>
    <ItemLabel>{label}</ItemLabel>
  </div>
)

const Countdown = ({ countdownTimestamp }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(countdownTimestamp));
  const endDateString = timestampToDateString(countdownTimestamp);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(countdownTimestamp));
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownTimestamp])

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
      <ItemsContainer>
        <Item value={timeRemaining.days} label='days' />
        <Item value={timeRemaining.hours} label='hours' />
        <Item value={timeRemaining.minutes} label='minutes' />
        <Item value={timeRemaining.seconds} label='seconds' />
      </ItemsContainer>

      <EndDate>{endDateString}</EndDate>
    </Container>
  )
}

export default Countdown