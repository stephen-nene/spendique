import React, { useState, useRef } from "react";
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  message,
  Divider,
  Space,
} from "antd";
import {
  PlusOutlined,
  DollarOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../helpers/apiClient";
import dayjs from "dayjs";

const { TextArea } = Input;
const { Option } = Select;

const NewFinance = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [transactionType, setTransactionType] = useState(1);

  const inputRef = useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getCategory = async () => {
      const response = await apiClient.get("/categories?all=true");
      if (response.status === 200) {
        setCategories(response?.data?.categories);
      }
    };
    getCategory();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName) return;

    try {
      const response = await apiClient.post("/categories", {
        name: newCategoryName,
        status: "pending",
      });
      if (response.status === 201) {
        setCategories([...categories, response.data]);
        setNewCategoryName("");
        inputRef.current?.focus();
      }
    } catch (error) {
      message.error("Failed to add category");
    }
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const financeEntry = {
        finance: {
          ...values,
          date_created: values.date_created.format("YYYY-MM-DD HH:mm:ss.SSS"),
          transaction_type: parseInt(values.transaction_type, 10),
        },
      };

      const res = await apiClient.post("/finances", financeEntry);
      if (res.status === 201) {
        navigate("/finances");
        message.success("Finance entry created successfully!");
      }
    } catch (error) {
      message.error("Failed to create finance entry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <nav className="mb-8">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link to="/finances" className="text-blue-600 hover:underline">
            Finances
          </Link>
          <span>/</span>
          <span className="text-gray-600">New</span>
        </div>
      </nav>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          date_created: dayjs(),
          transaction_type: 1,
          transaction_cost: 0,
        }}
        onValuesChange={(changedValues) => {
          if (changedValues.transaction_type !== undefined) {
            setTransactionType(changedValues.transaction_type);
          }
        }}
        className={`max-w-2xl mx-auto p-6 rounded-lg shadow-lg ${
          transactionType === 1
            ? "bg-rose-100 dark:bg-rose-900/30"
            : "bg-sky-50 dark:bg-sky-900/30"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create New Finance Entry
        </h2>

        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input
            size="large"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Enter transaction title"
          />
        </Form.Item>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            name="amount"
            label="Amount in Ksh"
            rules={[{ required: true, message: "Please enter the amount" }]}
          >
            <InputNumber
              prefix={<DollarOutlined className="text-gray-400 mr-2" />}
              size="large"
              className="w-full"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/KSh\s?|(,*)/g, "")}
            />
          </Form.Item>

          <Form.Item
            name="transaction_cost"
            label="Transaction Cost in Ksh"
            rules={[
              { required: true, message: "Please enter the transaction cost" },
            ]}
          >
            <InputNumber
              prefix={<DollarOutlined className="text-gray-400 mr-3" />}
              size="large"
              className="w-full"
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/KSh\s?|(,*)/g, "")}
            />
          </Form.Item>
        </div>

        <Form.Item
          name="date_created"
          label="Transaction Date"
          rules={[{ required: true, message: "Please select a date" }]}
        >
          <DatePicker size="large" className="w-full" />
        </Form.Item>

        <Form.Item
          name="transaction_type"
          label="Transaction Type"
          rules={[{ required: true }]}
        >
          <Select size="large" placeholder="Select transaction type">
            <Option value={0}>Income</Option>
            <Option value={1}>Expense</Option>
          </Select>
        </Form.Item>

        {/* Category */}
        <Form.Item
          name="categories"
          label="Categories"
          rules={[
            { required: true, message: "Please select at least one category" },
          ]}
        >
          <Select
            mode="multiple"
            size="large"
            prefix={<TagOutlined className="text-gray-400" />}
            showSearch
            style={{ width: "100%" }}
            placeholder="Select or create categories"
            filterOption={(input, option) =>
              option?.label.toLowerCase().includes(input.toLowerCase())
            }
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: "8px 0" }} />
                <Space style={{ padding: "0 8px 4px" }}>
                  <Input
                    placeholder="Enter new category name"
                    ref={inputRef}
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    onKeyDown={(e) => e.stopPropagation()} // Prevent dropdown from closing on Enter
                  />
                  <button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2"
                    type="button"
                    onClick={handleAddCategory}
                  >
                    <span>
                      <PlusOutlined />
                    </span>
                    <span>Add Category</span>
                  </button>
                </Space>
              </>
            )}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          />
        </Form.Item>

        <Form.Item name="description" label="Description">
          <textarea
            className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            rows={4}
            placeholder="Enter transaction details"
          />
        </Form.Item>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded text-white font-medium ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Creating Entry..." : "Create Finance Entry"}
        </button>
      </Form>
    </div>
  );
};

export default NewFinance;

const Recurring = () => {
  const recurringFrequencies = [
    { id: "daily", name: "Daily" },
    { id: "weekly", name: "Weekly" },
    { id: "biweekly", name: "Bi-Weekly" },
    { id: "monthly", name: "Monthly" },
    { id: "quarterly", name: "Quarterly" },
    { id: "annually", name: "Annually" },
  ];

  const recurringNoteOptions = [
    "Fixed Cost",
    "Estimated Amount",
    "Variable Cost",
  ];
  return (
    <div className="space-y-4">
      {/* Frequency */}
      <Form.Item
        name="recurring_frequency"
        label="Recurring Frequency"
        rules={[
          { required: isRecurring, message: "Please select a frequency" },
        ]}
      >
        <Select placeholder="Select recurring frequency">
          {recurringFrequencies.map((freq) => (
            <Option key={freq.id} value={freq.id}>
              {freq.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <div className="flex justify-between flex-col sm:flex-row">
        {/* Start Date */}
        <Form.Item
          name="recurring_start_date"
          label="Start Date"
          rules={[
            {
              required: isRecurring,
              message: "Please select a start date",
            },
          ]}
        >
          <DatePicker className="w-full" />
        </Form.Item>

        {/* End Date */}
        <Form.Item name="recurring_end_date" label="End Date">
          <DatePicker className="w-full" placeholder="Optional end date" />
        </Form.Item>
      </div>

      {/* Amount Variation */}
      <Form.Item name="recurring_amount_variation" label="Amount Variation">
        <InputNumber
          size="large"
          className="w-full"
          formatter={(value) => `± ${value}%`}
          parser={(value) => value.replace("± ", "").replace("%", "")}
          placeholder="Optional percentage variation"
        />
      </Form.Item>

      {/* Recurring Notes */}
      <Form.Item name="recurring_notes" label="Recurring Notes">
        <Select
          mode="multiple"
          placeholder="Select notes about this recurring transaction"
          style={{ width: "100%" }}
        >
          {recurringNoteOptions.map((note) => (
            <Option key={note} value={note}>
              {note}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};
