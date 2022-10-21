import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Button, Input, Row, Col } from "antd";
import { API_URL } from "constants/ApiConstant";
import Loading from "components/shared-components/Loading";

const User = () => {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);

  let { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${API_URL}/users/${id}`).then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  }, []);

  if (loading === true) {
    return <Loading cover="page" />;
  }

  if (!user) return null;

  const onSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Send data to API
      console.log(values);
    }, 1000);
  };

  return (
    <React.Fragment>
      <h1>User page!</h1>

      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          initialValues={{
            name: user.name,
            email: user.email,
            username: user.username,
            phoneNumber: user.phone,
            website: user.website,
            street: user.address.street,
            city: user.address.city,
          }}
          onFinish={onSubmit}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
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
                  <Form.Item label="Phone Number" name="phoneNumber">
                    <Input placeholder="Input your phone number" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input placeholder="Input your website" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input placeholder="Input your city" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Street" name="street">
                    <Input placeholder="Input your street" />
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
