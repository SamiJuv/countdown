import { useState } from 'react'
import styled from 'styled-components'

import Countdown from './Countdown'
import DateForm from './DateForm'
import ResetButton from './ResetButton'

import CurveImageUrl from '../assets/curve.svg'

const CurveImage = styled.img`
  position: absolute;
  z-index: -1;
  top: -30px;
  right: -10px;
  width: 1600px;
  max-width: none;
  height: 500px;
  transform: rotate(180deg);

  @media (max-width: 768px) {
    width: 600px;
    height: 250px;
  }
`

const Container = styled.div`
  max-width: 960px;
  margin: 5rem auto;
`

const H1 = styled.h1`
  margin: 0 0 4rem;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 720px) {
    font-size: 1.6rem;
    margin: 0 0 2rem;
  }
`

const App = () => {
  const [countdownTimestamp, setCountdownTimestamp] = useState(localStorage.getItem('countdownTimestamp'));

  const handleSetDate = (date) => {
    const timestamp = (date.getTime() / 1000);
    localStorage.setItem('countdownTimestamp', timestamp);
    setCountdownTimestamp(timestamp);
  }

  const handleResetDate = () => {
    localStorage.clear();
    setCountdownTimestamp(null);
  }

  return (
    <>
      <CurveImage src={CurveImageUrl} />
      {countdownTimestamp && (
        <ResetButton resetDate={handleResetDate} />
      )}
      <Container>
        <header>
          <H1>Simple countdown timer</H1>
        </header>
        {countdownTimestamp && (
          <Countdown countdownTimestamp={countdownTimestamp} />
        )}
        {!countdownTimestamp && (
          <DateForm handleSetDate={handleSetDate} />
        )}
      </Container>
    </>
  );
}

export default App