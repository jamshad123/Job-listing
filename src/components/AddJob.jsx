import React from 'react'
import { BsArrowLeft } from "react-icons/bs"

const AddJob = () => {
    return (
        <div className='max-w-[1240px] mx-auto w-[100vw] h-[100vh] flex items-center justify-center relative ' >

            <BsArrowLeft className="absolute top-7 left-10 text-xl cursor-pointer" />

            <div className='bg-[#fff] flex flex-col items-center justify-center px-20 py-10  shadow-lg border-gray-100 rounded-md border-2 border-solid ' >

                <h3 className='text-xl font-bold ' >Add Job</h3>

                <div className='my-3 flex flex-col items-start w-[100%]' >
                    <label htmlFor="title">Job Title</label>
                    <input type="text" className='w-[100%] py-2 px-4 bg-gray-200 border-gray-50 rounded-md border-2 border-solid outline-none' />
                </div>

                <div className='my-3 flex flex-col items-start w-[100%]' >
                    <label htmlFor="name">Company Name</label>
                    <input type="text" className='w-[100%] py-2 px-4 bg-gray-200 border-gray-50 rounded-md border-2 border-solid outline-none' />
                </div>

                <div className='my-3 flex flex-row justify-between w-[100%]' >
                    <div className='flex flex-col items-start w-[48%]' >
                        <label htmlFor="name">Salary</label>
                        <input type="text" className='w-[100%] py-2 px-4 bg-gray-200 border-gray-50 rounded-md border-2 border-solid outline-none' />
                    </div>
                    <div className='flex flex-col items-start w-[48%]' >
                        <label htmlFor="name">Date-Time</label>
                        <input type="datetime-local" className='w-[100%] py-2 px-4 bg-gray-200 border-gray-50 rounded-md border-2 border-solid outline-none' />
                    </div>
                </div>

                <div className='my-3 flex flex-col items-start w-[100%]' >
                    <label htmlFor="name">Description</label>
                    <textarea name="" id="" cols="20" rows="3"
                        className='w-[100%] py-2 px-4 bg-gray-200 border-gray-50 rounded-md border-2 border-solid outline-none'
                    ></textarea>
                </div>

                <button className='my-3 px-5 py-2 text-lg text-white bg-blue-500 rounded-sm outline-none border-none' >
                    Submit
                </button>

            </div>

        </div>
    )
}

export default AddJob