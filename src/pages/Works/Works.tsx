import { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Tag,
  Space,
  Modal,
  Image,
} from "antd";
import { GithubOutlined, LinkOutlined, EyeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Project {
  id: number;
  title: string;
  description: string;
  imageCard: string;
  imageDetails: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  longDescription: string;
}

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sample projects data (you would replace with your actual projects)
  const projects: Project[] = [
    {
      id: 1,
      title: "ScanSeta",
      imageCard: "/portfolioV2/src/assets/img/ScanSetaImageCard.png",
      description:
        "A prescription scanner kiosk that allows users to scan prescriptions and retrieve medicine information.",
      imageDetails: "/portfolioV2/src/assets/img/ScanSetaImageDetails.png",
      technologies: ["React", "Python", "SQLite", "Flask", "CRNN"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      longDescription:
        "ScanSeta was my thesis project which is a kiosk-based system that scans handwritten prescriptions and identifies medicine names using advanced handwriting recognition. It leverages deep learning models for text localization and recognition, providing users with accurate medicine information in real time.",
    },
    {
      id: 2,
      title: "Leave Management System",
      description:
        "A leave management system that allows employees to request and track their leave.",
      imageCard: "src/assets/img/WaterDistrictCard.png",
      imageDetails: "src/assets/img/WaterDistrictDetails.png",
      technologies: ["React", "TypeScript", "MobX", "Tailwind CSS"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      longDescription:
        "This Leave Management System was developed during our On-The-Job Training program at Davao City Water District from February to April 2025. The system consists of multiple modules, and our team was responsible for the Leave Management module. We designed the frontend using React with TypeScript and styled it with Tailwind CSS.",
    },
    {
      id: 3,
      title: "Real Time Dashboard",
      description:
        "Data Pipeline Experiment on Distributed Computing using a Real-time Dashboard.",
      imageCard: "src/assets/img/DashboardCard.png",
      imageDetails: "src/assets/img/DashboardDetails.png",
      technologies: ["NodeJS", "Chart.js", "Python", "Kafka"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      longDescription:
        "This dashboard is a data pipeline experiment on distributed computing using a real-time dashboard. It uses Node.js for the backend, Chart.js for data visualization, Python for creating dummy data, and Kafka for real-time data streaming. The dashboard provides a visual representation of the data pipeline and allows users to monitor the data flow in real-time. This project was created as a final project for my distributed computing course.",
    },
    {
      id: 4,
      title: "TBD",
      description: "Description TBD",
      imageCard: "src/assets/img/SocialMediaCard.png",
      imageDetails: "src/assets/img/SocialMediaDetails.png",
      technologies: ["TBD", "TBD", "TBD", "TBD"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
      longDescription: "DESCRIPTION TBD",
    },
  ];

  const showProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Title level={1} className="text-center mb-12 text-4xl">
          My <span className="text-primary">Works</span>
        </Title>

        <Paragraph className="text-center text-lg text-dark-text-secondary mb-12 max-w-3xl mx-auto">
          Here are some of my recent projects. Each project represents a unique
          challenge and opportunity to create something meaningful and
          impactful.
        </Paragraph>

        <Row gutter={[24, 32]}>
          {projects.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.id}>
              <Card
                hoverable
                cover={
                  <img
                    alt={project.title}
                    src={project.imageCard}
                    className="h-48 object-cover"
                  />
                }
                className="h-full bg-dark-surface overflow-hidden"
                actions={[
                  <Button
                    type="text"
                    icon={<EyeOutlined />}
                    onClick={() => showProjectDetails(project)}
                  >
                    Details
                  </Button>,
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button type="text" icon={<GithubOutlined />}>
                      Code
                    </Button>
                  </a>,
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button type="text" icon={<LinkOutlined />}>
                      Demo
                    </Button>
                  </a>,
                ]}
              >
                <Title level={4}>{project.title}</Title>
                <Paragraph className="text-dark-text-secondary mb-4 h-12 overflow-hidden">
                  {project.description}
                </Paragraph>
                <Space size={[0, "small"]} wrap>
                  {project.technologies.map((tech) => (
                    <Tag key={tech} color="purple">
                      {tech}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          open={selectedProject !== null}
          title={selectedProject?.title}
          onCancel={closeProjectDetails}
          footer={[
            <Button key="close" onClick={closeProjectDetails}>
              Close
            </Button>,
            <a
              key="github"
              href={selectedProject?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon={<GithubOutlined />}>GitHub</Button>
            </a>,
            <a
              key="demo"
              href={selectedProject?.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="primary" icon={<LinkOutlined />}>
                Live Demo
              </Button>
            </a>,
          ]}
          width={800}
        >
          {selectedProject && (
            <>
              <Image
                src={selectedProject.imageDetails}
                alt={selectedProject.title}
                className="mb-4 rounded-md"
              />
              <Paragraph className="text-dark-text-secondary">
                {selectedProject.longDescription}
              </Paragraph>
              <div className="mt-4">
                <Title level={5}>Technologies Used:</Title>
                <Space size={[0, "small"]} wrap>
                  {selectedProject.technologies.map((tech) => (
                    <Tag key={tech} color="purple">
                      {tech}
                    </Tag>
                  ))}
                </Space>
              </div>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Works;
