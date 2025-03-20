import { Form, Input, Button, Row, Col, Typography, Card, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // In a real app, you would send the form data to your backend
    console.log("Form values:", values);
    message.success("Thank you for your message! I will get back to you soon.");
    form.resetFields();
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Title level={1} className="text-center mb-12 text-4xl">
          Get In <span className="text-primary">Touch</span>
        </Title>

        <Paragraph className="text-center text-lg text-dark-text-secondary mb-12 max-w-3xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out if you have a question or just want to say hello!
        </Paragraph>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={10}>
            <div className="h-full">
              <Title level={2} className="mb-6">
                Contact Information
              </Title>

              <div className="mb-8">
                <Card className="bg-dark-surface mb-4">
                  <div className="flex items-center">
                    <MailOutlined className="text-primary text-2xl mr-4" />
                    <div>
                      <div className="text-sm text-dark-text-secondary">
                        Email
                      </div>
                      <a
                        href="mailto:hello@example.com"
                        className="text-lg hover:text-primary transition-colors"
                      >
                        louiekerby@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="bg-dark-surface mb-4">
                  <div className="flex items-center">
                    <PhoneOutlined className="text-primary text-2xl mr-4" />
                    <div>
                      <div className="text-sm text-dark-text-secondary">
                        Phone
                      </div>
                      <a
                        href="tel:+1234567890"
                        className="text-lg hover:text-primary transition-colors"
                      >
                        +63 915 677 8025
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="bg-dark-surface">
                  <div className="flex items-center">
                    <EnvironmentOutlined className="text-primary text-2xl mr-4" />
                    <div>
                      <div className="text-sm text-dark-text-secondary">
                        Location
                      </div>
                      <div className="text-lg">Davao City, Philippines</div>
                    </div>
                  </div>
                </Card>
              </div>

              <Title level={3} className="mb-4">
                Follow <span className="text-primary">Me</span>
              </Title>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Marl6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary text-2xl hover:text-primary transition-all hover:-translate-y-1"
                >
                  <GithubOutlined />
                </a>
                <a
                  href="https://www.linkedin.com/in/marllouiecalimutan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary text-2xl hover:text-primary transition-all hover:-translate-y-1"
                >
                  <LinkedinOutlined />
                </a>
                <a
                  href="https://www.facebook.com/share/15UnrX5QES/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text-secondary text-2xl hover:text-primary transition-all hover:-translate-y-1"
                >
                  <FacebookOutlined />
                </a>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={14}>
            <Card className="bg-dark-surface h-full">
              <Title level={2} className="mb-6">
                Send Me a Message
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
              >
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input size="large" placeholder="Your name" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input size="large" placeholder="Your email" />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[
                    { required: true, message: "Please enter a subject" },
                  ]}
                >
                  <Input size="large" placeholder="Subject of your message" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <TextArea
                    rows={6}
                    placeholder="Your message"
                    className="resize-none"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="bg-gradient-to-r from-primary to-secondary"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
