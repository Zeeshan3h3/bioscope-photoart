"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
    direction?: "up" | "down" | "left" | "right";
    once?: boolean;
}

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    distance = 40,
    direction = "up",
    once = true,
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10% 0px" });

    const xOffset = direction === "left" ? distance : direction === "right" ? -distance : 0;
    const yOffset = direction === "up" ? distance : direction === "down" ? -distance : 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: xOffset, y: yOffset }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: xOffset, y: yOffset }}
            transition={{ duration, delay, ease: [0.25, 0.25, 0, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
