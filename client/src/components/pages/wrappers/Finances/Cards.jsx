import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import { message } from "antd"; // Importing Ant Design's message component for notifications
import formatDate from './DateChanger'
export default function Cards({ financeData, dateToView }) {
  const [openExpenses, setOpenExpenses] = useState(false);
  const [openIncomes, setOpenIncomes] = useState(!false);

  const formatDate = (date) => date.toISOString().split("T")[0];
  const selectedDate = formatDate(dateToView);

  const expenses = financeData
    ? financeData.filter((finance) => {
        const financeDate = finance.created_at
          ? new Date(finance.created_at).toISOString().split('T')[0]
          : null;
        return finance.transaction_type === "expense" && financeDate === selectedDate;
      })
    : [];

  const incomes = financeData
    ? financeData.filter((finance) => {
        const financeDate = finance.created_at
          ? new Date(finance.created_at).toISOString().split('T')[0]
          : null;
        return finance.transaction_type === "income" && financeDate === selectedDate;
      })
    : [];

  const toggleExpenses = () => {
    setOpenExpenses(!openExpenses);
    setOpenIncomes(false); // Close incomes when expenses are toggled
  };

  const toggleIncomes = () => {
    setOpenIncomes(!openIncomes);
    setOpenExpenses(false); // Close expenses when incomes are toggled
  };

  const handleItemClick = (title) => {
    message.success(`You clicked on ${title}`);
  };

  // Check if no data found for both expenses and incomes
  const noDataMessage =
    !financeData || (expenses.length === 0 && incomes.length === 0);

  return (
    <div className="font-[sans-serif] space-y-4 max-w-5xl mx-auto mt-4">
      {/* Display a message if there's no data */}
      {noDataMessage ? (
        <div className="bg-yellow-100 p-4 rounded-lg text-center text-gray-800">
          <h3>No finance data available.</h3>
          <p>
            It seems there are no expenses or incomes recorded. Please add new
            entries using the button below.
          </p>
        </div>
      ) : (
        <>
          <div
            className="rounded-lg bg-green-400 transition-all"
            role="accordion"
          >
            <button
              type="button"
              className="w-full text-base font-semibold text-left p-6 text-gray-800 flex items-center"
              onClick={toggleIncomes}
            >
              <span className="mr-4">Incomes</span>
              {openIncomes ? (
                <FcCollapse className="text-2xl fill-current ml-auto shrink-0" />
              ) : (
                <FcExpand className="text-2xl fill-current ml-auto shrink-0" />
              )}
            </button>
            {openIncomes && incomes.length > 0 && (
              <div className="pb-6 px-6">
                {incomes.map((finance) => (
                  <div
                    key={finance.id}
                    className="my-2 cursor-pointer hover:bg-gray-100 bg-green-100 p-2 rounded-lg"
                    onClick={() => handleItemClick(finance.title)}
                  >
                    <h4 className="font-semibold">{finance.title}</h4>
                    <p>{finance.description}</p>
                    <p>
                      <strong>Amount:</strong> ${finance.amount}
                    </p>
                    <p>
                      <strong>Transaction Cost:</strong> $
                      {finance.transaction_cost}
                    </p>
                    {finance.recurring && (
                      <p>
                        <strong>Recurring:</strong>{" "}
                        {finance.recurring.frequency} until{" "}
                        {finance.recurring.end_date}
                      </p>
                    )}
                    <p>
                      <strong>Created At:</strong> {finance.created_at}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {openIncomes && incomes.length === 0 && (
              <div className="pb-6 text-center text-gray-500">
                <p>No income records available.</p>
              </div>
            )}
          </div>

          {/* Expenses Section */}
          <div
            className="rounded-lg bg-rose-400 transition-all"
            role="accordion"
          >
            <button
              type="button"
              className="w-full text-base font-semibold text-left p-6 text-gray-800 flex items-center"
              onClick={toggleExpenses}
            >
              <span className="mr-4">Expenses</span>
              {openExpenses ? (
                <FcCollapse className="text-2xl fill-current ml-auto shrink-0" />
              ) : (
                <FcExpand className="text-2xl fill-current ml-auto shrink-0" />
              )}
            </button>
            {openExpenses && expenses.length > 0 && (
              <div className="pb-6 px-6">
                {expenses.map((finance) => (
                  <div
                    key={finance.id}
                    className="my-2 bg-rose-300 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                    onClick={() => handleItemClick(finance.title)}
                  >
                    <h4 className="font-semibold">{finance.title}</h4>
                    <p>{finance.description}</p>
                    <p>
                      <strong>Amount:</strong> ${finance.amount}
                    </p>
                    <p>
                      <strong>Transaction Cost:</strong> $
                      {finance.transaction_cost}
                    </p>
                    {finance.recurring && (
                      <p>
                        <strong>Recurring:</strong>{" "}
                        {finance.recurring.frequency} until{" "}
                        {finance.recurring.end_date}
                      </p>
                    )}
                    <p>
                      <strong>Created At:</strong> {finance.created_at}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {openExpenses && expenses.length === 0 && (
              <div className="pb-4 text-center text-gray-500">
                <p>No expense records available.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
