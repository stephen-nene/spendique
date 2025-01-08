import React from "react";
import {
  ToolOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import {
  FcGenealogy,
  FcEngineering,
  FcSettings,
  FcWorkflow,
  FcHeatMap,
  FcTabletAndroid,
} from "react-icons/fc";

export default function Services() {
  const features = [
    {
      // icon: <ToolOutlined />,
      icon: <FcGenealogy />,
      title: "Customization",
      description:
        "Tailor our product to suit your needs with powerful customization options",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      icon: <FcEngineering />,
      title: "Security",
      description:
        "Your data is protected by enterprise-grade security measures",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/30",
    },
    {
      icon: <TeamOutlined />,
      title: "Support",
      description:
        "24/7 customer support team ready to help with any inquiries",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/30",
    },
    {
      icon: <ThunderboltOutlined />,
      title: "Performance",
      description:
        "Experience blazing-fast performance with our optimized platform",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/30",
    },
    {
      icon: <GlobalOutlined />,
      title: "Global Reach",
      description:
        "Expand your reach with our worldwide network and integrations",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/30",
    },
    {
      icon: <MessageOutlined />,
      title: "Communication",
      description: "Seamless communication tools to keep your team connected",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/30",
    },
  ];

  return (
    <div className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover Our Exclusive Features
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Experience the power of smart financial tracking with our
            comprehensive feature set
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-800`}
            >
              <div
                className={`text-4xl mb-6 bg-gradient-to-r ${feature.color} bg-clip-text`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
