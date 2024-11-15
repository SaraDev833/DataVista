import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { Table } from "reactstrap";
import { CiSearch } from "react-icons/ci";

const TransactionTab = () => {
  const [active, setActive] = useState('all');
  const tableHeader = [
    {
      name: 'All',
      link: 'all',
      content: [
        {
          id: "HD82NA2H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: { name: "INR Deposit", tag: "E-Transfer" },
          amount: "+₹81,123",
          status: "pending",
        },
        {
          id: "HD82NA4H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: { name: "INR Withdraw", tag: "Wire Transfer" },
          amount: "-₹55,123",
          status: "processing",
        },
        {
          id: "HD82NA5H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: { name: "Buy", tag: "BTC" },
          amount: "12.0554484 BTC",
          status: "cancelled",
        },
        {
          id: "HD82NA6H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: { name: "Sell", tag: "BTC" },
          amount: "-2.0554484 BTC",
          status: "completed",
        },
        {
          id: "HD82NA7H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: { name: "BTC Deposit" },
          amount: "+15.5000000",
          status: "pending",
        },
        {
          id: "HD82NA8H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: { name: "BTC Withdraw" },
          amount: "-5.05555544",
          status: "completed",
        },
      ],
    },
    { name: 'Deposit', link: 'deposite', content: [] },
    { name: 'Withdraw', link: 'withdraw', content: [] },
    { name: 'Trade', link: 'trade', content: [] },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  }

  const activeContent = tableHeader.filter(item => item.link === active);
  const contentToRender = activeContent.length > 0 ? activeContent[0].content : [];

  return (
    <div className='overflow-x-auto container mx-auto bg-white p-6'>
      <ul className='flex justify-between w-full items-center border-b'>
        {tableHeader.map(header => (
          <li
            key={header.link}
            className={`font-ubuntu font-medium text-[12px] text-center text-customGray ${active === header.link ? 'border-b-2 w-[105px] border-purple' : ''} cursor-pointer transition-transform ease-linear duration-300`}
            onClick={() => setActive(header.link)}
          >
            {header.name}
          </li>
        ))}
        <div className='flex items-center justify-center  pr-6 gap-2'><CiSearch /> <span className='text-[14px] text-customGray font-[400] font-ubuntu'>Search by Id or destination</span></div>
      </ul>

      <Table responsive>
        <thead className='bg-gray-100'>
          <tr>
            <th className='text-[12px] font-medium font-ubuntu text-customGray whitespace-nowrap '>ID</th>
            <th className='text-[12px] font-medium font-ubuntu text-customGray whitespace-nowrap  flex items-center'>
              Date & Time <span className='text-lg text-customGray'><IoMdArrowDropdown /></span>
            </th>
            <th className='text-[12px] font-medium font-ubuntu text-customGray whitespace-nowrap '>
              Type
            </th>
            <th className='text-[12px] font-medium font-ubuntu text-customGray whitespace-nowrap  flex items-center'>
              Amount <span className='text-lg text-customGray'><IoMdArrowDropdown /></span>
            </th>
            <th className='text-[12px] font-medium font-ubuntu text-customGray whitespace-nowrap t'>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {contentToRender.length > 0 ? (
            contentToRender.map((item, index) => (
              <tr key={index}>
                <td className=' font-ubuntu text-[14px] font-medium'>{item.id}</td>
                <td className=' font-ubuntu text-[14px] font-medium'>{item.date} {item.time}</td>
                <td className=''>
                  <p className='text-[14px] font-medium font-ubuntu'>{item.type.name}</p>
                  <span className='text-[12px] font-[400] font-ubuntu text-customGray'>{item.type.tag}</span>
                </td>
                <td className=' font-ubuntu text-[14px] font-medium'>{item.amount}</td>
      {          console.log(statusColor[item.status])}
                <td className=''>
                  <button className='py-1 px-[6px] rounded-full text-[12px] font-ubuntu font-medium text-white flex items-center justify-center ' style={{backgroundColor: statusColor[item.status]}}>{item.status}</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className='text-center'>No data found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionTab;
