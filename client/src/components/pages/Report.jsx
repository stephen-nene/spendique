import React, { useState } from "react";
import {
  DatePicker,
  Table,
  Card,
  Row,
  Col,
  Typography,
  Button,
  Space,
} from "antd";
import {
  DownloadOutlined,
  DollarCircleOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { FaWallet, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

const { Title, Text } = Typography;

const Report = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample data - replace with your actual data
  const transactions = [
    {
      key: "1",
      date: "2024-01-01",
      category: "Salary",
      description: "Monthly salary",
      amount: 5000,
      balance: 5000,
    },
    {
      key: "2",
      date: "2024-01-02",
      category: "Groceries",
      description: "Weekly groceries",
      amount: -200,
      balance: 4800,
    },
    // Add more transactions as needed
  ];

  // Calculate summary statistics
  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = Math.abs(
    transactions
      .filter((t) => t.amount < 0)
      .reduce((sum, t) => sum + t.amount, 0)
  );

  const netBalance = totalIncome - totalExpenses;

  // Table columns configuration
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <Text type={amount > 0 ? "success" : "danger"}>
          ${Math.abs(amount).toFixed(2)}
        </Text>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (balance) => `$${balance.toFixed(2)}`,
    },
  ];

  const handleDownload = () => {
    // Implement download logic here
    console.log("Downloading data...");
  };

  return (
    <div className="dark:bg-gray-900 dark:text-gray-200 min-h-screen p-6">
      {/* Header Section */}
      <Title
        level={2}
        style={{ marginBottom: "24px" }}
        className="dark:text-gray-200"
      >
        <FaWallet style={{ marginRight: "12px" }} />
        Monthly Finances Overview
      </Title>

      {/* Date Selector */}
      <div style={{ marginBottom: "24px" }}>
        <DatePicker
          picker="month"
          onChange={setSelectedDate}
          style={{ width: "200px" }}
          className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Summary Cards */}
      <Row gutter={16} style={{ marginBottom: "24px" }}>
        <Col span={8}>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <Space>
              <FaMoneyBillWave style={{ fontSize: "24px", color: "#52c41a" }} />
              <div>
                <Text type="secondary" className="dark:text-gray-400">
                  Total Income
                </Text>
                <Title
                  level={3}
                  style={{ margin: 0, color: "#52c41a" }}
                  className="dark:text-gray-200"
                >
                  ${totalIncome.toFixed(2)}
                </Title>
              </div>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <Space>
              <ArrowDownOutlined
                style={{ fontSize: "24px", color: "#f5222d" }}
              />
              <div>
                <Text type="secondary" className="dark:text-gray-400">
                  Total Expenses
                </Text>
                <Title
                  level={3}
                  style={{ margin: 0, color: "#f5222d" }}
                  className="dark:text-gray-200"
                >
                  ${totalExpenses.toFixed(2)}
                </Title>
              </div>
            </Space>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <Space>
              <FaChartLine style={{ fontSize: "24px", color: "#1890ff" }} />
              <div>
                <Text type="secondary" className="dark:text-gray-400">
                  Net Balance
                </Text>
                <Title
                  level={3}
                  style={{
                    margin: 0,
                    color: netBalance >= 0 ? "#52c41a" : "#f5222d",
                  }}
                  className="dark:text-gray-200"
                >
                  ${netBalance.toFixed(2)}
                </Title>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Transaction Table */}
      <Card
        title="Transaction History"
        extra={
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={handleDownload}
            className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          >
            Download
          </Button>
        }
        className="dark:bg-gray-800 dark:border-gray-700"
      >
        <Table
          columns={columns}
          dataSource={transactions}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} transactions`,
          }}
          className="dark:bg-gray-800 dark:text-gray-200"
        />
      </Card>
    </div>
  );
};

export default Report;
