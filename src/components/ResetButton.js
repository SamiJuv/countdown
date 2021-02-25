import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const ResetContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 3rem;
  cursor: pointer;
`

const InfoText = styled(motion.div)`
  display: flex;
  align-items: center;
  position: absolute;
  right: 23px;
  width: 0;
  height: 42px;
  padding-left: 0rem;
  background-color: rgba(255,255,255,0.3);
  border-top-left-radius: 21px;
  border-bottom-left-radius: 21px;
  color: #444444;
  overflow: hidden;
  white-space: nowrap;
`

const Cross = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: #e3e3e3;
  border-radius: 50%;
`

const ResetButton = ({ resetDate }) => {
  const infoControls = useAnimation();

  const animateShowInfo = () => {
    infoControls.start({
      width: '185px',
      paddingLeft: '1rem',
      transition: {
        duration: 0.3
      }
    })
  }

  const animateHideInfo = () => {
    infoControls.start({
      width: '0',
      paddingLeft: '0rem',
      transition: {
        duration: 0.5
      }
    })
  }

  return (
    <ResetContainer
      onMouseEnter={() => animateShowInfo()}
      onMouseLeave={() => animateHideInfo()}
      onClick={() => resetDate()}
    >
      <InfoText
        initial={{
          width: '0px',
          paddingLeft: '0rem'
        }}
        animate={infoControls}
      >
        Reset countdown
      </InfoText>
      
      <Cross>X</Cross>
    </ResetContainer>
  )
}

export default ResetButton