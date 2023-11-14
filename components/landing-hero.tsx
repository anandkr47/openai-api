// components/LandingHero.tsx
'use client'
import React, { useRef, useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const LandingHero: React.FC = () => {
  const { isSignedIn } = useAuth();
  const birdRef = useRef<HTMLImageElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      if (birdRef.current) {
        const bird = birdRef.current;
        const dx = e.clientX - (bird.offsetLeft + bird.width / 2);
        const dy = e.clientY - (bird.offsetTop + bird.height / 2);
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        setRotationAngle(angle);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const birdStyle: React.CSSProperties = {
    position: "fixed",
    top: `${mousePosition.y}px`,
    left: `${mousePosition.x}px`,
    transform: `rotate(${rotationAngle}deg)`,
    transition: "transform 0.2s ease-in-out",
  };

  const hideCursorStyle: React.CSSProperties = {
    cursor: "none",
  };

  return (
    <div className="text-white font-bold py-20 text-center space-y-5" style={hideCursorStyle}>
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-white">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center my-4 mx-auto">
        <Image alt="Your GIF Description" src="/robo.gif" width={200} height={200} />
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="ghost" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div>
      <div style={birdStyle}>
        <Image alt="bird-gif" src="/bird.gif" width={150} height={200} ref={birdRef} />
      </div>
    </div>
  );
};
