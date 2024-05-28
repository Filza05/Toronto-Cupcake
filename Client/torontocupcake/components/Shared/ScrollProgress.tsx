"use client"

import { motion, useSpring, useScroll } from "framer-motion";
import React from 'react';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-3 bg-[#D14D72] origin-left"
            style={{ scaleX  }}
        />
    );
};

export default ScrollProgress;
