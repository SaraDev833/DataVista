import React, { useState } from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('1hr');
    const times = ['7pm' , '10pm' , '11pm' , '1am' , '2am']
    const tabs = [
        {
            id: '1hr',
            name: '1hr',
            content: (
                <div>
                    <img src="/Graph.png" alt=""/>
                    <div className='flex justify-between '>
                        {times.map(time =>{
                            return <div className='text-customGray text-[14px] font-ubuntu'>{time}</div>
                        })}
                    </div>
                </div>
            ) 
            
        },
        {
            id: '1D',
            name: '1D',
            content: 'example 1',

        },
        {
            id: '1W',
            name: '1W',
            content: 'example 2',

        },
        {
            id: '1M',
            name: '1M',
            content: 'example 3',
        }
    ]
    return (
        <div className='flex justify-end items-end flex-col'>
            <ul className='flex bg-bgColor gap-2 p-2'>
                {tabs.map(tab => {
                    return (
                        <div className=' '>
                            <li key={tab.id} className={`cursor-pointer text-[12px] font-medium font-ubuntu text-customGray py-1 px-2 rounded ${activeTab === tab.id ? 'bg-white text-black' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.name}</li>
                     
                        </div>
                    )
                })}

            </ul>
            <div className="tab-content">
                {tabs.filter(tab => tab.id === activeTab).map(tab => {
                    return tab.content
                })}
               
            </div>
        </div>
    )
}

export default Tabs
