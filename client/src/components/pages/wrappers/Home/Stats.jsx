import React from "react";
import {
  DollarOutlined,
  UsergroupAddOutlined,
  SwapOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

export default function Stats() {
  const stats = [
    {
      name: "Money Saved by Users",
      stat: "KSH 5.4M+",
      icon: <DollarOutlined className="text-2xl text-green-500" />,
      color: "bg-green-50 dark:bg-green-900/30",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      name: "Active Monthly Users",
      stat: "80K+",
      icon: <UsergroupAddOutlined className="text-2xl text-blue-500" />,
      color: "bg-blue-50 dark:bg-blue-900/30",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      name: "Daily Transactions",
      stat: "100K+",
      icon: <SwapOutlined className="text-2xl text-purple-500" />,
      color: "bg-purple-50 dark:bg-purple-900/30",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      name: "Reliability",
      stat: "99.9% Uptime",
      icon: <SafetyOutlined className="text-2xl text-orange-500" />,
      color: "bg-orange-50 dark:bg-orange-900/30",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
  ];

  return (
    <div className=" px-6 py-16 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl max-sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Our Spending Habit Tracker?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Trusted by thousands, our tracker offers powerful insights to help
            you manage your spending effectively. See why users love us:
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} ${stat.borderColor} border rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
                  {stat.name}
                </p>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.stat}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
