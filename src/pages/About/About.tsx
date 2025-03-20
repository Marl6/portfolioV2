import { Row, Col, Typography, Card, Progress, Space, Divider } from "antd";
import {
  CodeOutlined,
  DesktopOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const About = () => {
  const skills = [
    { name: "React", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "HTML/CSS", percentage: 90 },
    { name: "Tailwind CSS", percentage: 85 },
    { name: "Python", percentage: 75 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Title level={1} className="text-center mb-12 text-4xl">
          About <span className="text-primary">Me</span>
        </Title>

        <Row gutter={[32, 32]} className="mb-16">
          <Col xs={24} md={12}>
            <div className="h-full">
              <Title level={2} className="mb-6">
                Who I Am
              </Title>
              <Paragraph className="text-lg text-dark-text-secondary mb-4">
                I'm a passionate frontend developer with a keen eye for design
                and a love for creating seamless user experiences. With a strong
                foundation in modern web technologies, I craft responsive and
                intuitive interfaces that bring ideas to life.
              </Paragraph>
              <Paragraph className="text-lg text-dark-text-secondary mb-4">
                My journey into web development began several years ago, fueled
                by my passion for video games, which eventually led me to pursue
                a degree in Computer Science. What started as curiosity quickly
                turned into both a passion and a hobby, driving me to create and
                build websites with enthusiasm.
              </Paragraph>
              <Paragraph className="text-lg text-dark-text-secondary mb-4">
                When I'm not coding, I enjoy playing basketball, watching
                movies, and exploring new places on my motorcycle.{" "}
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="h-full">
              <Title level={2} className="mb-6">
                My Skills
              </Title>
              <Space direction="vertical" size="large" className="w-full">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <Progress
                      percent={skill.percentage}
                      showInfo={false}
                      strokeColor={{
                        "0%": "#8A2BE2",
                        "100%": "#1E90FF",
                      }}
                    />
                  </div>
                ))}
              </Space>
            </div>
          </Col>
        </Row>

        <Divider />

        <Title level={2} className="text-center my-12">
          What I <span className="text-primary">Do</span>
        </Title>

        <Row gutter={[24, 24]} className="mb-16">
          <Col xs={24} md={8}>
            <Card
              className="h-full bg-dark-surface hover:shadow-lg transition-all"
              hoverable
            >
              <div className="text-center mb-4">
                <DesktopOutlined className="text-primary text-5xl" />
              </div>
              <Title level={3} className="text-center mb-4">
                Web Development
              </Title>
              <Paragraph className="text-dark-text-secondary">
                I create responsive, fast, and user-friendly websites using
                modern technologies like React, TypeScript, and Tailwind CSS. My
                focus is on creating seamless user experiences with clean and
                maintainable code.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              className="h-full bg-dark-surface hover:shadow-lg transition-all"
              hoverable
            >
              <div className="text-center mb-4">
                <CodeOutlined className="text-primary text-5xl" />
              </div>
              <Title level={3} className="text-center mb-4">
                Frontend Architecture
              </Title>
              <Paragraph className="text-dark-text-secondary">
                I design scalable frontend architectures, implement design
                systems, and set up CI/CD pipelines. My goal is to create
                maintainable codebases that can grow with your business needs.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card
              className="h-full bg-dark-surface hover:shadow-lg transition-all"
              hoverable
            >
              <div className="text-center mb-4">
                <MobileOutlined className="text-primary text-5xl" />
              </div>
              <Title level={3} className="text-center mb-4">
                Responsive Design
              </Title>
              <Paragraph className="text-dark-text-secondary">
                I ensure your website looks and functions perfectly on all
                devices. From desktop to mobile, I create fluid layouts that
                adapt to any screen size for the best user experience.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
