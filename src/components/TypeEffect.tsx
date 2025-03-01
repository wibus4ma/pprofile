import React, { useState, useEffect } from "react";

interface TypeEffectProps {
  text: string;
  speed?: number;
}

const TypeEffect: React.FC<TypeEffectProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="text-white text-4xl font-mono border-r-2 border-white inline-block">
      {displayText}
    </h1>
  );
};

export default TypeEffect;
