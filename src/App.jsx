import React from 'react';
import { Header } from './components/header';
import { Buttun } from './components/buttun';
import { MainTitle, MainImgs } from './components/mainCard';
import {Different, About} from './components/about'
import { Said } from './components/said';
import { Footer } from './components/footer';
// imgs
import anisha from './assets/anisha-img.svg'
import bravo from './assets/bravo.svg'
import richard from './assets/richard.svg'
// imgs end
import './main.scss'

function App() {

  return (
    <>
      <header className='w-full px-[8rem] py-[1rem] top-0 sticky bg-white flex items-center justify-between'>
        <Header/>
        <Buttun />
      </header>
      <main className='main-container grid grid-cols-2 items-center justify-between gap-[8rem]'>
        <div className="main-title flex flex-col gap-[2rem]">
          <MainTitle />
          <Buttun />
        </div>
        <MainImgs />
      </main>
      <section className='w-[1250px] mx-auto my-2 grid grid-cols-2 gap-[5rem]'>
          <Different title={'What`s different about Manage?'} text={'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.'}/>
          <div className='w-[500px] flex flex-col justify-center gap-[2.5rem]'>
            <About number={1} title={"Track company-wide progress"} text={"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."}/>
            <About number={2} title={"Advanced built-in reports"} text={"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."}/>
            <About number={3} title={"Everything you need in one place"} text={"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}/>
          </div>
      </section>
      <section className='mt-[3rem] mb-5 px-3 mx-auto'>
        <h2 className='w-[20rem] font-bold mx-auto text-4xl'>What they`ve said</h2>
        <div className='w-full mx-auto text-center my-[5rem] ps-[2.6rem] grid grid-cols-3 gap-10'>
          <Said img={anisha} title={'Anisha Li'} text={'“Manage has supercharged our team`s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'} />
          <Said img={bravo} title={'Ali Bravo'} text={'“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'} />
          <Said img={richard} title={'Richard Watts'} text={'“Manage allows us to provide structure and process. It keeps us organized and focused. I can`t stop recommending them to everyone I talk to!”'} />
        </div>
        <div className="text-center">
          <Buttun />
        </div>
      </section>
      <section className='mt-[10rem] px-[10rem] py-[3rem] bg-orange-600 flex items-center justify-around'>
        <h2 className='text-4xl font-bold'>Simplify how your team <br/> works today.</h2>
          <Buttun bgColor={'black'} />
      </section>
      <footer className='px-[10rem] py-[3.8rem] bg-gray-900 text-white flex justify-between'>
        <Footer/>
      </footer>
    </>
  )
}

export default App