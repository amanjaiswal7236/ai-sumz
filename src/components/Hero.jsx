import React from 'react'
import {logo} from '../assets'
function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
        <button type='button' onClick={()=> window.open('https://github.com/amanjaiswal7236')} className='black_btn'>
          Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className='desc'>
        Summarize articles, blogs, and research papers with the help of OpenAI's GPT-4 model. Just paste the article and get the summarized version in seconds. 
      </h2>
    </header>
  )
}

export default Hero