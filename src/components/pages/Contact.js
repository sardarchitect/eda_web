import React from "react";
import { PageBanner } from "../PageBanner";
import "./_Contact.scss";

import { Button } from "antd";
import { Form, Input } from "antd";

export const Contact = () => {
  return (
    <div className="contact">
      <PageBanner
        title="Contact"
        img="https://picsum.photos/300/600?random=42"
      />
      <div className="contact-wrapper">
        <div className="contact-info">
          <h1>Contact Info</h1>
          <p>
            24 Frank Lloyd Wright Drive <br /> Suite H1800 PO Box 533
            <br /> Ann Arbor MI 48106
          </p>
          <p>734.930.3394</p>
          <p>dmooney@edgedesignassociates.com</p>
        </div>
        <div className="contact-form">
          <h1>Let's Talk</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ContactForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={["user", "company"]} label="Company">
        <Input />
      </Form.Item>

      <Form.Item name={["user", "message"]} label="Message">
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: "#ce2b2c", borderColor: "#ce2b2c" }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
