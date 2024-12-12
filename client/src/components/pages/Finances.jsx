import React, { useState, useEffect } from "react";
import { FloatButton, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { fetchFinances } from "../../helpers/normal";

import Cards from "./wrappers/Finances/Cards";
import DateChanger from "./wrappers/Finances/DateChanger.jsx";
export default function Finances() {
  const [financeData, setFinanceData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [lastFetchedDate, setLastFetchedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const formatDate = (date) => date.toISOString().split("T")[0];

  const getFinances = async (page = 1) => {
    await fetchFinances(page, setFinanceData, setLastFetchedDate);
    setCurrentPage(page);
  };


  const selectedDateObj =formatDate(selectedDate);
   
  // const lastFetchedDateObj = formatDate(lastFetchedDate);
  const lastFetchedDateObj = formatDate(new Date(lastFetchedDate));
// console.log(formatDate(selectedDate),formatDate(new Date(lastFetchedDate)))
  useEffect(() => {
    // console.log("Running useeffect...");
    if (lastFetchedDate) {
      // console.log("Fetching next page...",lastFetchedDateObj);

      // If the selected date is after the last fetched date, get the next page
      if (selectedDateObj === lastFetchedDateObj) {
        console.log("latest",lastFetchedDateObj,currentPage,selectedDateObj);
        setCurrentPage((prevPage) => prevPage + 1);
        getFinances(currentPage + 1);
      }
    }
    
    // If no data has been fetched yet, fetch the first page.
    if (!financeData || financeData.length === 0) {
      getFinances(1); // Fetch the first page if no data exists yet
    }
  }, [selectedDate]);
  
  return (
    <div className="p-6 font-sans">
      <DateChanger
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {/* Cards */}
      <Cards financeData={financeData} dateToView={selectedDate} />

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
