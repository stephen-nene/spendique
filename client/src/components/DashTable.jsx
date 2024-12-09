import React, { useState } from "react";
import {
  MdEdit,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
  MdOutlineDelete,
  MdSort,
} from "react-icons/md";
import { message } from "antd";

const DashTable = ({ data, meta, onPageChange, onEdit, onDelete }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Helper function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-orange-200 text-orange-800";
      case "active":
        return "bg-green-200 text-green-800";
      case "inactive":
        return "bg-red-200 text-red-800";
      case "suspended":
        return "bg-rose-200 text-rose-800";

      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  // Helper function to get role color
  const getRoleColor = (role) => {
    switch (role) {
      case "user":
        return "bg-blue-200 text-blue-800";
      case "provider":
        return "bg-yellow-200 text-yellow-800";
      case "admin":
        return "bg-purple-200 text-purple-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div
      className={`font-[sans-serif] overflow-x-auto ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="min-h-screen">
        <table
          className={`min-w-full ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"
          }`}
        >
          <thead
            className={`whitespace-nowrap text-md text-left font-semibold ${
              darkMode ? "text-gray-400" : "text-black"
            }`}
          >
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4 flex items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  Role
                  <MdSort />
                </div>
              </th>
              <th className="p-4">
                <div className="flex items-center gap-x-1">
                  Status
                  <MdSort />
                </div>
              </th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody className="whitespace-nowrap">
            {data?.map((item, index) => (
              <tr
                key={item.id}
                className={`odd:bg-blue-50 ${
                  darkMode ? "odd:bg-gray-700" : "odd:bg-blue-50"
                }`}
              >
                <td className="p-4 text-sm">
                  <div className="flex items-center cursor-pointer w-max">
                    <img
                      src={`https://img.daisyui.com/images/profile/demo/${
                        (index % 4) + 1
                      }@94.webp`}
                      className="w-9 h-9 rounded-full shrink-0"
                      alt={`${item.first_name}'s avatar`}
                    />
                    <div className="ml-4">
                      <p className="text-sm">{`${item.first_name} ${item.last_name}`}</p>
                      <p
                        className={`text-xs mt-0.5 ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {item.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm">
                  <span
                    className={`py-1 px-2 rounded-full text-xs ${getRoleColor(
                      item.role
                    )}`}
                  >
                    {item.role}
                  </span>
                </td>
                <td className="p-4 text-sm">
                  <span
                    className={`py-1 px-2 rounded-full text-xs ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4 text-2xl">
                  <button
                    className={`mr-4 ${
                      darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                    }`}
                    onClick={() => onEdit(item)}
                    title="Edit"
                  >
                    <MdEdit />
                  </button>
                  <button
                    className={`${
                      darkMode ? "hover:text-red-400" : "hover:text-red-600"
                    }`}
                    onClick={() => onDelete(item)}
                    title="Delete"
                  >
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className={`md:flex m-4 ${
          darkMode ? " text-gray-200" : " text-gray-900"
        }`}
      >
        <p className="text-sm flex-1">
          Showing {data.length} of {meta.total_count || "?"} entries
        </p>

        <div className="flex items-center max-md:mt-4">
          <ul className="flex space-x-1 ml-2 text-xl">
            {/* Previous Page Button */}
            <button
              onClick={() => onPageChange(meta?.current_page - 1)}
              className={`flex items-center justify-center w-7 h-7 rounded ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  : "bg-blue-100 hover:bg-blue-200 text-blue-600"
              }`}
              aria-label="Previous Page"
              disabled={meta?.current_page === 1}
            >
              <MdOutlineChevronLeft />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: meta?.total_pages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === meta?.current_page;

              return (
                <button
                  onClick={() => onPageChange(pageNumber)}
                  key={index}
                  className={`flex items-center justify-center text-sm w-7 h-7 rounded ${
                    isActive
                      ? darkMode
                        ? "bg-gray-400 text-white"
                        : "bg-blue-500 text-white"
                      : darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      : "bg-gray-200 hover:bg-gray-400 text-gray-800"
                  }`}
                  aria-label={`Page ${pageNumber}`}
                >
                  {pageNumber}
                </button>
              );
            })}

            {/* Next Page Button */}
            <button
              onClick={() => onPageChange(meta?.current_page + 1)}
              className={` flex items-center justify-center w-7 h-7 rounded ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-700 text-gray-300"
                  : "bg-blue-100 hover:bg-blue-300 text-blue-600"
              }`}
              aria-label="Next Page"
              disabled={meta?.next_page === null}
            >
              <MdOutlineChevronRight />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashTable;
