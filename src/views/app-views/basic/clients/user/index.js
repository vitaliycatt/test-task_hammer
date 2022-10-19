import React from "react";
import { Form, Button, Input, DatePicker, Row, Col } from "antd";

const User = () => {
  return (
    <React.Fragment>
      <h1>User page!</h1>

      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          //   initialValues={}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row
              //   gutter={ROW_GUTTER}
              >
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input your name!",
                    //   },
                    // ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Date of Birth" name="dateOfBirth">
                    <DatePicker className="w-100" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phoneNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Address" name="address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Post code" name="postcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default User;
