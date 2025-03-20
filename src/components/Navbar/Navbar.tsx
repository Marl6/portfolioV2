import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-background/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink
            to="/"
            className="text-2xl font-bold flex items-center gap-1"
          >
            <span>Marl</span>
            <span className="text-primary">Louie</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-dark-text font-medium hover:text-primary transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-dark-text font-medium hover:text-primary transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-dark-text font-medium hover:text-primary transition-colors"
              }
            >
              Works
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-dark-text font-medium hover:text-primary transition-colors"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={isOpen ? <CloseOutlined /> : <MenuOutlined />}
            className="md:hidden text-dark-text text-xl"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        placement="right"
        open={isOpen}
        onClose={toggleMenu}
        width={250}
        closeIcon={null}
        rootClassName="md:hidden"
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0, backgroundColor: "#121212" }}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-medium"
                : "text-dark-text font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-medium"
                : "text-dark-text font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-medium"
                : "text-dark-text font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Works
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-medium"
                : "text-dark-text font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </Drawer>
    </header>
  );
};

export default Navbar;
