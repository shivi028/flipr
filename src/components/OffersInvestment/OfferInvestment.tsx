'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ProgressBar from '../ProgressBar'

const OfferInvestment = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <>
      <div className='overflow-hidden bg-white'>
        <div className='main-covering-tag flex items-center lg:ml-20 pb-20'>
          <div className='side-image'>
            <Image src={'/Images/shape.svg'} alt='' width={200} height={200} />
          </div>

          <div className='flexflex-col'>
            <div className='text-center mt-10'>
              <h1 className='text-3xl font-bold text-gray-800 tracking-wide'>Offerings open for investments</h1>
              <p className='text-sm font-medium text-gray-400 w-[30rem] mx-auto mt-4'>Explore pre-vetted investment opportunities available in a growing number of industry categories.</p>
            </div>
            <div className='grid grid-cols-3 mt-10'>
              <div
                className='border m-4 flex flex-col bg-white rounded-md shadow-md text-gray-800 w-[300px] relative'
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='relative border'>
                  <div className={`w-full ${hoveredCard === 1 ? 'hidden' : ''}`}>
                    <Image src={'/Images/9.svg'} alt='' height={300} width={350} />
                  </div>
                  <div className='flex gap-x-6 z-10 absolute inset-0 text-sm m-3'>
                    <div className={`h-8 w-[4rem] bg-gray-100 opacity-2 text-gray-800 flex items-center justify-center p-2 text-[0.850rem] font-bold ${hoveredCard === 1 ? 'hidden' : ''}`}>HOUSE</div>
                  <div className={`h-8 w-[8rem] bg-gray-100 opacity-2 text-gray-800 flex items-center px-2 text-[0.850rem] font-bold ${hoveredCard === 1 ? 'hidden' : ''}`}>Family business</div>
                  </div>
                </div>
                <div className='m-3'>
                  <h1 className='text-2xl font-bold '>Oxalis</h1>
                  <p className='text-gray-400 text-[0.850rem]'>Indore, India</p>
                </div>
                <div className='m-3'>
                  <p className='text-[0.830rem] font-semibold tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.?</p>
                </div>
                <div className='m-3'>
                  <ProgressBar current={574920} goal={1000000} />
                  <p className='text-[0.830rem] font-semibold tracking-tight ml-2'>
                    <span className='text-teal-500'>$57,4920</span> raised of $10,00,000
                  </p>
                </div>
                {hoveredCard === 1 && (
                  <>
                    <div className='m-3'>
                      <hr className='border-t border-gray-200' />
                    </div>
                    <div className='m-3'>
                      <table className='w-full text-sm text-left'>
                        <tbody>
                          <tr>
                            <td className='font-semibold'>Security Type</td>
                            <td>Revenue Sharing Note</td>
                          </tr>
                          <tr>
                            <td className='font-semibold'>Investment Multiple</td>
                            <td>1.4x</td>
                          </tr>
                          <tr>
                            <td className='font-semibold'>Maturity</td>
                            <td>48 months</td>
                          </tr>
                          <tr>
                            <td className='font-semibold'>Min. Investment</td>
                            <td>$100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='m-3'>
                      <button className='w-full bg-pink-500 text-white font-bold py-2 rounded-md'>VIEW</button>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className='more-project border border-pink-500 text-pink-500 w-[20%] mx-auto flex items-center justify-center h-12 cursor-pointer'>
              VIEW ALL PROJECT
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OfferInvestment
