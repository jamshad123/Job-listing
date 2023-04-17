import React, { useState } from 'react'

import { SlOptionsVertical } from 'react-icons/sl'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Model from './Model'

const companylogo = "https://avatarfiles.alphacoders.com/149/thumb-149117.jpg"




const Jobs = () => {

    const [show, setShow] = useState(false)

    const [showModal, setShowModal] = useState(false)


    return (
        <>
            <div className='max-w-[1240px] mx-auto w-[100vw] h-[100%] flex items-start justify-start px-4 pt-20 relative ' >

                <Link to={`/add-job`}
                    className=' absolute top-4 right-4 my-3 px-5 py-2 text-lg text-white bg-blue-500 rounded-sm outline-none border-none'
                > Add Job</Link>


                <div className='w-[100%] flex flex-row flex-wrap justify-start ' >

                    <div className='mr-10 mb-5 w-[350px] h-[200px] shadow-lg border-2 border-gray-200 border-solid py-3 px-5 ' >




                        <div className='flex flex-row items-center justify-between ' >
                            <span className='text-sm font-bold ' >
                                Frontend Developer
                            </span>
                            <button
                                onClick={() => { setShow(!show) }}
                                className='relative'
                                id="menu-button" aria-expanded="true" aria-haspopup="true"
                            >
                                <SlOptionsVertical className="text-sm" />

                                <div className={show ? `absolute right-0 z-10 mt-2 w-[100px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none` : 'hidden'} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>

                                    <div className="py-1 flex flex-col items-start " role="none">
                                        <Link to="/edit-job" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0"><AiFillEdit className='mr-2 inline-block ' />Edit</Link>
                                        <button onClick={() => {
                                            console.log("true");
                                            setShowModal(true)
                                        }} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><BsFillTrashFill className='mr-2 inline-block ' />Delete</button>
                                    </div>

                                </div>
                            </button>
                        </div>

                        <div className=' my-2 flex flex-row items-center justify-start ' >
                            <img src={companylogo} className='w-[40px] h-[40px] rounded-full ' alt="companylogo" />
                            <span className='text-sm font-bold ml-3 ' >
                                Company Name
                            </span>
                        </div>

                        <div className=' my-2 flex flex-row items-center justify-between ' >
                            <span className='text-xs font-normal ' >
                                Salary : 20k-25k
                            </span>
                            <span className='text-xs font-normal ' >
                                Joining : 01-09-2023
                            </span>
                        </div>

                        <div className=' my-2 flex  items-center justify-center ' >
                            <p className='text-[12px] font-normal ' >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, dolore. Maiores laborum officia, minima eum quos totam! Nemo fugiat
                            </p>
                        </div>

                    </div>



                </div>



            </div>
            <Model showModal={showModal} setShowModal={setShowModal} />
        </>

    )
}

export default Jobs