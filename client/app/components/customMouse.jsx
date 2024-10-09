"use client";
import { motion as m } from "framer-motion";
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorVariant = useSelector((state) => state.cursor.cursorVariant);

  useEffect(() => {
    let animationFrameId;

    const mouseMove = (e) => {
      // Using requestAnimationFrame for better performance
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      cancelAnimationFrame(animationFrameId); // Clean up animation frame
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x + 8,
      y: mousePosition.y + 8,
      height: 0,
      width: 0,
      mixBlendMode: "difference",
      backgroundColor: "#FFF9EB",
      transition: { duration: 0.5, type: "spring", delay: 0 },
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      mixBlendMode: "difference",
      backgroundColor: "#FFF9EB",
      transition: { duration: 0.5, type: "spring", delay: 0 },
    },
  };

  const bagIcon = {
    default: {
      mixBlendMode: "normal",
    },
    text: {
      mixBlendMode: "normal",
    },
  };

  return (
    <div>
      <m.div
        className="cursor h-[32px] w-[32px] rounded-[50%] fixed top-0 left-0 pointer-events-none items-center justify-center text-[60px] hidden xl:flex"
        variants={variants}
        animate={cursorVariant}
        transition={{ duration: 0, delay: 0 }}
      >
        <m.p style={{mixBlendMode: 'normal'}}>👜</m.p>
      </m.div>
    </div>
  );
};

export default CustomMouse;
