import { useState, useEffect } from "react";
import { Button, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../components/ParticlesBackground/ParticlesBackground";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const Home = () => {
  const roles = ["Frontend Developer", "Student", "Wanderer"];
  const [currentRole, setCurrentRole] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      // If deleting
      if (isDeleting) {
        setCurrentRole(fullText.substring(0, currentRole.length - 1));
        setTypingSpeed(80); // Faster when deleting

        // If deleted completely, start typing the next role
        if (currentRole === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(150); // Normal speed for typing
        }
      }
      // If typing
      else {
        setCurrentRole(fullText.substring(0, currentRole.length + 1));

        // If completed typing, pause before deleting
        if (currentRole === fullText) {
          setTypingSpeed(2000); // Pause at the end of typing
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(80); // Faster when deleting
          }, 2000);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRole, currentRoleIndex, isDeleting, roles, typingSpeed]);

  return (
    <div className="relative h-screen w-full flex justify-center items-center text-center overflow-hidden">
      <ParticlesBackground />

      <div className="z-[2] max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <ProfilePicture size={150} className="mx-auto" />
        </div>
        <h3 className="text-xl text-dark-text-secondary mb-2">Hello, I'm</h3>
        <h1 className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Marl
        </h1>
        <h3 className="text-xl text-dark-text-secondary mb-2">and I am a</h3>

        <h2 className="text-2xl md:text-3xl mb-4 h-10 flex justify-center items-center">
          {currentRole}
          <span className="border-r-2 border-primary ml-1 animate-pulse">
            &nbsp;
          </span>
        </h2>

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
