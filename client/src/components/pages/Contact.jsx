import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Form submitted with values:", values);

    // Simulate API call
    setTimeout(() => {
      message.success("Message sent successfully!");
      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: <FaFacebookF className="text-2xl" />, href: "#" },
    { icon: <FaLinkedin className="text-2xl" />, href: "#" },
    { icon: <FaInstagram className="text-2xl" />, href: "#" },
    { icon: <FaXTwitter className="text-2xl" />, href: "#" },
  ];

  return (
    <div className="max-w-5xl items-center grid md:grid-cols-2 gap-16   p-8">
      {/* Left Section */}
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold ">Let's Talk</h1>
          <p className=" mt-4">
            Have a big idea or brand to develop? We'd love to hear about your
            project and provide assistance.
          </p>
        </div>

        {/* Email Section */}
        <div>
          <h2 className="text-xl font-semibold  mb-4">Email</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-50 p-3 rounded-full">
              <MdEmail className="text-blue-600 text-xl" />
            </div>
            <div>
              <span className="text-sm text-gray-500">Talk to me</span>
              <a
                href="mailto:stevekid705@gmail.com"
                className="block text-blue-600 font-semibold"
              >
                stevekid705@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Socials</h2>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-blue-50 p-3 rounded-full hover:bg-blue-100 transition-colors"
              >
                <span className="text-blue-600">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Name" size="large" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Email" size="large" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="subject"
            rules={[{ required: true, message: "Please enter a subject" }]}
          >
            <Input placeholder="Subject" size="large" className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea placeholder="Message" rows={6} className="rounded-lg" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
