import { useState } from 'react'
import styled from 'styled-components'

import Countdown from './Countdown'
import DateForm from './DateForm'
import ResetButton from './ResetButton'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const App = () => {
  const [countdownDate, setCountdownDate] = useState(localStorage.getItem('countdownDate'));
  console.log(countdownDate);

  const handleSetDate = (date) => {
    const timestamp = date.getTime();
    localStorage.setItem('countdownDate', timestamp);
    setCountdownDate(timestamp);
  }

  const handleResetDate = () => {
    localStorage.clear();
    setCountdownDate(null);
  }

  return (
    <>
      {countdownDate && (
        <ResetButton resetDate={handleResetDate} />
      )}
      <Container>
        <header>
          <h1>Simple countdown timer</h1>
        </header>
        {countdownDate && (
          <Countdown countdownDate={countdownDate} />
        )}
        {!countdownDate && (
          <DateForm handleSetDate={handleSetDate} />
        )}
      </Container>
    </>
  );
}

export default App