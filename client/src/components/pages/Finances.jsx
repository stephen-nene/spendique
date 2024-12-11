import React, { useState } from 'react';
import { Input, FloatButton, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Finances() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Format date as YYYY-MM-DD
  const formatDate = (date) => date.toISOString().split('T')[0];

  // Move date forward or backward by 1 day
  const changeDate = (days) => {
    setSelectedDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() + days)));
  };

  return (
    <div className="p-6 font-sans">
      {/* Header Section */}
      {/* <h1 className="text-2xl font-bold mb-4">Finances</h1> */}

      {/* Date Selector */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        <button
          className="text-xl text-gray-600 hover:text-blue-600"
          onClick={() => changeDate(-1)}
        >
          <FaChevronLeft />
        </button>
        <Input
          type="date"
          value={formatDate(selectedDate)}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="w-48"
        />
        <button
          className="text-xl text-gray-600 hover:text-blue-600"
          onClick={() => changeDate(1)}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Display Selected Date */}
      <p className="text-center text-lg text-gray-700">
        You are at <span className="font-bold text-blue-600">{formatDate(selectedDate)}</span>
      </p>

      {/* Float Button */}
      <FloatButton
        icon={<PlusOutlined />}
        tooltip={<div>Create New Category</div>}
        onClick={() => {
          message.success("Creating new category...");
        }}
        // style={{ bottom: 16, left: 16 }}
      />
    </div>
  );
}
