import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import fi from 'date-fns/locale/fi';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('fi', fi);
setDefaultLocale('fi');

const Container = styled(motion.div)`
  background: white;
  padding: 3rem;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
`

const H2 = styled.h2`
  margin: 0 0 1rem;

  @media (max-width: 720px) {
    font-size: 1.2rem;
  }
`

const Button = styled.button`
  display: block;
  border: 0;
  background-color: #e85c68;
  color: white;
  margin-top: 1rem;
  font-weight: 600;
  padding: 0.3rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.15s;
  box-shadow: 0px 1px 1px rgba(0,0,0,0.3);

  &:hover {
    background-color: #d1525c;
  }
`

const DateForm = ({ handleSetDate }) => {
  const [date, setDate] = useState(new Date());

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
      <H2>Select end date</H2>
      <DatePicker 
        selected={date}
        onChange={date => setDate(date)}
        showTimeSelect
        dateFormat='Pp'
      />
      <Button onClick={() => handleSetDate(date)}>Save</Button>
    </Container>
  )
}

export default DateForm