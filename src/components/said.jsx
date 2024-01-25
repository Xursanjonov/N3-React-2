import React from 'react'

export const Said = ({img, title, text}) => {
  try {
    return <div className='w-[24rem] card px-[1rem] pb-3 text-center bg-gray-200 rounded-lg'>
        <div className="imgCard mt-[-2.6rem] pb-[2rem]"> <img className='mx-auto' src={img} alt="" /> </div>
        <h3 className='font-bold mb-[1rem]'>{title}</h3>
        <p className='text-sm'>{text}</p>
    </div>
  } catch (e) {console.log(e);}
}
