import { useState } from 'react'
import styled from 'styled-components'

import Countdown from './Countdown'
import DateForm from './DateForm'
import ResetButton from './ResetButton'

const Container = styled.div`
  max-width: 960px;
  margin: 5rem auto;
`

const H1 = styled.h1`
  margin: 0 0 4rem;
  text-align: center;
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