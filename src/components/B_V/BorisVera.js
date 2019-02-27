import React, { useState } from 'react'
import debounce from 'lodash.debounce'
import Vera2 from '../../images/Vera/Vera2.png'
import Vera from '../../images/Vera/Vera.png'
import Borisek from '../../images/Borisek/Borisek_comics2.png'
import Borisek2 from '../../images/Borisek/Borisek_comics2_pointing.png'
import AnimationWrapper from '../animations/animationWrapper'

const BorisVera = () => {
  const [pointingBoris, setPointingBoris] = useState(false)
  const [pointingVera, setPointingVera] = useState(true)

  const setPointing = () => {
    setPointingBoris(prevState => !prevState)
    setPointingVera(prevState => !prevState)
  }

  const debouncedSetPointing = debounce(setPointing, 300)

  const chooseVera = () => {
    if (pointingBoris && !pointingVera) {
      return (
        <img
          src={Vera2}
          onClick={debouncedSetPointing}
          alt={'us'}
          className=" w-1/25 h-full "
          style={{}}
        />
      )
    }
    return (
      <img
        onClick={debouncedSetPointing}
        src={Vera}
        alt={'us'}
        className="w-1/2 h-full "
        style={{}}
      />
    )
  }

  const chooseBoris = () => {
    if (pointingVera && !pointingBoris) {
      return (
        <img
          src={Borisek}
          onClick={setPointing}
          alt={'us'}
          className="w-1/2 h-full"
          style={{}}
        />
      )
    }
    return (
      <img
        onClick={setPointing}
        src={Borisek2}
        alt={'us'}
        className=" w-1/19 h-full"
        style={{}}
      />
    )
  }
  return (
    <div className="w-full h-full m-auto bg-black">
      {pointingVera && (
        <AnimationWrapper pointingBoris={pointingBoris} className="" />
      )}
      <div className="flex w-1/2 h-auto m-auto bg-blue py-16 align-middle items-center">
        {chooseVera()}
        {chooseBoris()}
      </div>
      {pointingBoris && <AnimationWrapper pointingBoris={pointingBoris} />}
      {/*<img src={image} alt={'us'} className=""/>*/}
    </div>
  )
}

export default BorisVera
