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
`

const Button = styled.button`
  display: block;
  border: 0;
  background: #ffbc2d;
  color: white;
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