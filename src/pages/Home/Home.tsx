import { Button, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../components/ParticlesBackground/ParticlesBackground";

const Home = () => {
  return (
    <div className="relative h-screen w-full flex justify-center items-center text-center overflow-hidden">
      <ParticlesBackground />

      <div className="z-[2] max-w-3xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl text-dark-text-secondary mb-2">Hello, I'm</h3>
        <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Marl
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4">Frontend Developer</h2>
        <p className="text-lg text-dark-text-secondary max-w-2xl mx-auto mb-6">
          I build beautiful, responsive and user-friendly web applications with
          modern technologies.
        </p>

        <Space size="middle" className="mb-8">
          <Link to="/works">
            <Button
              type="primary"
              size="large"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all"
            >
              View My Work
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="large"
              className="border-primary text-dark-text hover:text-primary hover:border-primary transition-all"
            >
              Contact Me
            </Button>
          </Link>
        </Space>

        <Space size="middle" className="ml-8">
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
        </Space>
      </div>
    </div>
  );
};

export default Home;
