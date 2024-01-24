import React from 'react'
import img_1 from '../assets/mainimg-1.png'
import img_2 from '../assets/mainimg-2.png'
import '../main.scss'

export const MainTitle = () => {
    try {
        return <>
                <h2 className='text-[2.4rem] font-bold'>Bring everyone <br /> together to build <br /> better products.</h2>
                <p className='text-'>Manage makes it simple for software teams <br/> to plan day-to-day tasks while keeping the <br/> larger team goals in view.</p>
            </>
    } catch (e) { console.log(e); }
}

export const MainImgs = () => {
    try {
        return <div className="main-img grid flex-wrap grid-cols-2 gap-2">
                <div className="flex"> <img src={img_1} alt="" /> </div>
                <div className="w-[14rem] h-[14rem] bg-white p-[3rem]"> <img src={img_2} alt="" /> </div>
                <div className="w-[16rem] h-[13rem] ms-[8rem] p-[.2rem] grid grid-cols-1 grid-rows-2 bg-white">
                    <p className='flex items-end px-6 py-3 text-4xl font-semibold'>89.74%</p>
                    <div className="p-3 grid grid-cols-2 gap-8">
                        <p className='h-[100%] rounded-lg flex items-end py-3 justify-center text-xl font-bold text-white bg-orange-500'>+1.5%</p>
                        <p className='w-[40%] h-[100%] flex items-end py-3 justify-center text-xl font-bold'>88.24%</p>
                    </div>
                </div>
            </div>
    } catch (e) { console.log(e); }
}
