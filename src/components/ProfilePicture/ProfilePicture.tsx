import React from "react";
import { motion } from "framer-motion";
import myPicture from "src/assets/img/marl.jpg";

interface ProfilePictureProps {
  size?: number;
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  size = 50,
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-full overflow-hidden ${className}`}
      style={{ width: `${size + 70}px`, height: `${size + 70}px` }}
    >
      {/* Gradient border using framer-motion */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, #8A2BE2, #FF00FF, #00BFFF, #8A2BE2)",
          backgroundSize: "400% 400%",
          zIndex: 0,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Smaller inner circle for the actual image */}
      <div
        className="absolute rounded-full overflow-hidden shadow-2xl"
        style={{
          top: "5px",
          left: "5px",
          right: "5px",
          bottom: "5px",
          zIndex: 1,
        }}
      >
        <img
          loading="lazy"
          src="/portfolioV2/src/assets/img/marl.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
