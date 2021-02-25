import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const ResetContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 3rem;
  cursor: pointer;

  @media (max-width: 720px) {
    top: 1rem;
    right: 1.5rem;
  }
`

const InfoText = styled(motion.div)`
  display: flex;
  align-items: center;
  position: absolute;
  right: 23px;
  width: 0;
  height: 42px;
  padding-left: 0rem;
  background-color: rgba(255,255,255,0.4);
  border-top-left-radius: 21px;
  border-bottom-left-radius: 21px;
  color: #3a3a3a;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.95rem;
  font-weight: 700;
`

const Cross = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: #fafafa;
  border-radius: 50%;
  font-family: 'open sans';
`

const ResetButton = ({ resetDate }) => {
  const infoControls = useAnimation();

  const animateShowInfo = () => {
    infoControls.start({
      width: '192px',
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