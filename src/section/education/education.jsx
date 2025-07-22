import React from 'react'
import unnesWhite from '../../assets/unneswhite.png';

const Education = () => {
  return (
    <div className='container'>
        <h2 className='my-3 text-xl'>Education</h2>
        <div className='bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl p-4'>
          <div className='flex-row md:flex gap-2 pb-2'>
            <img src={unnesWhite} alt="Logo Unnes" className="w-12 h-auto" />
            <div>
              <h2 className='text-xl font-bold'>Universitas Negeri Semarang (UNNES)</h2>
              <p className='text-sm font-semibold text-purple-300'>Bachelor's degree, Informatics and Computer Engineering Education</p>
            </div>
          </div>
            <p className='text-sm font-semibold'>Grade : 3.92 / 4.00</p>
            <p className='text-xs italic text-gray-400'>Aug 2021 - Jun 2025</p>
            <p className='text-sm pt-1 text-gray-200'>
                Activity : <br/>
                Developed a thesis project on designing a BISINDO sign language translation application using Convolutional Neural Networks (CNN)
            </p>
        </div>
    </div>
  )
}

export default Education