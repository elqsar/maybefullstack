import React from 'react'
import java from '../../../images/icons/languages/Java_Cup.svg'
import scala from '../../../images/icons/languages/scala-4.svg'
import js from '../../../images/icons/languages/JavaScript_logo_2.svg.png'
import go from '../../../images/icons/languages/go.png'


const LogosBoris = () => {

  return (

    <div className=" m-auto w-12 h-12  ">
      <div className=" absolute">
        <img
          src={java}
          alt={'java'}
          className="mf-java_icon w-16 h-auto z-10 mf-anim-state "
        />{' '}
      </div>

      <div
        style={{ transform: 'scale(0.5)' }}
        className="  absolute"
      >
        <img
          src={scala}
          alt={'scala'}
          className="mf-scala_icon mf-anim-state"
        />
      </div>
      <div >
        <img
          src={js}
          alt={'js'}
          className="mf-js_icon_B  w-16 h-auto mf-anim-state"
        />
      </div>
      <div className=" ">
      <img
        src={go}
        alt={'go'}
        className="mf-go_icon mf-anim-state "
      />
      </div>
      {/*<img src={html} alt={'us'} className="mf-main-image"/>*/}
      {/*<img src={css} alt={'us'} className="mf-main-image"/>*/}
    </div>
  )
}

export default LogosBoris
