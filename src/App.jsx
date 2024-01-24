import React from 'react';
import { Header } from './components/header';
import { Buttun } from './components/buttun';
import { MainTitle, MainImgs } from './components/mainCard';
import {Different, About} from './components/about'
import './main.scss'

function App() {

  return (
    <>
      <header className='header flex items-center justify-between'>
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
      <section className='w-[1250px] mx-auto my-2 grid grid-cols-2 gap[5rem]'>
          <Different title={'What`s different about Manage?'} text={'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.'}/>
          <div className='w-[500px] flex flex-col justify-center gap-[2.5rem]'>
            <About number={1} title={"Track company-wide progress"} text={"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."}/>
            <About number={2} title={"Advanced built-in reports"} text={"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."}/>
            <About number={3} title={"Everything you need in one place"} text={"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}/>
          </div>
      </section>
    </>
  )
}

export default App