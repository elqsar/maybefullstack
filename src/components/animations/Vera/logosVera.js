import React from 'react'
import js from '../../../images/icons/languages/JavaScript_logo_2.svg.png'
import html from '../../../images/icons/languages/html5-40-final.png'
import css from '../../../images/icons/languages/CSS.3.svg.png'

function LogosVera () {
  return (

    <div className="  ">
      <div className="w-16 h-16 z-30 absolute">
        <img
          src={js}
          alt={'js'}
          className=" z-20 mf-js_icon_V w-16 h-auto mf-anim-state "
        />
      </div>

      <img src={html} alt={'us'} className="mf-html_icon w-16 absolute h-auto mf-anim-state"/>
      <img src={css} alt={'us'} className="z-10 mf-css_icon w-16 h-auto absolute mf-anim-state"/>
    </div>
  )
}

export default LogosVera