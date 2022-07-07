import React from 'react';

export default function Home() {
    return (
        <div className='flex space-x-4 space-y-8 items-center justify-center h-screen'>
            <div className='flex flex-col mr-8'>
                <span className='h-40'></span>
                <div className='flex flex-col space-y-3 items-end'>
                    <h1 className='text-4xl'>Hi, I'm Matthew Pryor</h1>
                    <button className='w-2/3 bg-green-600 p-2 px-3 rounded-full font-medium '>
                        <p className='text-white text-xl'>About Me</p>
                    </button>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex space-x-1'>
                    <img src='/483430A9-0CD9-41AA-B31B-8699928A3790_1_201_a.jpeg' className='h-80 w-144 pb-16' alt='skiing' />
                    <img src='/1564B154-80E9-4F87-8B1E-EC7F7ECC6B49_1_201_a.jpeg' className='h-80 w-144' alt='camping' />
                </div>
            </div>
        </div>
    );
};