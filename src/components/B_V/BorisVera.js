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
      return (<img
        src={Vera2}
        onClick={debouncedSetPointing}
        alt={'us'}
        className=" w-full h-auto  mx-auto "
        style={{  transform: 'scale(1) ' }}
      />)
    }
    return (<img
      onClick={debouncedSetPointing}
      src={Vera}
      alt={'us'}
      className=" w-full h-auto  mx-auto "
      style={{ transform: 'scale(0.9) ' }}
    />)
  }

  const chooseBoris = () => {
    if ( pointingVera && !pointingBoris) {
      return ( <img
        src={Borisek}
        onClick={setPointing}
        alt={'us'}
        className=" w-full h-auto  mx-auto "
        style={{transform: 'scale(0.9)'  }}
      />)
    }
    return (<img
      onClick={setPointing}
      src={Borisek2}
      alt={'us'}
      className=" w-full h-auto  mx-auto mf-slide-in_left slide-in "
      style={{ transform: 'scale(0.8)' }}
    />)
  }
  return (
      <div className="m-auto pt-0 max-w-lg pt-1 pr-1 ">
      {
        pointingVera && <AnimationWrapper pointingBoris={pointingBoris} className=""/>
      }
      <div className=" h-auto m-auto mt-24 flex">
        {chooseVera()}
        {chooseBoris()}
      </div>
      {
        pointingBoris && <AnimationWrapper pointingBoris={pointingBoris}/>
      }
      {/*<img src={image} alt={'us'} className=""/>*/}
    </div>
  )
}

export default BorisVera