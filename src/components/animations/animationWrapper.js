import React from 'react'
import styled from 'styled-components'

import LogosBoris from './Boris/logosBoris'
import LogosVera from './Vera/logosVera'

const AnimationWrapper = (props) => {

  const AnimationContainer = styled.div({
    transform: !props.pointingBoris ? 'skew(40deg) scale(1.2)' : '',
    top: !props.pointingBoris ? '20%' : '48%',
    left: !props.pointingBoris ?'45%' : '45%',
  })

  const changeAnimationState = state => () => {
    const els = document.querySelectorAll('.mf-anim-state')
    Array.from(els).forEach(
      it => (it.style.animationPlayState = state),
    )
  }

  return (
    <div>
      <AnimationContainer
        className="text-white w-24 h-24 m-auto text-center absolute  z-20 flex"
        onMouseOver={changeAnimationState('paused')}
        onMouseOut={changeAnimationState('running')}
      >
        {!props.pointingBoris && <LogosBoris/>}
        {props.pointingBoris && <LogosVera/>}

      </AnimationContainer>

    </div>
  )
}

export default AnimationWrapper