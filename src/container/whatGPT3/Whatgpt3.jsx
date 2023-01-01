import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css';



function Whatgpt3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='whatgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT-3' text='loremLorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci aliquam aliquid aut reprehenderit. Facere at laudantium quam unde dolor!' />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
        <p>EXplore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title=' Chatbot' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci aliquam aliquid aut reprehenderit. Facere at laudantium quam unde dolor!'/>
        <Feature title=' knowledgebase' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci aliquam aliquid aut reprehenderit. Facere at laudantium quam unde dolor!'/>
        <Feature title=' Chatbot' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora adipisci aliquam aliquid aut reprehenderit. Facere at laudantium quam unde dolor!'/>
      </div>
    </div>
  )
}

export default Whatgpt3
