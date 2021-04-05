import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
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

/*const Info = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 2rem;
`*/

const App = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const history = useHistory();

  const titleFromQuery = queryParams.get('title');
  const timestampFromQuery = queryParams.get('timestamp');

  const [countdownTimestamp, setCountdownTimestamp] = useState(timestampFromQuery ? timestampFromQuery : localStorage.getItem('countdownTimestamp'));
  const countdownTitle = titleFromQuery ? titleFromQuery : localStorage.getItem('countdownTitle');

  const handleSetDate = (date, title) => {
    const timestamp = (date.getTime() / 1000);
    localStorage.setItem('countdownTimestamp', timestamp);
    localStorage.setItem('countdownTitle', title);
    setCountdownTimestamp(timestamp);
  }

  const handleReset = () => {
    localStorage.clear();
    setCountdownTimestamp(null);

    const params = new URLSearchParams()
    params.delete('timestamp');
    params.delete('title');
    history.push({ search: params.toString() })
  }

  useEffect(() => {
    const params = new URLSearchParams()

    if (countdownTimestamp) {
      params.append('timestamp', countdownTimestamp)
    } else {
      params.delete('timestamp')
    }
    
    if (countdownTitle) {
      params.append('title', countdownTitle);
    } else {
      params.delete('title');
    }

    history.push({ search: params.toString() })
  }, [countdownTimestamp, history, countdownTitle])

  return (
    <>
      <CurveImage src={CurveImageUrl} />
      {countdownTimestamp && (
        <ResetButton reset={handleReset} />
      )}
      <Container>
        <header>
          {countdownTitle && (
            <H1>{countdownTitle}</H1>
          )}
          {!countdownTitle && (
            <H1>Simple countdown timer</H1>
          )}
        </header>
        {countdownTimestamp && (
          <Countdown countdownTimestamp={countdownTimestamp} />
        )}
        {!countdownTimestamp && (
          <DateForm handleSetDate={handleSetDate} />
        )}
      </Container>
      {/*<Info>
        <a href="https://www.samijuv.fi">samijuv.fi</a>
      </Info>*/}
    </>
  );
}

export default App