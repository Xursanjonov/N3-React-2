import React from 'react'

export const Different = ({title, text}) => {
  try {
      return <div className="w-[27rem]">
        <h1 className='text-[2.5rem] font-bold'>{title}</h1>
        <p>{text}</p>
      </div>
  } catch (e) {console.log(e);}
}


export const About = ({number, title, text} ) => {
  try {
      return <div className='flex justify-center gap-[1.5rem]'>
          <div className='w-[4.18rem] h-[2.5rem] text-xl flex items-center justify-center font-bold text-white bg-orange-500 rounded-xl'>0{number}</div>
          <div>
          <h4 className='font-bold my-2'>{title}</h4>
          <p className='w-[27rem] text-lg text-gray-300'>{text}</p>
          </div>
      </div>
  } catch (e) {console.log(e);}
}
