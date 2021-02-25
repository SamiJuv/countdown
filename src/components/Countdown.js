import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { getTimeRemaining, timestampToDateString } from '../utils/countdown'

const Container = styled(motion.div)`
  background: white;
  padding: 3rem;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
`

const Item = styled.div`
  text-align: center;
`

const ItemVal = styled.div`
  font-weight: 700;
  font-size: 36px;
`

const ItemLabel = styled.div`
  font-weight: 700;
  font-size: 22px;
`

const H3 = styled.h3`
  margin: 4rem 0 0;
  text-align: center;
`

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
        <Item>
          <ItemVal>
            {timeRemaining.days}
          </ItemVal>
          <ItemLabel>days</ItemLabel>
        </Item>

        <Item>
          <ItemVal>{timeRemaining.hours}</ItemVal>
          <ItemLabel>hours</ItemLabel>
        </Item>

        <Item>
          <ItemVal>{timeRemaining.minutes}</ItemVal>
          <ItemLabel>minutes</ItemLabel>
        </Item>

        <Item>
          <ItemVal>{timeRemaining.seconds}</ItemVal>
          <ItemLabel>seconds</ItemLabel>
        </Item>
      </ItemsContainer>

      <H3>{endDateString}</H3>
    </Container>
  )
}

export default Countdown