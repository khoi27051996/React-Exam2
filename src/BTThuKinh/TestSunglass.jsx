import React from 'react'
import Style from './style.module.css'
import Content from './Content'
const TestSunglass = () => {
  return (
    <div>
      <div className={Style.background}></div>
      <div className={`${Style.content} container`}>
        <Content/>
      </div>
    </div>
  )
}

export default TestSunglass
