import React, { useState, useRef } from "react";
import {
  Form,
  Input,
  InputNumber,
  DatePicker,
  Select,
  Switch,
  Button,
  Breadcrumb,
  Divider,
  Space,
  message,
} from "antd";
import {
  PlusOutlined,
  DollarOutlined,
  CalendarOutlined,
  FileTextOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Link,useNavigate } from "react-router-dom";
import apiClient from "../../helpers/apiClient";
const { TextArea } = Input;
const { Option } = Select;

const NewFinance = () => {
  const [form] = Form.useForm();
  const [isRecurring, setIsRecurring] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState(""); // State for the new category input
  const inputRef = useRef(null); 
  const navigate = useNavigate();

  // const userData = use

  React.useEffect(() => {
    async function getCategory() {
      const response = await apiClient.get(`/categories?all=true`);
      if (response.status === 200) {
        setCategories(response?.data?.categories);
        const approvedCategories = categories.filter(
          (category) => category.status === "approved"
        );
      }
    }
    getCategory();
  }, []);

  // Handle adding a new category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategoryName) return;

    try {
      const response = await apiClient.post(`/categories`, {
        name: newCategoryName,
        status: "pending", // New categories can default to a pending state
      });
      if (response.status === 201) {
        // Add the new category to the dropdown
        setCategories([...categories, response.data]);
        setNewCategoryName("");
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  const transactionTypes = [
    { id: 1, name: "Income" },
    { id: 2, name: "Expense" },
  ];



const handleSubmit = async (values) => {
  const financeEntry = {
    finance: {
      ...values,
      transaction_type: parseInt(values.transaction_type, 10), // Ensure it's an integer
    },
  };

  // console.log("Finance Entry:", financeEntry);

  try {
    const res = await apiClient.post("/finances", financeEntry);
    if (res.status === 201) {
      navigate('/finances')
      message.success("Finance entry created successfully!", 3);      
    } else {
      console.log(res);
      message.error("Failed to create finance entry. Please try again.", 3);
    }

  } catch (e) {
    console.error("Error creating finance entry:", e);
    message.error("Failed to create finance entry. Please try again.", 3);
  }
};


  return (
    <div className="container mx-auto px-4 py-6">
      {/* Updated Breadcrumb with items prop */}
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: <Link to="/finances">Finances</Link>,
          },
          {
            title: "New Finance Entry",
          },
        ]}
        className="mb-6"
      />

      {/* Form */}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create New Finance Entry
        </h2>

        {/* Title */}
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input
            size="large"
            prefix={<FileTextOutlined className="text-gray-400" />}
            placeholder="Enter transaction title"
          />
        </Form.Item>

        {/* Amount */}
        <div className="flex w-full gap-6 items-end">
          {/* Amount Input */}
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: "Please enter the amount" }]}
            className="flex-1"
          >
            <InputNumber
              size="large"
              className="w-full"
              prefix={<DollarOutlined className="text-gray-400" />}
              formatter={(value) =>
                `Ksh ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>

          {/* Transaction Cost Input */}
          <Form.Item
            name="transaction_cost"
            label="Transaction Cost"
            rules={[{ required: true, message: "Please enter the gas fee" }]}
            className="flex-1"
          >
            <InputNumber
              size="large"
              className="w-1/2"
              prefix={<DollarOutlined className="text-gray-400" />}
              formatter={(value) =>
                `Ksh ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
        </div>

        {/* Transaction Type */}
        <Form.Item
          name="transaction_type"
          label="Transaction Type"
          rules={[
            { required: true, message: "Please select a transaction type" },
          ]}
        >
          <Select size="large" placeholder="Select transaction type">
            <Option key={0} value={0}>
              Income
            </Option>
            <Option key={1} value={1}>
              Expense
            </Option>
          </Select>
        </Form.Item>

        {/* Category */}
        <Form.Item
          name="category_id"
          label="Category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select
            size="large"
            prefix={<TagOutlined className="text-gray-400" />}
            showSearch
            style={{ width: "100%" }}
            placeholder="Select or create a category"
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
                  <Button
                    type="text"
                    icon={<PlusOutlined />}
                    onClick={handleAddCategory}
                  >
                    Add Category
                  </Button>
                </Space>
              </>
            )}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          />
        </Form.Item>

        {/* Description */}
        <Form.Item name="description" label="Description">
          <TextArea
            rows={4}
            placeholder="Enter additional details about the transaction"
          />
        </Form.Item>

        {/* Recurring Toggle */}
        <Form.Item label="Recurring Transaction ?">
          <Switch
            checked={isRecurring}
            onClick={() => message.error("only for premium users", 3)}
          />
        </Form.Item>

        {/* Recurring Details (if enabled) */}
        {isRecurring && <Recurring />}

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full mt-4">
            Create Finance Entry
          </Button>
        </Form.Item>
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
